const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const resolve = (param) => path.resolve(__dirname, param);

module.exports = {
  entry: {
    index: resolve("src/index.js"),
  },
  output: {
    filename: "luohao-tree-list.js",
    path: resolve("libs"),
    library: "luohao-tree-list",
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
        loader: "vue-loader",
      },
      {
        test: /\.(less|css)$/,
        use: ["vue-style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.svg$/,
        use: ["svg-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      "@": resolve("./src"),
      "luohao-tree-list": resolve("./libs/luohao-tree-list.js"),
    },
    extensions: [".js", ".vue"],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "树形列表",
      template: resolve("./public/index.html"),
      favicon: resolve("./public/favicon.ico"),
      filename: "index.html",
    }),
  ],
};
