/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#11728D',
                secondary: '#047857',
                danger: '#DC2626',
            },
            borderRadius: {
                vm: '.5rem',
            },
        },
    },
    plugins: [],
};
