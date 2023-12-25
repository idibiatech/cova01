import Transition from "../Transition";
import gsap from "gsap/all";
import { useEffect, useRef, useLayoutEffect } from "react";

const Contact = () => {
	gsap.to(".contact", {
		opacity: 1,
		x: 1000,
	});
	return <div className="contact">Contact</div>;
};

export default Transition(Contact);
