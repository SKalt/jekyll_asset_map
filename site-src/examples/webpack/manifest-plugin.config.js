const {resolve} = require("path")
const ManifestPlugin = require("webpack-manifest-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: resolve(__dirname, "../../assets"),
  entry: {
    docs: "./docs.js"
  },
  output: {
    filename: "[name]-[contenthash].js"
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name]-[contenthash].css',
      chunkFilename: '[id]-[contenthash].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new ManifestPlugin({
      fileName: '../site-src/_data/webpack_manifest_plugin.json'
    })
  ]
}