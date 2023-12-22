import { Link } from "react-router-dom";
import Transition from "../Transition";
import hero from "../assets/hero-01.jpg";
import "./pages.css";
import ui from "../assets/portfolio/ui.jpg";
import branding from "../assets/portfolio/branding.jpg";
import logo from "../assets/portfolio/logop.jpg";
import web from "../assets/portfolio/web.jpg";
import Footer from "../components/Footer/Footer";

const Home = () => {
	return (
		<>
			<div className="hero-wrapper">
				<div className="hero-text-wrapper">
					<p>
						<span>C</span> <span>O</span> <span>V</span> <span>A</span>
					</p>
				</div>
			</div>
			<section className="hero-content-wrapper">
				<div className="wrapper">
					<div className="left-hero-content">
						<h3>
							<span>CREATIVE</span> <span>OASIS OF</span>{" "}
							<highlight className="hl-blue">VERSATILITY</highlight> AND-MORE
						</h3>
					</div>
					<div className="right-hero-content">
						<p>
							With soo many businesses competing for the same space you are in,
							we have carefully crafted our service to make sure you always
							stand out in this digital age. With so much to look out for, the
							key is to create a solution that meets the exact problem.
						</p>
						<p>
							We always employ our proven innovative and creative processes when
							on any project. We are committed to excellence and that is why we
							rely on the principles of this four steps
						</p>
						<div className="hero-left-bottom-wrapper">
							<div className="x1">
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
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="what-we-do-wrapper">
				<div className="what-we-do">
					<p>We Code</p>
				</div>
			</section>
			<section>
				<div className="divider"></div>
			</section>
			<section className="portfolio-intro-wrapper">
				<div className="port ">
					<img src={ui} alt="image of ui design" />
					<div className="port-content">
						<h3>UI</h3>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
							voluptatem corporis qui iste quas, modi aspernatur provident nihil
							obcaecati. Tempore!
						</p>
					</div>
				</div>
				<div className="port ">
					<img src={branding} alt="" />
					<div className="port-content">
						<h3>Branding</h3>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
							voluptatem corporis qui iste quas, modi aspernatur provident nihil
							obcaecati. Tempore!
						</p>
					</div>
				</div>
				<div className="port ">
					<img src={logo} alt="" />
					<div className="port-content">
						<h3>Logo</h3>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
							voluptatem corporis qui iste quas, modi aspernatur provident nihil
							obcaecati. Tempore!
						</p>
					</div>
				</div>
				<div className="port">
					<img src={web} alt="" />
					<div className="port-content">
						<h3>Web</h3>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
							voluptatem corporis qui iste quas, modi aspernatur provident nihil
							obcaecati. Tempore!
						</p>
					</div>
				</div>
				<div>
					<Link className="hl-blue" to="/portfolio">
						View portfolio
					</Link>
				</div>
			</section>
			<div className="divider" style={{ margin: 0 }}></div>
			<div>
				<Footer />
			</div>
		</>
	);
};

const WrappedHome = Transition(Home);
export default WrappedHome;
