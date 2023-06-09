import { useState } from "react";
import airplane from "./assets/images/airplane.png";
import { sendMessageToOpenAI } from "./openai";

function Chatbox() {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);

	const handleMessageSend = async () => {
		const response = await sendMessageToOpenAI(input);
		setMessages([...messages, { text: input, isUser: true }, { text: response, isUser: false }]);
		setInput("");
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleMessageSend();
		}
	};

	return (
		<>
			{/* setting chat box class based on if the message sent was from the input sent or the response received */}
			<div className="chat">
				{messages.map((message, index) => (
					<div key={index} className={message.isUser ? "user-chat" : "bot-chat"}>
						{message.text}
					</div>
				))}
			</div>

			{/* this sets the text in the input box to the {input} */}
			<div className="input-wrapper">
				<input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyPress}/>
				<button onClick={handleMessageSend}>
					<img src={airplane} className="submit-btn" title="Send" alt="airplane send button" />
				</button>
			</div>
		</>
	);
}

export default Chatbox;
