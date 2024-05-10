export default function manifest() {
    return {
        name: 'Next.js App',
        short_name: 'Next.js App',
        description: 'Next.js App',
        start_url: '/',
        display: 'standalone',
        //   background_color: '#fff',
        //   theme_color: '#fff',
        icons: [
            {
                "src": "favicon.ico",
                "sizes": "64x64 32x32 24x24 16x16",
                "type": "image/x-icon"
            }
        ]
    }
}