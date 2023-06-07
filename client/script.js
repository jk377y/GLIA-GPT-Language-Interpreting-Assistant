import bot from '/assets/bot.svg'
import user from '/assets/user.svg'

const form = document.querySelector('form')
const chatContainer = document.querySelector('#chat_container')

let loadInterval = null;

// text animation while loading
const loader = (element) => {
    element.textContent = 'Feeding hamsters ';
    loadInterval = setInterval(() => {
        element.textContent += '.';
        if (element.textContent === 'Feeding hamsters .....') {
            element.textContent = 'Feeding hamsters ';
        }
    }, 200);
}

// animation for displaying text gradually on the screen
const typeText = (element, text) => {
    let index = 0;
    const animate = () => {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            requestAnimationFrame(animate);
        }
    };
    requestAnimationFrame(animate);
};

// generate unique id for each message
const generateUniqueID = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000000);
    const hexadecimal = random.toString(16).padStart(6, '0');
    return `id-${timestamp}-${hexadecimal}`;
};

// chat stripe template so user and bot messages can be displayed on the screen and visually be distinguished
const chatStripe = (isAI, value, uniqueID) => {
    return(
        `
        <div class="wrapper ${isAI && 'ai'}>
            <div class="chat">
                <div class="profile">
                    <img src="${isAI ? bot : user}" alt="profile" />
                </div>
                <div class="message" id=${uniqueID}>${value}</div>>
            </div>
        </div>
        `
    )
}

// handle form submit 
const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    chatContainer.innerHTML += chatStripe(false, data.get('prompt'));
    form.reset();
    const uniqueID = generateUniqueID();
    chatContainer.innerHTML += chatStripe(true, ' ', uniqueID);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    const messageDiv = document.getElementById(uniqueID);
    loader(messageDiv);
    const response = await fetch('http://localhost:1337', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            prompt: data.get('prompt')
        })
    })

    clearInterval(loadInterval)
    messageDiv.innerHTML = " "

    if (response.ok) {
        const data = await response.json();
        const parsedData = data.bot.trim()

        typeText(messageDiv, parsedData)
    } else {
        const err = await response.text()

        messageDiv.innerHTML = "Something went wrong"
        alert(err)
    }
}

// event listeners for send button and enter key
form.addEventListener('submit', handleSubmit);
form.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        handleSubmit(event);
    }
});