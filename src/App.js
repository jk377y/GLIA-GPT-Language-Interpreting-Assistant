import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Chatbox from './Chatbox'
import Contact from './Contact'
import NotFound from './NotFound'

function App() {

	return (
		<div id="app" className="app">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/homepage" element={<Home />} />
				<Route path="/chatbox" element={<Chatbox />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
