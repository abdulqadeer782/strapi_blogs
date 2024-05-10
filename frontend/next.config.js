/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer")

const nextConfig = {
    compiler: {
        removeConsole: true,
    },
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'http', // Or 'https' depending on Strapi URL
                hostname: 'localhost:1337',
            },
        ],
    },

};

module.exports = withContentlayer({ ...nextConfig });
