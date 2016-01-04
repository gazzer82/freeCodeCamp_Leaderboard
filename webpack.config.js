var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(__dirname);
module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/app.jsx'
  ],
  output:{
    path: __dirname + '/dist',
    publicPath: '/dist',
    filename: "app.js"
  },
  module: {
    loaders:[
      //JSX
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loaders: ['react-hot','babel']
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
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'ReactStarter',
      //template: './src/html/index_template.html',
      //inject: 'body',
      filename: '../index.html'
    })
  ]
}
