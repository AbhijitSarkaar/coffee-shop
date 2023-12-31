const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.config");

module.exports = merge(
  {
    mode: "production",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].bundle.js",
    },
  },
  config
);
