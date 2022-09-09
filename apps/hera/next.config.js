const withTM = require('next-transpile-modules')(['@core/ui'])

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
}

// module.exports = nextConfig

module.exports = withTM(nextConfig)
