import bot from '/assets/bot.svg'
import user from '/assets/user.svg'

const form = document.querySelector('form')
const chatContainer = document.querySelector('#chat-container')

let loadInterval = null;

const loader = (element) => {
    element.textContent = 'Loading ';
    loadInterval = setInterval(() => {
        element.textContent += '.';
        if (element.textContent === 'Loading ....') {
            element.textContent = 'Loading ';
        }
    }, 300);
}

const typeText = (element, text) => {
    let index = 0;
    const interval = setInterval(() => {
        if(index < text.length) {
            element.innerHTML += text.charAt(index);
        }
        else {
            clearInterval(interval);
        }
    }, 30);
        
}

const generateUniqueID = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random());
    const hexidecmal = random.toString(16);
    return `id-${timestamp}-${hexidecmal}`;
}

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
}

form.addEventListener('submit', handleSubmit);
form.addEventListener('keyup', (event) => {
    if(event.keyCode === 13) {
        handleSubmit(event);
    }
});