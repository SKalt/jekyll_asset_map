import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import sass from "rollup-plugin-sass";
import manifest from "rollup-plugin-output-manifest";
import { terser } from "rollup-plugin-terser";
import clear from "rollup-plugin-clear";
import { writeFileSync, mkdirSync } from "fs";
import crypto from "crypto";
const sha256 = str => crypto.createHash("sha256").update(str);
const manifestSeed = {};
const outputDir = "assets/dist/rollup/simple";
const baseurl = "jekyll_asset_map";
const publicPath = `/${baseurl}/assets/dist/rollup/simple/`;

export default {
  input: {
    docs: "assets/src/docs",
    app1: "assets/src/example/app1.js",
    app2: "assets/src/example/app2.js"
  },
  output: {
    entryFileNames: "[name]-[hash].js",
    format: "esm",
    dir: outputDir
  },
  plugins: [
    clear({
      targets: [outputDir],
      watch: true
    }),
    resolve(),
    commonjs(),
    sass({
      output: styles => {
        const hashB64 = sha256(styles).digest("base64");
        const hashHex = sha256(styles).digest("hex");
        const file = `styles-${hashHex.substring(0, 8)}.css`;
        mkdirSync(outputDir, { recursive: true });
        writeFileSync(`${outputDir}/${file}`, styles);
        manifestSeed["styles.css"] = {
          path: `${publicPath}/${file}`,
          integrity: `sha256-${hashB64}`
        };
      },
      // `output: true` should output a bunch of split `.css` files in dist, but
      // it doesn't. In any case, it's a great excuse to roll our own integrity
      // hash, and use that in the filename.
      options: {
        // for https://github.com/sass/dart-sass#javascript-api
        outputStyle: "compressed"
      }
    }),
    manifest({
      outputPath: "_data",
      fileName: "rollup_simple.json",
      publicPath,
      generate: keyValueDecorator => chunks =>
        chunks.reduce(
          (manifest, { name, fileName }) => ({
            ...manifest,
            ...keyValueDecorator(name, fileName)
          }),
          manifestSeed
        )
    }),
    terser()
  ]
};
