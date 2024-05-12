/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        border_color: "#8B8B8B",
        container: "#ECEEF4",
        delete_red: "#CC0707",
        low_priority_container: "#46F7B7",
        low_priority_text: "#096343",
        medium_priority_container: "#F5EB88",
        medium_priority_text: "#653408",
        high_priority_container: "#FFA775",
        high_priority_text: "#622808",
        highest_priority_container: "#F27F77",
        highest_priority_text: "#5F0F0B",
        date_container: "#F7F7F7",
        date_text: "#646570",
        select_blue: "#0052CC",
        content_color: "#1B1C1D",
      },
    },
  },
  plugins: [],
};
