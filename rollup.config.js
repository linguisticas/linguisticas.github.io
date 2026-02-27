import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'risurcoj/linguisticas.js',
    format: 'iife',
    name: 'LinguisticasJS'
  },
  plugins: [
    resolve(),

    commonjs()
  ]
};