/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0A1A2F",   // Deep navy
                accent: "#1BAA5A",    // Compliance green
                muted: "#F7F9FC",     // Light grey-blue
                warning: "#F5A623",   // Amber
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            maxWidth: {
                'page': '960px',
            }
        },
    },
    plugins: [],
}
