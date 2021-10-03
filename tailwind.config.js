module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: false,
     theme: {
       extend: {
           colors: {
            'grad_gray': '#E9EDE8',
            'grad_blue': '#DBEAEA', 
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
