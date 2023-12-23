import { useEffect, useRef } from "react";
import "./index.css";
import { motion, useInView, useAnimation } from "framer-motion";
const Reveal = (props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const mainControls = useAnimation();
	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		}
	}, [isInView]);
	return (
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
	);
};
export default Reveal;
