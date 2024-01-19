import Transition from "../Transition";
import gsap from "gsap/all";
import { useEffect, useRef, useLayoutEffect } from "react";
import "./pages.css";
import emailBlack from "../assets/icons/emailBlack.png";
import pinBlack from "../assets/icons/pinBlack.png";
import phone from "../assets/icons/phone.png";

const Contact = () => {
	gsap.to(".contact", {
		opacity: 1,
		x: 1000,
	});
	return (
		<div className="contact bg-wave2 bg-center bg-cover ">
			<div className="contact-top">
				<h1 className="text-5xl ">Get in touch today</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur. Urna malesuada faucibus ut
					vestibulum id at. Morbi lectus facilisis urna auctor euismod sed sed
					sem. Nisl elit felis tristique at nibh hendrerit. Elit pellentesque
					cras amet molestie ipsum commodo at.
				</p>
			</div>
			<div className="contact-wrapper">
				<div className="contact-item">
					<img src={emailBlack} alt="" />
					<h3>Send us an email</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
						voluptatum.
					</p>
					<div>
						<a href="mailto:support@example.com">support@example.com</a>
					</div>
				</div>

				<div className="contact-item">
					<img src={phone} alt="" />
					<h3>Give us a call</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
						voluptatum.
					</p>
					<div>
						<a href="mailto:support@example.com">087187</a>
					</div>
				</div>

				<div className="contact-item">
					<img src={pinBlack} alt="" />
					<h3>Visit our office</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
						voluptatum.
					</p>
					<div>
						<a href="mailto:support@example.com">
							20C Gado Nasko Way, Flat 4D, Kubwa, Abuja FCT
						</a>
					</div>
				</div>

				<div className="contact-item">
					<img src={phone} alt="" />
					<h3>SEE OUR SOCIALS</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
						voluptatum.
					</p>
					<div>
						<ul className="flex gap-3">
							<li>
								<a href="/">LinkedIn</a>
							</li>
							<li>
								<a href="/">instagram</a>
							</li>
							<li>
								<a href="/">Facebook</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Transition(Contact);
