const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const resolve = (param) => path.resolve(__dirname, param);

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(less|css)$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg)$/,
        use: ['file-loader']
      },
      {
        test: /\.svg$/,
        use: ['svg-loader']
      }
    ],
  },
  resolve: {
    alias: {
      '@': resolve('./src')
    },
    extensions: [".js", ".vue"],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ],
}