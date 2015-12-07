var path = require("path");
var webpack = require("webpack");

var devFlagPlugin = new webpack.DefinePlugin({  
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
  debug: true,
  devtool: "eval-source-map",
  context: path.join(__dirname, "main"),
  entry: [
    "webpack/hot/dev-server",
    "webpack-hot-middleware/client",
    "./index"
  ],
  output: {
    path: path.join(__dirname, "output"),
    publicPath: "/public/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    devFlagPlugin
  ],
  module: {
    loaders: [
      { 
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      },
      {
        test: /\.css$/, 
        loader: "style-loader!css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader"
      }
    ]
  },

  postcss: function () {
      return [];
  }
};