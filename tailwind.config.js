module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: false,
     theme: {
       extend: {
           colors: {
            'grad_gray': '#61ab5c',
            'grad_blue': '#00aba4', 
            'side_left': '#EFFFD8',
            'side_right': '#92E126'
           }
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }