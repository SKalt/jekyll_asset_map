const {resolve} = require("path")
const AssetsManifestPlugin = require("webpack-assets-manifest")
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
    new AssetsManifestPlugin({
      // where to save the manifest
      output: resolve(__dirname, '../../_data/assets_manifest.json')
    })
  ]
}