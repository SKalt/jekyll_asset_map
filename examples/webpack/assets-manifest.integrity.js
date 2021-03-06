const { resolve } = require("path");
const AssetsManifestPlugin = require("webpack-assets-manifest");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const siteSrcDir = resolve(__dirname, "../../");
const baseurl = "jekyll_asset_map";
const publicPath = `/${baseurl}/assets/webpack/asset-manifets/integrity/`;
module.exports = {
  context: resolve(siteSrcDir, "assets/src"), // the root of the repo
  entry: {
    docs: "./docs",
    app1: "./example/app1.js",
    app2: "./example/app2.js"
  },
  output: {
    path: resolve(siteSrcDir, "assets/dist/webpack/assets-manifest/integrity"),
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
    // split as much code as reasonably possible
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
    new AssetsManifestPlugin({
      // where to save the manifest
      output: resolve(
        siteSrcDir,
        "_data/webpack_assets_manifest_integrity.json"
      ),
      publicPath,
      integrity: true,
      entrypoints: true,
      // transform each chunk from "src" to { src, integrity }.
      transform(assets, manifest) {
        const { entrypointsKey, integrityPropertyName } = manifest.options;
        const entrypoints = { ...assets[entrypointsKey] };
        const toObject = (a, [k, v]) => ({ ...a, [k]: v });
        const obj = () => Object.create(null);
        const rev = Object.entries(assets)
          .filter(([k]) => k !== entrypointsKey)
          .map(([k, v]) => [v.src, k])
          .reduce(toObject, obj());
        const augmented = Object.entries(entrypoints)
          .map(([name, entries]) => [
            name,
            Object.entries(entries)
              .map(([ext, paths]) => [
                ext,
                paths.map(src => ({
                  integrity: (assets[rev[src]] || {})[integrityPropertyName],
                  src
                }))
              ])
              .reduce(toObject, obj())
          ])
          .reduce(toObject, obj());
        assets[entrypointsKey] = augmented;
      }
    })
  ]
};
