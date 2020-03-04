import path from 'path';
import fs from 'fs';
import mkdirp from 'mkdirp';

import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';
import svgSprite from 'rollup-plugin-svg-spritesheet';

import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import packageJson from '../package.json';

const paths = require('./paths');

const external = Object.keys(packageJson.peerDependencies);

async function writeFile(filePath, contents) {
  await mkdirp(path.dirname(filePath));

  fs.writeFile(filePath, contents, () => {
    console.log(`Svg sprite successfuly created!`);
  });
}

export default {
  input: paths.entryPoint,
  output: {
    file: path.join(paths.outputPath, 'ui.esm.js'),
    format: 'esm',
  },
  plugins: [
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
      include: /node_modules/,
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
    svgSprite({
      output: code => {
        // console.log(code);
        // Do something with the generated code
        // eg. write to "spritesheet.svg"
        // fs.writeFile(path.join(paths.outputPath, 'spritesheet.svg'), code);
        writeFile(path.join(paths.outputPath, 'spritesheet.svg'), code);
      },
    }),
  ],
  external,
};
