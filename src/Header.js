import React from "react";
import { Link } from "react-router-dom";
import openAILogo from "../src/assets/images/openai.svg";

const Header = () => {
	return (
		<>
			<header className="header">

				<div className="logo-wrapper">
					<a href="https://platform.openai.com/docs/api-reference" target="_blank" rel="noreferrer"><img src={openAILogo} alt="openai logo" className="openaiLogo" title="OpenAI API"/></a>
					<h3>Powered by OpenAI API</h3>
				</div>
				<h1 className="headerTitle">GLIA</h1>
				<h4 className="headerSubTitle">GPT Language Interpreting Assistant</h4>
				<nav>
					<Link to="/home" className="navBtns">Home</Link>
					<Link to="/chatbox" className="navBtns">Chatbox</Link>
					<Link to="/contact" className="navBtns">Contact</Link>
				</nav>
			</header>
		</>
	);
};

export default Header;
