import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				// Primary colors
				primaryBlue: '#1e3a8a', // Main blue for background and text on light backgrounds
				lightGray: '#f3f4f6', // Light gray for background elements and text on blue backgrounds
				lightBlue: '#f0f4f8', // Light blue for background elements on light places
				darkButton: '#1e293b', // Dark color for main buttons
				secondaryButton: '#334155', // Secondary buttons

				// Shades of gray for icons and secondary elements
				iconGray: '#9ca3af',

				// Colors for financial operations
				successGreen: '#10b981', // Green for balance top-up
				errorRed: '#b91c1c', // Red for error messages
				warningYellow: '#f59e0b', // Yellow for sending to another card
				withdrawalRed: '#ef4444', // Red for withdrawals
				successText: '#059669', // Text color for success messages

				// Additional colors
				borderGray: '#d1d5db', // Gray for dividers and borders
			},
			screens: {
				xxs: '320px',
				xs: '480px',
			},
			container: {
				center: true,
				padding: '1rem',
				screens: {
					xxs: '100%',
					xs: '100%',
					sm: '640px',
					md: '768px',
					lg: '1024px',
					xl: '1280px',
					'2xl': '1536px',
				},
			},
		},
	},
	plugins: [],
};
export default config;
