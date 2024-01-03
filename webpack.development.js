const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.config");

module.exports = merge(
  {
    mode: "development",
    output: {
      path: path.resolve(__dirname, "dist", "build"),
      filename: "bundle.js",
      publicPath: "/build",
      clean: true,
    },
    devServer: {
      static: ["dist"],
    },
  },
  config
);
