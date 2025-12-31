// tailwind.config.js
module.exports = {
  // Use "./app/**/*.{js,jsx,ts,tsx}" to catch files in subfolders like /tabs
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};