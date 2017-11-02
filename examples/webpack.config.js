const path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    path.join(__dirname, 'index.js'),
  ],
  output: {
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { 
        test: /\.tsx?$/, 
        loader: "awesome-typescript-loader" 
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, '../src/'),
    },
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
};
