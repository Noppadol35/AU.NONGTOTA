/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                toyota: {
                    red: '#EB0A1E',
                    black: '#1C1C1C',
                    silver: '#C0C0C0',
                    gray: '#6B7280',
                    lightgray: '#F3F4F6',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'automotive-texture': "url('/images/automotive-texture.jpg')",
                'hero-bg': "url('/images/hero-bg.jpg')",
            },
        },
    },
    plugins: [],
}
