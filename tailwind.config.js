module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			color: {
				lightBorder: "var(--lightBorder)",
				black: "var(--black)",
				lightGray: "var(--lightGray)",
				darkGray: "var(--darkGray)",
				border: "var(--border)",
			},
			fontFamily: {
				sourceCodePro: ["Source Code Pro", "monospace"],
				rampart: ["Rampart One", "cursive"],
				klee: ["Klee One", "cursive"],
				inter: ["Inter", "sans-serif"],
			},
			typography: {
				DEFAULT: {
					css: {
						color: "#333",
						a: {
							color: "#32a2e3",
							"&:hover": {
								color: "#2c5d82",
							},
						},
						code: {
							backgroundColor: "#fcfcfc",
						},
					},
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("tailwind-scrollbar"), require("@tailwindcss/typography")],
};
