module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        fundo: "url('../public/background-galaxy.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 18.8%, #43E7AD 23.94%, #e10550 78.57%)',
      },
    },
  },
  plugins: [],
};
