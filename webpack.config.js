var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: "./js/index.js", //已多次提及的唯一入口文件
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }]
  },
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
};
