import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: {'max': '1200px'},  
      lg: {'max': '991px'},
      md: {'max': '768px'},
      sm: {'max': '576px'},
    },

    container: {
      screens: {
         DEFAULT: "100%",
         xl: {'max': '1140px'},  
         lg: {'max': '940px'},
         md: {'max': '720px'},
         sm: {'max': '540px'},
         },
    },
    extend: {
   
      backgroundImage: {
        'main-img' : 'url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/d9d4a2134580777.61d83c01a0f1f.png")',
        'features-img' : "url('https://bogatyr.club/uploads/posts/2024-05/79728/1715760336_bogatyr-club-3z0x-p-tumannii-les-oboi-na-rabochii-stol-5.jpg')"
      },
      gridTemplateColumns: {
        'paper': 'repeat(3, calc(33% - 15px))',
        'paperLg': 'repeat(2, calc(50% - 15px))',
        'paperMd': 'repeat(1, 100%)',
        }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1140px',
          '@screen xl': {
            maxWidth: '940px',
          },
          '@screen lg': {
            maxWidth: '720px',
          },
          '@screen md': {
            maxWidth: '540px',
          },
          '@screen sm': {
            maxWidth: '340px',
          },
        }
      })
    }
  ]
};
export default config;
