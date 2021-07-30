const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { merge } = require('webpack-merge');
const config = require('./webpack.config');
const resolve = (param) => path.resolve(__dirname, param);

module.exports = merge(config, {
  mode: 'development',
  entry: {
    index: resolve('example/index.js'),
  },
  output: {
    filename: 'index.js',
    path: resolve('dist'),
  },
  devServer: {
    port: 9000,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '树形列表',
      template: resolve('./public/index.html'),
      favicon: resolve('./public/favicon.ico'),
      filename: 'index.html',
      inject: 'head',
      cache: false,
      chunks: ['index']
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: "libs",
    //       to: "."
    //     }
    //   ]
    // }),
  ],
  resolve: {
    alias: {
      'luohao-tree-list': resolve('./libs/luohao-tree-list.js')
    }
  }
});