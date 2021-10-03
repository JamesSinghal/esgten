module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: false,
     theme: {
       extend: {
           colors: {
            'grad_gray': '#d6e3d3',
            'grad_blue': '#cae0e0', 
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
