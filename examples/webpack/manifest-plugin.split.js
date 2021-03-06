const { resolve } = require("path");
const ManifestPlugin = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const siteSrcDir = resolve(__dirname, "../../");
const baseurl = "jekyll_asset_map";
const publicPath = `/${baseurl}/assets/webpack/manifest-plugin/split`;

module.exports = {
  context: resolve(siteSrcDir, "assets/src"),
  entry: {
    docs: "./docs",
    app1: "./example/app1.js",
    app2: "./example/app2.js"
  },
  output: {
    // // for creation of SRI hashes
    // // https://webpack.js.org/configuration/output/#outputhashfunction
    // hashFunction: "sha256",
    path: resolve(siteSrcDir, "assets/dist/webpack/mainfest-plugin/split"),
    filename: "[name]-[contenthash].js",
    publicPath
  },
  devServer: {
    writeToDisk: true
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
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: "[name]-[contenthash].css",
      chunkFilename: "[id]-[contenthash].css",
      ignoreOrder: false // Enable to remove warnings about conflicting order
    }),
    new ManifestPlugin({
      publicPath,
      fileName: resolve(siteSrcDir, "_data/webpack_manifest_plugin_split.json"),
      generate: (seed, files, entrypoints) => {
        return files.reduce((manifest, { name, path }) => {
          return { ...manifest, [name]: path };
        }, Object.assign(seed, entrypoints));
      }
    })
  ]
};
