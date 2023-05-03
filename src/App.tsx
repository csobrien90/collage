import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { useState, useEffect } from "react"

// import pages
import Home from "./pages/Home"

// import template components
import Header from "./components/Header"
import Footer from "./components/Footer"

// import functions


// import styles
import "./index.css"

// import types


const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App