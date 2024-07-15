/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				'MyGray': 'rgba(0,0,0,0.5)',
				'char-yellow-01': 'rgba(253,206,16,1)',
				'char-yellow-02': 'rgba(238,131,40,1)',
				'char-yellow-03': 'rgba(238,221,122,1)',
				'char-red-01': 'rgba(225,67,24,1)',
				'char-blue-01': 'rgba(32,115,148,1)',
			},
		},
	},
	plugins: [require('daisyui'), require('flowbite/plugin')],
	daisyui: {
		themes:  [
			{
			  charmander: {
				"primary": "#e53800",
				"primary-focus": "#de5138",
				"primary-content": "#ffffff",
				"secondary": "#de5138",
				"secondary-focus": "#fe9441",
				"secondary-content": "#ffffff",
				"accent": "#fbc204",
				"accent-focus": "#fed276",
				"accent-content": "#2a2e37",
				"accent-hover": "#fbfa08",
				"neutral": "#dbc06b",
				"neutral-focus": "#9c6228",
				"neutral-content": "#2a2e37",
				"base-100": "#2a2e37",
				//"base-200": "#2a2e37",//butons
				//"base-300": "#16181d",
				"info": "#66c6ff",
				"success": "#87d039",
				"warning": "#e2d562",
				"error": "#ff6f6f",
				"background-color": "#87d039",/*
				"accent-focus": "#de5138",
				"accent-content": "#ffffff",
				"neutral-content": "#ffffff",
				"base-100-content": "#ffffff",
				"primary-content": "#ffffff",
				"secondary-content": "#ffffff",
				"body": "#ffffff",
				"body-content": "#000000",
				"border": "#e4e4e4",
				"border-content": "#000000",
				"input": "#f4f4f4",
				"input-content": "#000000",
				"card": "#ffffff",
				"card-content": "#000000",
				"dialog": "#ffffff",
				"dialog-content": "#000000",
				"dropdown": "#ffffff",
				"dropdown-content": "#000000",
				"header": "#ffffff",
				"--rounded-box": "0.5rem",
				"--rounded-btn": "0.5rem",
				"--rounded-badge": "2.25rem",
				"--rounded-lg": "0.75rem",
				"--rounded-xl": "1rem",
				"--rounded-full": "9999px",
				"--rounded-none": "0px",
				"--rounded-sm": "0.375rem",
				"--rounded-md": "0.5rem",
				"--rounded-3xl": "1.5rem",
				"--rounded-2xl": "1rem",
				"--rounded-4xl": "2rem",
				"--rounded-t-lg": "0.75rem",
				"--rounded-r-lg": "0.75rem",
				"--rounded-b-lg": "0.75rem",  */
			  },
			},
			"light","dark", "cupcake"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "dark", // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ":root", // The element that receives theme color CSS variables
	  },
	
	
	  darkMode: ['class', '[data-theme="charmander"]']
}
