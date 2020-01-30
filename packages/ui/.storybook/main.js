const customWP = require('./webpack.config.custom.js');

module.exports = {
  stories: ['../stories/index.jsx'],
  addons: [
    'storybook-readme/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-options/register',
    '@storybook/addon-knobs/register',
  ],
  webpackFinal: config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        ...customWP.resolve,
      },
      module: {
        ...config.module,
        rules: [...config.module.rules, ...customWP.module.rules],
      },
    };
  },
};
