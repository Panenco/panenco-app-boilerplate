const wp = require('@cypress/webpack-preprocessor');

const paths = require('../../config/paths');

module.exports = (on) => {
  const options = {
    webpackOptions: {
      resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules', paths.nodeModules, paths.src],
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
        ],
      },
    },
  };
  on('file:preprocessor', wp(options));
};
