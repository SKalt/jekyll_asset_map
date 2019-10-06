const { resolve } = require("path");
const AssetsManifestPlugin = require("webpack-assets-manifest");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const outputDir = resolve(
  __dirname,
  "../../assets/dist/webpack/asset-mainfest/simple"
);
module.exports = {
  context: resolve(__dirname, "../../assets/src"), // the root of the repo
  entry: {
    docs: "./docs"
  },
  output: {
    path: outputDir,
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
      output: resolve(__dirname, "../../_data/webpack_assets_manifest.json"),
      integrity: true,
      entrypoints: true
    })
  ]
};
