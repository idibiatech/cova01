import { motion } from "framer-motion";

const Transition = (OgComponent) => {
	return () => (
		<>
			<OgComponent />
			<motion.div
				className="slide-in"
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 1 }}
				transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
			>
				<div className="title">
					<span>C</span>
					<span>O</span>
					<span>V</span>
					<span>A</span>
				</div>
			</motion.div>
			<motion.div
				className="slide-out"
				initial={{ scaleY: 1 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 0 }}
				transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
			/>
		</>
	);
};

export default Transition;
