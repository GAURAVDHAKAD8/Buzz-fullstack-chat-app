// postcss.config.cjs
// module.exports = {
//   plugins: [
//     require("postcss-import"), // for handling imports
//     require("@tailwindcss/postcss"), // use the correct postcss plugin
//     require("autoprefixer"), // for adding vendor prefixes
//   ],
// };
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};