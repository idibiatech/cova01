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
import iconBlue from "../assets/icons/arrow-blue.png";
import iconWhite from "../assets/icons/arrow-white.png";

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
						<h3>
							We cover a wide range of
							<span className="hl-blue01 "> tailored services</span> and
							products to meet your <span className="hl-blue01">needs</span>
						</h3>
					</div>
					<div className="secondary-text">
						<p>
							We build engaging user experience for early-stage startups by
							connecting the dots between users’ needs and the client’s business
							model.
						</p>
						<div>
							<a href="/">See Details</a>
						</div>
					</div>
					<div className="services-wrapper">
						<ul>
							<li>
								<p className="service-p">MARKETING AS A SERVICE</p>{" "}
								<img src={iconBlue} alt="" />
							</li>
							<li>
								<p className="service-p">product & brand design</p>{" "}
								<img src={iconWhite} alt="" />
							</li>
							<li>
								<p className="service-p">WEB & MOBILE DEVELOPMENT</p>{" "}
								<img src={iconBlue} alt="" />
							</li>
							<li>
								<p className="service-p">TALENT MANAGEMENT</p>{" "}
								<img src={iconWhite} alt="" />
							</li>
						</ul>
					</div>
				</div>

				<div className="secondary-text">
					<p>
						We build engaging user experience for early-stage startups by
						connecting the dots between users’ needs and the client’s business
						model.
					</p>
					<p>
						<a href="/">See Details</a>
					</p>
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
