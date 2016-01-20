var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(__dirname);
module.exports = {
  entry: [
    './src/index'
  ],
  devtool: 'source-map',
  output:{
    path: __dirname + '/dist/js',
    publicPath: '/js',
    filename: "app.js"
  },
  resolve: {
        extensions: [
            '', '.js', '.jsx',
            '.css', '.styl', '.scss', '.less', '.sass'
          ],
          alias: {
          }
  },
  module: {
    loaders:[
      //JSX
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loaders: ['babel']
      },
      //JS
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: ['babel']
      },
      //SCSS
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        loader: 'style!css!sass'
      },
      //CSS
      { test: /\.css$/,
        exclude: /(node_modules)/,
        loader: "style-loader!css-loader"
      },
      //Fonts
      {
        test: /\.(woff|woff2)$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.eot$/,
        loader: "file"
      },
      //Images
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Leaderboard',
      template: './html/index_template.html',
      inject: 'body',
      filename: '../index.html'
    })
  ]
}
