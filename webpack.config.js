const path = require('path');
const plugins = require('./webpack/plugins');
const loaders = require('./webpack/loaders');

const devmode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: path.join(__dirname, 'client/index.js'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: devmode ? '[name].[hash].js' : '[name].[chunkhash].js',
  },

  plugins,

  devtool: devmode ? null : 'source-map',

  module: {
    loaders: [
      loaders.js,
    ],
  },

};
