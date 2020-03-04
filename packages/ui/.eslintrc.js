const path = require('path');

module.exports = {
  rules: {
    'react/button-has-type': 0,
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/stories/**/*.{js,jsx}', '**/config/**/*.js'] },
    ],
  },
  settings: {
    'import/resolver': {
      node: {},
      webpack: {
        config: path.resolve(__dirname, './config/webpack.config.js'),
      },
    },
  },
};
