/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'suisse': ['Suisse', 'sans-serif'],
				'suisse-works': ['Suisse-Works', 'serif'],
				'jha': ['Jha', 'serif'],
			},
			colors: {
				'primary': '#4169E1',
				'background': '#F9F6EE',
				'accent': '#0000FF'
			}
		},
	},

	plugins: [],
}
