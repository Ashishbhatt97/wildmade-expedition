/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                nature: {
                    900: '#051C12',
                    800: '#062C1D',
                    700: '#064E3B',
                    600: '#059669',
                    500: '#10B981',
                    400: '#34D399',
                    accent: '#84CC16', // Neon Lime
                },
                futuristic: {
                    glow: '#10B981',
                    dark: '#020617',
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                outfit: ['var(--font-outfit)'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'futuristic-green': 'linear-gradient(180deg, #051C12 0%, #020617 100%)',
            }
        },
    },
    plugins: [],
}
