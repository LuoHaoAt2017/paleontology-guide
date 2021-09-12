const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = (param) => path.resolve(__dirname, param);

module.exports = {
  entry: {
    index: resolve("src/index.js"),
  },
  output: {
    filename: "luohao-tree-list.js",
    path: resolve("dist"),
    library: "luohao-tree-list",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
      }
    ],
  },
  resolve: {
    alias: {
      "@": resolve("./src"),
      "luohao-tree-list": resolve("./libs/luohao-tree-list.js"),
    },
    extensions: [".js"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "树形列表",
      template: resolve("./public/index.html"),
      favicon: resolve("./public/favicon.ico"),
      filename: "index.html",
    }),
  ],
};
