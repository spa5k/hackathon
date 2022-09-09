const withTM = require('next-transpile-modules')(['@core/ui', '@core/models', '@core/queries'])

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
}

// module.exports = nextConfig

module.exports = withTM(nextConfig)
