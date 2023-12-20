export const menuSlide = {
	initial: {
		x: "100%",
	},
	enter: {
		x: "0%",
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
	},
	exit: {
		x: "100%",
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
	},
};
export const linksSlide = {
	initial: {
		x: "80px",
	},
	enter: (i) => ({
		x: "0px",
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.16 * i },
	}),
	exit: (i) => ({
		x: "80px",
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
	}),
};
// export const footerSlide = {
// 	initial: {
// 		y: "80px",
// 	},
// 	enter: {
// 		y: "0px",
// 		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
// 	},
// 	exit: {
// 		y: "80px",
// 		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
// 	},
// };
