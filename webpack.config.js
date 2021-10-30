const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const resolve = (param) => path.resolve(__dirname, param);

module.exports = {
  entry: {
    index: resolve("src/index.js"),
    login: resolve("modules/login/index.js"),
  },
  output: {
    filename: "[name].js",
    path: resolve("dist"),
    // library: "luohao-tree-list",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.(css|less)$/,
        use: ["vue-style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: ["file-loader"],
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
      title: "古生物指南",
      template: resolve("./public/index.html"),
      favicon: resolve("./public/favicon.ico"),
      filename: "index.html",
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      title: "古生物指南",
      template: resolve("./public/index.html"),
      favicon: resolve("./public/favicon.ico"),
      filename: "login.html",
      chunks: ['login']
    }),
    new VueLoaderPlugin()
  ],
};
