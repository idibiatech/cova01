import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="footer-wrapper">
			<div className="footer-right-wrapper">
				<ul>
					<li>
						<Link className="link" to="/">
							Home
						</Link>
					</li>
					<li>
						<Link className="link" to="/about">
							About us
						</Link>
					</li>
					<li>
						<Link className="link" to="/portfolio">
							Portfolio
						</Link>
					</li>
					<li>
						<Link className="link" to="contact">
							Contact us
						</Link>
					</li>
				</ul>
			</div>
			<div className="footer-left-wrapper">
				<p>© 2024 COVA</p>
			</div>
		</div>
	);
};
export default Footer;
