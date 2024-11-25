/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      'logo1': ['Bruno Ace', 'cursive'],
      'logo2': ['Limelight', 'cursive'],
      'logo3': ['Ribeye', 'cursive'],
      'body1': ['"Open Sans"', 'sans-serif'],
      'body2': ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

