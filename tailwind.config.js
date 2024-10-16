/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      colors: {
        primaryColor: '#C53FD2',
        colorDark: '#121212',
        colorDark2: '#0e0e0e',
        colorLight: "#FFFFFF",

        html5: '#E65100',
        css3: '#0277BD',
        bootstrap: '#673AB7',
        javascript: '#FFD600',
        react: '#80DEEA',
        vueJs: '#81C784',
        tailwindcss: '#00ACC1',
        nextJs: '#212121',

        java: '#F44336',
        springBoot: '#8BC34A',
        php: '#5238b7',
        nodeJs: '#388E3C',
        aws: '#252F3E',
        docker: '#03A9F4',
        kubernetes: '#0277BD',
        mysql: '#00796B',
        mongodb: '#689F38',
        postgresql: '#0277BD',

        figma: '#7C4DFF',
        adobe: '#ff0000',
        coreldraw: '#00933E',
        vscode: '#29B6F6',
        jetbrains: '#CE4488',
        eclipse: '#5238b7',
        postman: '#E65100'
      },
    },
  },
  plugins: [],
}