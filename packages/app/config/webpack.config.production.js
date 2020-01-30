const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const paths = require('./paths');

module.exports = {
  mode: 'production',
  entry: {
    main: paths.entryPoint,
    core: ['react', 'react-dom', 'react-router-dom'],
  },
  output: {
    path: paths.outputPath,
    publicPath: '/',
    filename: path.join('js', '[name].[chunkhash].js'),
  },
  optimization: {
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendor: false,
        react: {
          test: /[\\/]node_modules[\\/]react(-router)?(-dom)?[\\/]/,
          name: 'core',
          chunks: 'all',
          enforce: true,
          priority: 1,
        },
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', paths.nodeModules, paths.src],
    alias: {
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
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer],
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
        test: /\.svg$/,
        exclude: [paths.publicFiles],
        loader: 'svg-sprite-loader',
      },
      {
        include: [paths.publicFiles],
        exclude: [path.join(paths.publicFiles, 'index.html')],
        loader: 'file-loader',
      },
    ],
  },
  plugins: (() => {
    const plugins = [
      new HtmlWebpackPlugin({
        template: path.join(paths.publicFiles, 'index.html'),
        minify: {
          collapseWhitespace: true,
        },
      }),
      new MiniCssExtractPlugin({
        filename: path.join('css', `[name].[hash].css`),
        chunkFilename: path.join('css', `[id].[hash].css`),
      }),
      new OptimizeCSSAssetsPlugin({}),
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
      new FaviconsWebpackPlugin({
        logo: path.join(paths.publicFiles, 'favicon.svg'),
        favicons: {
          appName: 'Panenco',
          appDescription: 'Panenco application',
          background: '#FFFFFF',
          theme_color: '#F2F2F2',
          start_url: '/',
          orientation: 'portrait',
        },
      }),
    ];
    if (process.argv.includes('--analyze')) {
      plugins.push(new BundleAnalyzerPlugin());
    }
    return plugins;
  })(),
};
