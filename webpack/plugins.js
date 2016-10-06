'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SplitByPathPlugin = require('webpack-split-by-path');
const path = require('path');

/**
* SN: Currently, require both own scriptInjectionSort for HTMLWebpackPlugin and
* occurence order plugin in order to enforce script injection order in HTML with first
* as 'manifest.*.js' and last as 'main.*.js'. Investigate better solution. Alternatively,
* investigate CommonChunksPlugin
*/

/** Enforce ordering 'main.*.js' last in HTML Webpack Plugin's script injection */
const scriptInjectionSort = (a, b) => ((/main/.test(a.names[0])) ? 1 : -1);

const basePlugins = [
  /** Inject globals in code to use for gating against DEV/etc builds */
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    __ROGER__: process.env.ROGER,
    /** Inject process.env.NODE_ENV to minify react when in production */
    'process.env': {
      // SN: JSON stringify so the global ouput is 'production' or 'whatever' per NODE_ENV.
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }),
  /** Generate HTML and dynamically inject with script tag pointing to bundle.js */
  new HtmlWebpackPlugin({
    cache: true,
    template: './client/index.html',
    inject: 'body',
    chunksSortMode: scriptInjectionSort, // SN: enforce own script injection order so main.*.js is injected last.
    // chunksSortMode: 'none', // SN: stop chunks being ordered by this plugin during script injection in HTML
  }),
];

const devPlugins = [];

const prodPlugins = [
  // SN: Order matters. E.g. greater specificity first 'components/app' else will it not be caught
  new SplitByPathPlugin([{
    name: 'vendor',
    path: path.join(__dirname, '..', 'node_modules'),
  }, {
    name: 'app',
    path: path.join(__dirname, '..', 'client'),
  }]),

  // SN: Below two plugins are equivalent to webpack's -p minification flag.
  new webpack.optimize.OccurrenceOrderPlugin(true), // SN: Investigate further against chunksSortMode
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false,
    },
  }),
];

module.exports = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);
