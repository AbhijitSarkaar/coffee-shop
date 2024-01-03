const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.config");

module.exports = merge(
  {
    mode: "development",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js",
      clean: true,
    },
    devServer: {
      static: ["assets"],
    },
  },
  config
);
