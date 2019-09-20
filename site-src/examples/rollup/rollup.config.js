import 'rollup'
import sass from 'rollup-plugin-sass'
import manifest from 'rollup-plugin-output-manifest'

export default {
  input: {
    docs: "site-src/assets/docs.js"
  },
  output: {
    entryFileNames: "[name]-[hash].js",
    format: "iife",
    dir: "site-src/assets/rollup_output",
  },
  plugins: [
    sass({output: true, options: {includePaths: ["./**/*.scss"]}}),
    manifest({outputPath: "site-src/_data", fileName: "rollup.json"}),
  ]
}