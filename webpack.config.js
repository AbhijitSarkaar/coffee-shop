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
      filename: path.join(__dirname, "dist", "index.html"),
    }),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
};
