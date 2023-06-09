import React from 'react'
import openAILogo from "../src/assets/images/openai.svg";
const Contact = () => {
  return (
    <div className='contactList'>
        <h3>Email:&emsp;<a href="mailto:jk377y@gmail.com" target="_blank" rel="noreferrer" className='links'>jk377y@gmail.com</a></h3>
        <h3>Portfolio:&emsp;<a href="https://jk377y.dev" target="_blank" rel="noreferrer" className='links'>https://jk377y.dev</a></h3>
        <h3>GitHub:&emsp;<a href="https://github.com/jk377y" target="_blank" rel="noreferrer" className='links'>https://github.com/jk377y</a></h3>
        <h3>LinkedIn:&emsp;<a href="https://www.linkedin.com/in/james-kelly-software-developer/" target="_blank" rel="noreferrer" className='links'>https://www.linkedin.com/in/james-kelly-software-developer/</a></h3>
        <div className='logo-wrapper2'>
            <h3>This project is powered by the OpenAI API</h3>
            <a href="https://platform.openai.com/docs/api-reference" target="_blank" rel="noreferrer"><img src={openAILogo} alt="openai logo" className="openaiLogo" title="OpenAI API"/></a>
        </div>

    </div>
  )
}

export default Contact