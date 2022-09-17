module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        mulish: ["Mulish"],
        lato: ["Lato"],
      },
      colors: {
        navPurple: "#7A40F2",
        dashboardBackground: "#F9F9F9",
        search: "#EDEEF4",
        titleText: "#C45A01",
        welcomeYellow: "#FFECC8",
        miniMessage: "#BD5600",
        barelyGray: "#E6E5F2",
        lightGrey: "#9897AD",
        hotYellow: "#F4C427",
        lightOrange: "#FF9060",
        lightBlue: "#3ACBE9",
        deviceGrey: "#F5F5F5",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
