module.exports = {
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-json-strings',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-react',
  ],
  env: {
    production: {
      plugins: [
        '@babel/plugin-transform-react-constant-elements',
        '@babel/plugin-transform-react-inline-elements',
        'babel-plugin-transform-react-remove-prop-types',
      ],
    },
  },
  babelrcRoots: ['.', 'packages/*'],
};
