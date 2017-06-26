const path = require('path');

module.exports = {
  entry: './app.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015', 'es2016', 'stage-1', 'react'],
        },
      },
    ],
  },
  
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src'),
    ],
    extensions: ['.js', '.jsx', '.json'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    stats: 'errors-only'
  },
  
  
  devtool: 'source-map'
};
