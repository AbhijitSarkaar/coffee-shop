const path = require("path");
const HtmlWebpackplugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./public/build"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackplugin({
      template: "./src/template.html",
      filename: path.resolve(__dirname, "./public/index.html"),
    }),
  ],
};
