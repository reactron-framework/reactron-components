const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "bundle.css",
});

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
      // All scss files transpiling
      {
        test: /\.scss$/,
        use: extractSass.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
    }
    ],
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, '../src/'),
    },
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  plugins: [
    extractSass
  ],
};
