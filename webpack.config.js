var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './dev/js/index.js',
  output: {
        path: 'src/js',
        filename: 'bundle.min.js'
  },
  devServer: {
      inline: true,
      contentBase: './src',
      port: 3000
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: ["babel-loader"],
        query: {
          presets: ["latest", "stage-0", "react"]
        }
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loader: "json-loader"
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader'
      },
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
}
