const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  
  
  plugins: [nextui()],
};

// we need this file for nextui and tailwind css to work , check the tailwind css doc for info