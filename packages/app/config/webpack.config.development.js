const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: ['react-hot-loader/patch', paths.entryPoint],
  output: {
    path: paths.outputPath,
    publicPath: '/',
    filename: path.join('js', '[name].js'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', paths.nodeModules, paths.src],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      config: paths.appConfig,
      static: paths.publicFiles,
      public: paths.publicFiles,
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              rootMode: 'upward',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        exclude: [paths.publicFiles],
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[local]-[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [paths.scss],
              },
            },
          },
        ],
      },
      {
        include: [paths.publicFiles],
        exclude: [path.join(paths.publicFiles, 'index.html')],
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.publicFiles, 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: process.env.PORT || 3000,
  },
};
