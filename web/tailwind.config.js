/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        fundo: "url('../public/background-galaxy.png')",
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.90) 67.08%)',
        'colorful-gradient': 'linear-gradient(89.86deg, #9572FC 18.8%, #43E7AD 23.94%, #e10550 78.57%)',
      },
      scrollbar: {
        hide: 'scrollbar-hidden', // Define a classe personalizada 'scrollbar-hidden' para ocultar a barra de rolagem
        none: 'scrollbar-none'
      },
    }
  },
  plugins: [
    import('tailwind-scrollbar'),
  ],
}