// tailwind.config.js
module.exports = {
  // Use "./app/**/*.{js,jsx,ts,tsx}" to catch files in subfolders like /tabs
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        background:"#1c1917",
        title:"#fbbf24",
        subtitle:"#fefce8",
        button_bg:'#fde047',
        button_txt:'#1c1917'
      }
    },
  },
  plugins: [],
};