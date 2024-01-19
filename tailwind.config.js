/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		backgroundImage: {
			wave2: "url('./assets/wave.png')",
			// "footer-texture": "url('/img/footer-texture.png')",
		},
	},
	plugins: [],
};
