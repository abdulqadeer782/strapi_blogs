/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer")

const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/en',
                permanent: true,
            },
        ];
    },
    compiler: {
        removeConsole: true,
    },
    reactStrictMode: true,
    images: {
        domains: ['localhost'],
    },

};

module.exports = withContentlayer({ ...nextConfig });
