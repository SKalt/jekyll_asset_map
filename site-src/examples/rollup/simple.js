import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sass from 'rollup-plugin-sass'
import manifest from 'rollup-plugin-output-manifest'
import {terser} from 'rollup-plugin-terser'
import clear from 'rollup-plugin-clear'

export default {
  input: {
    docs: "site-src/assets/src/docs"
  },
  output: {
    entryFileNames: "[name]-[hash].js",
    format: "esm",
    dir: "site-src/assets/dist/rollup",
  },
  plugins: [
    clear({
      target: ["site-src/assets/dist/rollup"]
    }),
    resolve(),
    commonjs(),
    sass({
      insert: true,
      // rely on css-in-js to work around `output: true` failing
      options: {includePaths: ["./**/*.scss"]},
    }),
    manifest({
      outputPath: "site-src/_data",
      fileName: "rollup_simple.json",
      publicPath: '/assets/dist/rollup/',
      //
    }),
    terser()
  ]
}


