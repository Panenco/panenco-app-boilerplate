import path from 'path';

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
// import alias from 'rollup-plugin-alias';
import replace from 'rollup-plugin-replace';
import json from 'rollup-plugin-json';

// import sass from 'node-sass';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import packageJson from './package.json';

const paths = require('./config/paths');

const external = Object.keys(packageJson.peerDependencies);

export default {
  input: paths.entryPoint,
  output: {
    file: path.join(paths.outputPath, 'ui.esm.js'),
    format: 'esm',
  },
  plugins: [
    // alias({
    //   config: paths.appConfig,
    // }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    babel({
      exclude: /node_modules/,
      rootMode: 'upward',
    }),
    resolve({
      extensions: ['.js', '.jsx', '.json'],
      preferBuiltins: false,
      customResolveOptions: {
        moduleDirectory: ['node_modules', paths.nodeModules, paths.src],
      },
    }),
    commonjs({
      // namedExports: {
      //   'node_modules/react-is/index.js': ['isValidElementType'],
      // },
    }),
    json(),
    postcss({
      use: [
        [
          'sass',
          {
            includePaths: [paths.scss],
          },
        ],
      ],
      plugins: [autoprefixer],
      modules: true,
      sourceMap: true,
      minimize: true,
      extract: path.join(paths.outputPath, 'styles.css'),
      extensions: ['.css', '.scss'],
    }),
  ],
  external,
};
