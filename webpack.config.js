const path = require('path')
const webpack = require('webpack')
const extractTextPlugin = require('extract-text-webpack-plugin')

const prod = process.argv.indexOf('-p') !== -1

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader!image-webpack-loader'
      },
      {
        test: /\.(eot|ttf|woff)$/,
        use: 'url-loader'
      }
    ]
  },
  plugins: [
		new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': prod ? "'production'" : "'development'"
      }
    }),
    new extractTextPlugin('app.css'),
  ],
  devtool: prod ? false : 'inline-source-map',
  target: 'node'
}
