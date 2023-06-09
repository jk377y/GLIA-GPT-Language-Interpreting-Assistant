import { useState } from "react";
import airplane from "./assets/images/airplane.png";
import glia from "./assets/images/glia.jpg";
import { sendMessageToOpenAI } from "./openai";

function Chatbox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleMessageSend = async () => {
    setMessages([...messages, { text: "", isUser: false, isResearching: true }]);
    const response = await sendMessageToOpenAI(input);
    setMessages([...messages, { text: input, isUser: true }, { text: response, isUser: false, isResearching: false }]);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleMessageSend();
    }
  };

  return (
    <>
      <div className="chat">
        {messages.map((message, index) => (
          <div key={index} className={message.isUser ? "user-chat" : "bot-chat"}>
            {message.isResearching ? (
              <>
                {message.text}
                <span className="dot-1"></span>
                <span className="dot-2"></span>
                <span className="dot-3"></span>
              </>
            ) : (
              message.text
            )}
          </div>
        ))}
      </div>

      <div className="input-wrapper">
        <img src={glia} alt="glia" className="gliachat" title="Feel free to ask me anything" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type a question here ..."
        />
        <button onClick={handleMessageSend}>
          <img src={airplane} className="submit-btn" title="Send" alt="airplane send button" />
        </button>
      </div>
    </>
  );
}

export default Chatbox;
