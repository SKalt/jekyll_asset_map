const { resolve } = require("path");
const AssetsManifestPlugin = require("webpack-assets-manifest");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const siteSrcDir = resolve(__dirname, "../../");

module.exports = {
  context: resolve(siteSrcDir, "assets/src"),
  entry: {
    docs: "./docs",
    app1: "./example/app1.js",
    app2: "./example/app2.js"
  },
  output: {
    path: resolve(siteSrcDir, "assets/dist/webpack/assets-manifest/simple"),
    filename: "[name]-[contenthash].js",
    publicPath: "/assets/webpack/asset-manifets/simple"
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, // Creates `style` nodes from JS strings
          "css-loader", // Translates CSS into CommonJS
          "sass-loader" // Compiles Sass to CSS
        ]
      }
    ]
  },
  optimization: {
    // split as much code as reasonably possible
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: "[name]-[contenthash].css",
      chunkFilename: "[id]-[contenthash].css",
      ignoreOrder: false // Enable to remove warnings about conflicting order
    }),
    new AssetsManifestPlugin({
      // where to save the manifest
      output: resolve(siteSrcDir, "_data/webpack_assets_manifest.json"),
      integrity: true,
      entrypoints: true
    })
  ]
};