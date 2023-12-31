import "./carousel.css";
import ui from "../../assets/portfolio/ui.jpg";
import branding from "../../assets/portfolio/branding.jpg";
import logo from "../../assets/portfolio/logop.jpg";
import web from "../../assets/portfolio/web.jpg";
import Reveal from "../Animated/Reveal";
import { RevealImage } from "../Animated/Reveal";

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
	return (
		<div className="carousel-wrapper">
			<div className="carousel-container">
				<Images />
			</div>
		</div>
	);
};
export default Carousel;

const Images = () => {
	return (
		<>
			{carouselItem.map((item, index) => {
				return (
					<div className="carousel-item-wrapper">
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
					</div>
				);
			})}
		</>
	);
};
