/**
 * Created by MagicAntler on 10/14/15.
 */
var webpack = require('webpack');

module.exports = {
  entry:{
    app:["babel-polyfill","webpack/hot/dev-server", "./src/app.js"]
  },
  output:{
    filename:"bundle.js",
    path: __dirname + "/dist"
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        exclude: /node_modules/,
        loaders:["react-hot", "babel-loader"]
      },
      {
        test:/\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.css$/, loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        loader: 'style!css?modules!sass'
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test:/\.(ttf|eot|svg|mp4|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader:"url-loader"}
    ]
  }
};
