import { Link } from "react-router-dom";
import Transition from "../Transition";
import hero from "../assets/hero-01.jpg";
import "./pages.css";
import ui from "../assets/portfolio/ui.jpg";
import branding from "../assets/portfolio/branding.jpg";
import logo from "../assets/portfolio/logop.jpg";
import web from "../assets/portfolio/web.jpg";
import Footer from "../components/Footer/Footer";
import Reveal from "../components/Animated/Reveal";
import { RevealImage } from "../components/Animated/Reveal";
import { useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

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
				start: "top 70%",
				end: "top top",
				scrub: true,
			},
		});
		gsap.to(".o", {
			y: 400,
			rotation: 150,
			scrollTrigger: {
				trigger: ".hero-content-wrapper",
				start: "top 70%",
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
				start: "top 70%",
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
				start: "top 70%",
				end: "top top",
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
				</div>
			</div>
			<section className="hero-content-wrapper">
				<div className="wrapper">
					<div className="left-hero-content">
						<h3>
							<span>CREATIVE</span> <span>OASIS OF</span>{" "}
							<div className="hl-blue">VERSATILITY</div> AND MORE
						</h3>
					</div>
					<div className="right-hero-content">
						<Reveal>
							<p>
								With soo many businesses competing for the same space you are
								in, we have carefully crafted our service to make sure you
								always stand out in this digital age. With so much to look out
								for, the key is to create a solution that meets the exact
								problem.
							</p>{" "}
						</Reveal>
						<Reveal>
							<p>
								We always employ our proven innovative and creative processes
								when on any project. We are committed to excellence and that is
								why we rely on the principles of this four steps
							</p>
						</Reveal>
						<div className="hero-left-bottom-wrapper">
							{/* <div className="x1">
								<p>Project Analysis & Research</p>
							</div>
							<div>
								<p>Concept Development</p>
							</div>
							<div>
								<p>Iteration</p>
							</div>
							<div>
								<p>Execution/Prototyping</p>
							</div> */}
							<RevealImage className="steps-wrapper">
								<ul>
									<li className="steps">Project Analysis & Research</li>

									<li className="steps">Concept Development</li>

									<li className="steps">Iteration</li>

									<li className="steps">Execution/Prototyping</li>
								</ul>
							</RevealImage>
						</div>
					</div>
				</div>
			</section>
			<section className="what-we-do-wrapper">
				<div className="what-we-do">
					<Reveal>
						<p>We Code</p>
					</Reveal>
				</div>
			</section>
			<section>
				<div className="divider"></div>
			</section>
			<section className="portfolio-intro-wrapper">
				<div className="port ">
					<RevealImage>
						<img src={ui} alt="image of ui design" />
					</RevealImage>
					<div className="port-content">
						<Reveal>
							<h3>UI</h3>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
								voluptatem corporis qui iste quas, modi aspernatur provident
								nihil obcaecati. Tempore!
							</p>
						</Reveal>
					</div>
				</div>
				<div className="port ">
					<RevealImage>
						<img src={branding} alt="" />
					</RevealImage>
					<div className="port-content">
						<Reveal>
							<h3>Branding</h3>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
								voluptatem corporis qui iste quas, modi aspernatur provident
								nihil obcaecati. Tempore!
							</p>
						</Reveal>
					</div>
				</div>
				<div className="port ">
					<RevealImage>
						<img src={logo} alt="" />
					</RevealImage>
					<div className="port-content">
						<Reveal>
							<h3>Logo</h3>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
								voluptatem corporis qui iste quas, modi aspernatur provident
								nihil obcaecati. Tempore!
							</p>
						</Reveal>
					</div>
				</div>
				<div className="port">
					<RevealImage>
						<img src={web} alt="" />
					</RevealImage>
					<div className="port-content">
						<Reveal>
							<h3>Web</h3>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
								voluptatem corporis qui iste quas, modi aspernatur provident
								nihil obcaecati. Tempore!
							</p>
						</Reveal>
					</div>
				</div>
				<div>
					<Link className="hl-blue" to="/portfolio">
						View portfolio
					</Link>
				</div>
			</section>
			<section className="home-contact">
				<div className="contact-wrapper">
					<h3>Get in touch</h3>
					<p>Email us</p>
					<a href="">
						<div className="email-btn"></div>
					</a>
				</div>
			</section>
			<div className="divider" style={{ margin: 0 }}></div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
