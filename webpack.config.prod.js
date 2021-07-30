const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.config');
const resolve = (param) => path.resolve(__dirname, param);

module.exports = merge(config, {
  mode: 'production',
  entry: {
    index: resolve('src/index.js'),
  },
  output: {
    filename: 'luohao-tree-list.js',
    path: resolve('libs'),
    library: "luohao-tree-list",
    libraryTarget: "umd",
  },
});