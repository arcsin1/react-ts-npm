import typescript from 'rollup-plugin-typescript';
import { terser } from 'rollup-plugin-terser';

module.exports = {
  external: ['react','react-dom'],
  input: 'src/index.ts',
  plugins: [
    typescript({
      exclude: 'node_modules/**',
      typescript: require('typescript'),
    }),
    terser(),
  ],
  output: [
    {
      format: 'esm',
      name: 'react-typescript-npm',
      file: 'lib/esm/index.js',
    },
    {
      format: 'cjs',
      name: 'react-typescript-npm',
      file: 'lib/cjs/index.js',
    },
  ],
};
