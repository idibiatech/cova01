import "./pages.css";
// dependency imports
import { useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";

import ScrollTrigger from "gsap/dist/ScrollTrigger";
import iconBlue from "../assets/icons/arrow-blue.png";
import iconWhite from "../assets/icons/arrow-white.png";
import Carousel from "../components/carousel/Carousel";
import { Link } from "react-router-dom";

// image imports
import hero from "../assets/hero-01.jpg";
import ui from "../assets/portfolio/ui.jpg";
import branding from "../assets/portfolio/branding.jpg";
import logo from "../assets/portfolio/logop.jpg";
import web from "../assets/portfolio/web.jpg";
import pinIcon from "../assets/icons/pin.png";
import emailIcon from "../assets/icons/email.png";

// comp imports
import Transition from "../Transition";
import Footer from "../components/Footer/Footer";
import Reveal from "../components/Animated/Reveal";
import { RevealImage, RevealIcon } from "../components/Animated/Reveal";

const Home = () => {
	// const heroText = useRef(null);
	const heroC = useRef(null);
	gsap.registerPlugin(ScrollTrigger);
	// const c = document.querySelector(".c");

	useEffect(() => {
		gsap.to(".c", {
			y: 300,
			x: -100,
			rotation: 30,
			scrollTrigger: {
				trigger: ".hero-content-wrapper",
				start: "top 50%",
				end: "top top",
				scrub: true,
			},
		});
		gsap.to(".o", {
			y: 400,
			rotation: 150,
			scrollTrigger: {
				trigger: ".hero-content-wrapper",
				start: "top 50%",
				end: "top top",
				scrub: true,
			},
		});
		gsap.to(".v", {
			y: 250,
			x: 20,
			rotation: -30,
			scrollTrigger: {
				trigger: ".hero-content-wrapper",
				start: "top 50%",
				end: "top top",
				scrub: true,
			},
		});
		gsap.to(".a", {
			y: 350,
			x: 50,
			rotation: -30,
			scrollTrigger: {
				trigger: ".hero-content-wrapper",
				start: "top 50%",
				end: "top top",
				scrub: true,
			},
		});
		gsap.to(".hero-sub-text", {
			opacity: 0,

			scrollTrigger: {
				trigger: ".hero-content-wrapper",
				start: "top 50%",
				end: "top 40%",
				scrub: true,
			},
		});
	}, []);
	// gsap.to(".c", {
	// 	y: 1000,
	// 	// scale: 10,
	// });
	return (
		<div className="pageWrapper">
			<div className="hero-wrapper">
				<div className="hero-text-wrapper">
					<p className="heroText">
						<span ref={heroC} className="c">
							C
						</span>
						<span className="o">O</span>
						<span className="v">V</span> <span className="a">A</span>
					</p>

					<p className="hero-sub-text">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
						vitae illum laboriosam exercitationem mollitia assumenda ipsam
						veritatis incidunt veniam tenetur.
					</p>
				</div>
			</div>
			<section className="hero-content-wrapper">
				<div className="wrapper">
					<div className="top-hero-content">
						<Reveal>
							<h3>
								We cover a wide range of
								<span className="hl-blue01 "> tailored services</span> and
								products to meet your <span className="hl-blue01">needs</span>
							</h3>
						</Reveal>
					</div>
					<div className="secondary-text">
						<Reveal>
							<p className="secondary-text-p">
								We build engaging user experience for early-stage startups by
								connecting the dots between users’ needs and the client’s
								business model.
							</p>
						</Reveal>
						<div className="secondary-text-a">
							<Reveal>
								<a href="/">See Details</a>
							</Reveal>
						</div>
					</div>
					<div className="services-wrapper">
						<ul>
							<li>
								<Reveal>
									<p className="service-p">MARKETING AS A SERVICE</p>{" "}
								</Reveal>
								<RevealIcon>
									<img src={iconBlue} alt="" />
								</RevealIcon>
							</li>
							<li>
								<Reveal>
									<p className="service-p">product & brand design</p>{" "}
								</Reveal>
								<RevealIcon>
									<img src={iconWhite} alt="" />
								</RevealIcon>
							</li>
							<li>
								<Reveal>
									<p className="service-p">WEB & MOBILE DEVELOPMENT</p>{" "}
								</Reveal>
								<RevealIcon>
									<img src={iconBlue} alt="" />
								</RevealIcon>
							</li>

							<li>
								<Reveal>
									<p className="service-p">TALENT MANAGEMENT</p>{" "}
								</Reveal>
								<RevealIcon>
									<img src={iconWhite} alt="" />
								</RevealIcon>
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* <section className="portfolio-intro-wrapper">
				<div className="portfolio-header">
					<h3>Featured projects</h3>
					<div className="port-intro">
						<div className="port-intro-text">
							<p>We create beautiful, practical works</p>
						</div>
						<div className="port-intro-btn-wrapper">
							<a href="">
								<p className="port-intro-btn">VIEW ALL PROJECT</p>
							</a>
						</div>
					</div>
				</div>
				<div className="port ">
					<RevealImage>
						<img src={ui} alt="image of ui design" />
					</RevealImage>
					<div className="port-content">
						<Reveal>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
								nulla.
							</p>
							<h4>UI/UX Development</h4>
						</Reveal>
					</div>
				</div>
				<div className="port ">
					<RevealImage>
						<img src={branding} alt="" />
					</RevealImage>
					<div className="port-content">
						<Reveal>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
								nulla.
							</p>
							<h4>Product Branding</h4>
						</Reveal>
					</div>
				</div>
				<div className="port ">
					<RevealImage>
						<img src={logo} alt="" />
					</RevealImage>
					<div className="port-content">
						<Reveal>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
								nulla.
							</p>
							<h4>Logo Design</h4>
						</Reveal>
					</div>
				</div>
				<div className="port">
					<RevealImage>
						<img src={web} alt="" />
					</RevealImage>
					<div className="port-content">
						<Reveal>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
								nulla.
							</p>
							<h4>Web Development</h4>
						</Reveal>
					</div>
				</div>
			</section> */}
			{/* <section className="home-contact">
				<div className="contact-wrapper">
					<h3>Get in touch</h3>
					<p>Email us</p>
					<a href="">
						<div className="email-btn"></div>
					</a>
				</div>
			</section> */}
			{/* <div className="divider" style={{ margin: 0 }}></div> */}
			<section className="portfolio-wrapper">
				<div className="portfolio-header">
					<h3>Featured projects</h3>
					<div className="port-intro">
						<div className="port-intro-text">
							<p>We create beautiful, practical works</p>
						</div>
						<div className="port-intro-btn-wrapper">
							<a href="">
								<p className="port-intro-btn">VIEW ALL PROJECT</p>
							</a>
						</div>
					</div>
				</div>
				<Carousel />
			</section>
			<section className="clients-wrapper">
				<h3>Clients we’ve worked with</h3>
				<div className="client-icon"></div>
			</section>

			<section className="enquiry-wrapper">
				<div className="left">
					<p>Have a project? Let's do it together</p>
				</div>
				<div className="right">
					<div className="right-one right-cont">
						<img src={pinIcon} alt="pin icon for location" />{" "}
						<p>
							Lorem ipsum dolor sit amet consectetur. Orci vitae ac eu ornare.
						</p>
					</div>
					<div className="right-two right-cont">
						<img src={emailIcon} alt="email icon for location" />{" "}
						<p>
							<a href="/">contact@covatech.com</a>
						</p>
					</div>
				</div>
			</section>
			<section>
				<Footer />
			</section>
		</div>
	);
};

export default Home;
