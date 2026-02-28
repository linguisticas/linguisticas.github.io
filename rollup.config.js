import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

const isMinify = process.env.MINIFY === 'true';

export default {
  input: 'src/index.js',
  output: {
    file: isMinify
      ? 'risurcoj/linguisticas.min.js'
      : 'risurcoj/linguisticas.js',
    format: 'iife',
    name: 'LinguisticasJS'
  },
  plugins: [
    resolve(),
    commonjs(),
    ...(isMinify
      ? [terser({ format: { comments: false } })]
      : [])
  ]
};