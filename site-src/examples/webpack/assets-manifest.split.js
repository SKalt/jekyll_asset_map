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
      entrypoints: true,
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
      // customize(entry, original, manifest, asset) {
      //   console.log({ entry, integrity: asset.integrity });
      //   return entry;
      // },
      // done(manifest) {
      //   const entrypointsKey = manifest.options.entrypointsKey;
      //   const { assets } = manifest;
      //   const entrypoints = { ...assets[entrypointsKey] };
      //   // console.log(assets[entrypointsKey], { entrypointsKey, assets });
      //   const toObject = (a, [k, v]) => ({ ...a, [k]: v });
      //   const rev = Object.entries(assets)
      //     .filter(([k]) => k !== entrypointsKey)
      //     .map(([k, v]) => [v.src, k])
      //     .reduce(toObject, {});
      //   const augmented = Object.entries(entrypoints)
      //     .map(([name, entries]) => [
      //       name,
      //       Object.entries(entries)
      //         .map(([ext, paths]) => [
      //           ext,
      //           paths.map(src => ({
      //             integrity: (assets[rev[src]] || {}).integrity,
      //             src
      //           }))
      //         ])
      //         .reduce(toObject, {})
      //     ])
      //     .reduce(toObject, {});
      //   const result = { ...assets, [entrypointsKey]: augmented };
      //   console.log(JSON.stringify(result, null, 2));
      // }
    })
  ]
};
