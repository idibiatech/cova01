import Transition from "../Transition";
import hero from "../assets/hero-01.jpg";
import "./pages.css";

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
			<div className="hero-content-wrapper">
				<div className="wrapper">
					<div className="left-hero-content"></div>
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
							rely on the principles of this four steps:{" "}
						</p>
						<div></div>
					</div>
				</div>
			</div>
		</>
	);
};

const WrappedHome = Transition(Home);
export default WrappedHome;
