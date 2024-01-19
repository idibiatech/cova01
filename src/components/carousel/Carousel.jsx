import "./carousel.css";
import ui from "../../assets/portfolio/ui.jpg";
import branding from "../../assets/portfolio/branding.jpg";
import logo from "../../assets/portfolio/logop.jpg";
import web from "../../assets/portfolio/web.jpg";
import Reveal from "../Animated/Reveal";
import { RevealImage } from "../Animated/Reveal";
import { motion } from "framer-motion";
import { useState } from "react";

const carouselItem = [
	{
		img: ui,
		heading: "ui development",
		text: "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, natus. ",
	},
	{
		img: logo,
		heading: "ui development",
		text: "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, natus. ",
	},
	{
		img: branding,
		heading: "ui development",
		text: "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, natus. ",
	},
	{
		img: web,
		heading: "ui development",
		text: "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, natus. ",
	},
];

const Carousel = () => {
	const onDragStart = () => {
		console.log("start");
		setDragging(true);
	};
	const onDragEnd = () => {
		console.log("end");
		setDragging(false);
	};
	const [dragging, setDragging] = useState(false);
	const [imgIndex, setImageIndex] = useState(0);
	return (
		<div className="carousel-wrapper">
			<motion.div
				drag="x"
				dragConstraints={{
					left: 0,
					right: 0,
				}}
				onDragStart={onDragStart}
				onDragEnd={onDragEnd}
				animate={{
					translateX: `-${imgIndex * 30}%`,
				}}
				className="carousel-container"
			>
				<Images />
			</motion.div>
		</div>
	);
};
export default Carousel;

const Images = () => {
	return (
		<>
			{carouselItem.map((item, index) => {
				return (
					<motion.div className="carousel-item-wrapper">
						<RevealImage>
							<div
								key={index}
								className="carousel-Image"
								style={{
									backgroundImage: `url(${item.img})`,
								}}
							></div>
						</RevealImage>
						<div className="carousel-text-container">
							<Reveal>
								<h3>{item.heading}</h3>
								<p>{item.text}</p>
								<a href="/">
									<div className="carousel-btn">View Portfolio</div>
								</a>
							</Reveal>
						</div>
					</motion.div>
				);
			})}
		</>
	);
};
