/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer")

const nextConfig = {
    compiler: {
        removeConsole: true,
    },
    reactStrictMode: true,
    images: {
        domains: ['localhost'],
    },

};

module.exports = withContentlayer({ ...nextConfig });
