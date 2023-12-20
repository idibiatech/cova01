import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";

import { menuSlide, linksSlide } from "../anim";
import { motion, AnimatePresence } from "framer-motion";

const navLinksList = [
	{ title: "Home", href: "/" },
	{ title: "About", href: "/about" },
	{ title: "Contact", href: "/contact" },
];
const NavBar = () => {
	const [isActive, setIsActive] = useState(false);
	return (
		<div className="nav">
			<div className="header-wrapper">
				<div className="logo">
					<Link className="nav-link" to="/">
						Cova
					</Link>
				</div>
				<div
					className="burger-wrapper"
					onClick={() => {
						setIsActive(!isActive);
					}}
				>
					<div
						className={` burger ${
							isActive ? "burgerActive" : "burgerInActive"
						}`}
					></div>
				</div>
			</div>
			<AnimatePresence mode="wait">
				{isActive && (
					<motion.div
						variants={menuSlide}
						animate="enter"
						initial="initial"
						exit="exit"
						className="nav-links"
					>
						<motion.div className="navHeader">NAVIGATION</motion.div>
						{navLinksList.map((item, index) => {
							return (
								<motion.div
									custom={index}
									variants={linksSlide}
									animate="enter"
									initial="initial"
									exit="exit"
									className="nav-item"
								>
									<Link key={index} className="nav-link" to={item.href}>
										{item.title}
									</Link>
								</motion.div>
							);
						})}
						<div className="menuFooter">
							<ul>
								<li>
									<a href="/">instagram</a>
								</li>
								<li>
									<a href="/">twitter</a>
								</li>
								<li>
									<a href="/">facebook</a>
								</li>
								<li>
									<a href="/">linkedin</a>
								</li>
							</ul>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
export default NavBar;
