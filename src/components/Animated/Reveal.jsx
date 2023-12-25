import { useEffect, useRef } from "react";
import "./index.css";
import { motion, useInView, useAnimation } from "framer-motion";
const Reveal = (props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const mainControls = useAnimation();
	const slideControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
			slideControls.start("visible");
		}
	}, [isInView]);
	return (
		<div style={{ position: "relative" }}>
			<motion.div
				ref={ref}
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate={mainControls}
				transition={{ delay: 0.5, delay: 0.3 }}
				className="reveal"
			>
				{props.children}
			</motion.div>
			<motion.div
				variants={{
					hidden: { left: 0 },
					visible: { left: "100%" },
				}}
				initial="hidden"
				animate={slideControls}
				transition={{ duration: 0.5, ease: "easeIn" }}
				className="slider"
			></motion.div>
		</div>
	);
};
export default Reveal;
