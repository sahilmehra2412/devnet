const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      
    },
    height : ({theme}) =>({
      ...theme('spacing'),
      '80vh':'80vh'
    })
  },
  plugins: [],
});