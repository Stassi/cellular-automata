import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

// rollup-plugin-terser does not support multiple outputs
const options = {
  input: 'src/index.js',
  plugins: [
    resolve(),
    commonjs(),
    babel({ exclude: 'node_modules/**' }),
    terser(),
  ],
};

export default [
  {
    ...options,
    output: {
      file: 'lib/cellular-automata.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  },
  {
    ...options,
    output: {
      file: 'lib/cellular-automata.umd.js',
      format: 'umd',
      name: 'cellularAutomata',
      sourcemap: true,
    },
  }
];
