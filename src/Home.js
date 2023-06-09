import React, { useState, useEffect } from 'react';
import glia from '../src/assets/images/glia.jpg';

const Home = () => {
  const [message, setMessage] = useState('Hello, I am <span class="highlight">GLIA</span>');
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const messages = [
      'Hello, I am <span class="highlight">GLIA</span>.',
      'I am your \n<span class="highlight">G</span>PT \n<span class="highlight">L</span>anguage \n<span class="highlight">I</span>nterpreting \n<span class="highlight">A</span>ssistant.',
      'Feel free to visit the <a href="/chatbox" class="chatboxLink">Chatbox</a> and ask me any questions.',
      'I am glad that I can be of service today.',
      'All of my responses are routed through the <a href="https://platform.openai.com/docs/api-reference" target="_blank" rel="noreferrer" class="highlight">OPENAI API</a>.',
    ];

    let currentIndex = 0;
    const timer = setInterval(() => {
      setShowMessage(false);
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % messages.length;
        setMessage(messages[currentIndex]);
        setShowMessage(true);
      }, 1000);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="home">
        <img src={glia} alt="glia" className="glia" />
        <div className={`chat-bubble ${showMessage ? 'fade-in' : 'fade-out'}`}>
          <div className="message" dangerouslySetInnerHTML={{ __html: message }} />
        </div>
      </div>
    </>
  );
};

export default Home;