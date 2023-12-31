import { useState } from "react";

import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();

	return (
		<>
			<NavBar />
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</AnimatePresence>
		</>
	);
}

export default App;
