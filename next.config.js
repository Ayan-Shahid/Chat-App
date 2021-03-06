/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: [
			"lh3.googleusercontent.com",
			"firebasestorage.googleapis.com",
			"avatars.githubusercontent.com",
		],
	},
};

module.exports = nextConfig;
