const paths = require('./paths');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', paths.nodeModules, paths.src],
    alias: {
      config: paths.appConfig,
      static: paths.publicFiles,
      public: paths.publicFiles,
    },
  },
};
