const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.config");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = merge(
  {
    mode: "production",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].bundle.js",
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "images"),
            to: "images",
          },
        ],
      }),
    ],
  },
  config
);
