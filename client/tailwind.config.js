export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                imprima: ['Imprima', 'sans-serif'],
            },
            colors: {
                primary: '#3164DE',
                secondary: '#769BF5',
                danger: '#DC2626',
                calypso: {
                    50: '#ecfeff',
                    100: '#d0f9fd',
                    200: '#a7f1fa',
                    300: '#6ae5f6',
                    400: '#27d0e9',
                    500: '#0bb3cf',
                    600: '#0c8fae',
                    700: '#11728d',
                    800: '#175d73',
                    900: '#184d61',
                    950: '#093243',
                },
            },
            borderRadius: {
                vm: '.5rem',
            },
        },
    },
    plugins: [],
};
