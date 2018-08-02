import resolve from 'rollup-plugin-node-resolve'
import minify from 'rollup-plugin-minify-es'

const banner = '/**\n * Lenses\n *\n * Copyright 2018 Dmitry Dudin <dima@nuware.ru>\n */'

export default [{
  input: 'src/index.js',
  output: {
    file: 'dist/lenses.esm.js',
    format: 'esm',
    banner
  },
  external: ['@nuware/functions']
}, {
  input: 'src/index.js',
  output: {
    file: 'dist/lenses.umd.js',
    format: 'umd',
    name: 'nuware.L',
    banner
  },
  plugins: [
    resolve()
  ]
}, {
  input: 'src/index.js',
  output: {
    file: 'dist/lenses.min.js',
    format: 'umd',
    name: 'nuware.L'
  },
  plugins: [
    resolve(),
    minify()
  ]
}]
