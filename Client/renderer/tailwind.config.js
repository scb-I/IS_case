const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './renderer/pages/**/*.{js,ts,jsx,tsx}',
        './renderer/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                body: ['Onest'],
                franklin: ['Franklin Gothic Medium'],
                raleway: ['Raleway'],
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: '#641ae6',

                    secondary: '#d926a9',

                    accent: '#1fb2a6',

                    neutral: '#3a3f43',

                    'base-100': '#2b3033',

                    info: '#3abff8',

                    success: '#36d399',

                    warning: '#fbbd23',

                    error: '#f87272',
                },
            },
        ],
    },
};
