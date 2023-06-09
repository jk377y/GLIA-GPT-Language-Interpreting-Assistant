import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <>
        <header className="header">
            <h1 className="headerTitle">GLIA</h1>
            <h4 className="headerSubTitle">GPT Language Interpreting Assistant</h4>
            <nav>
                <Link to="/home" className="navBtns">Home</Link>
                <Link to="/chatbox" className="navBtns">Chatbox</Link>
                <Link to="/contact" className="navBtns">Contact</Link>
            </nav>
        </header>
    </>
  )
}

export default Header