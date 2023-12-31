const path = require("path");
const HtmlWebpackplugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.jpg$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackplugin({
      template: "./src/template.html",
      filename: "index.html",
    }),
  ],
  resolve: {
    alias: {
      images: path.resolve(__dirname, "images"),
      "~": path.resolve(__dirname, 'src')
    },
  },
};
