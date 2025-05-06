const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        grape: "rgba(114, 35, 204)",
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
