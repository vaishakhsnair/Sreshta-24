/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': {
         'raw':'(max-width:780px)' 
          // max:'780px'
        },
        'mh':{'raw':'(max-height:680px)'},
        'tw':{max:'1300px',min:'779px'},
        'ip':{'raw':'(min-height:1060px)'}
      },
      colors: {
        offWhite: "#E9F8E8",
        tech: {
          primary: "#435856",
          bg: "#DAEBEC",
        },
        arts: {
          primary: "#585343",
          bg: "#BAB8AF",
        },
      },
      backgroundImage: {
        "page-left": "url('/events/bg-left.png')",
        "page-right": "url('/events/bg-right.png')",
      },
    },
  },
  plugins: [],
};
