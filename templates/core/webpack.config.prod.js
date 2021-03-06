var path = require("path");
var webpack = require("webpack");

var devFlagPlugin = new webpack.DefinePlugin({  
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
  devtool: "source-map",
  context: path.join(__dirname, "main"),
  entry: [
    "./index"
  ],
  output: {
    path: path.join(__dirname, "output"),
    publicPath: "/public/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    devFlagPlugin
  ],
  module: {
    loaders: [
      { 
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loaders: ["babel"] 
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