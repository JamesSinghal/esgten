module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: false,
     theme: {
       extend: {
           colors: {
            'grad_gray': '#466E43',
            'grad_blue': '#87BBB9', 
           }
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }