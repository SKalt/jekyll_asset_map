const { resolve } = require("path");
const ManifestPlugin = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: resolve(__dirname, "../../assets/src"),
  entry: {
    docs: "./docs"
  },
  output: {
    path: resolve(
      __dirname,
      "../../assets/dist/webpack/mainfest-plugin/simple"
    ),
    filename: "[name]-[contenthash].js",
    publicPath: "/assets/webpack/manifest-plugin/simple"
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
    new ManifestPlugin({
      publicPath: "/assets/dist/",
      fileName: resolve(
        __dirname,
        "../../_data/webpack_manifest_plugin_simple.json"
      )
    })
  ]
};
