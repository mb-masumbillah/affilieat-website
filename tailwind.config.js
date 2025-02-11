module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        swingBalanced: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(10deg)" },  // ডানদিকে যাবে
          "50%": { transform: "rotate(0deg)" },   // মাঝখানে আসবে
          "75%": { transform: "rotate(-10deg)" }  // বাঁদিকে যাবে
        },
      },
      animation: {
        swingBalanced: "swingBalanced 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
