import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { useState, useEffect } from "react"
import Collage from "./components/Collage"

// import styles
import "./index.css"

// import types


const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Collage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App