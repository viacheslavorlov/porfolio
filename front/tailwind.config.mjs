/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			keyframes: {
				appear: {
					"0%": { opacity: 0, transform: "translateY(20px)" },
					"100%": { opacity: 1, transform: "translateY(0px)" },
				},
			},
			animation: {
				appear: "appear 0.5s linear ",
			},
			colors: {
				"text-color": "#fff",
				accent: "rgb(22, 163, 74)",
				"bg-main": "rgb(31, 41, 55)",
				"bg-accent": "#000",
			},
		},
	},
	plugins: [],
};
