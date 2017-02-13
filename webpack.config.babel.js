import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const prod = process.argv.indexOf('-p') !== -1

export default {
  entry: './tulip.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'tulip-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          loader: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader!image-webpack-loader'
      },
      {
        test: /\.(eot|ttf|woff)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
		new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': "'development'"
        }
    }),
    new ExtractTextPlugin('tulip.css'),
  ],
  devtool: prod ? false : 'inline-source-map',
  target: 'node'
}
