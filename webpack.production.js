const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.config");

module.exports = merge(
  {
    mode: "production",
    output: {
      path: path.resolve(__dirname, "dist", "build"),
      filename: "[name].bundle.js",
      publicPath: "/build",
    },
  },
  config
);
