import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import sass from "rollup-plugin-scss";
import manifest from "rollup-plugin-output-manifest";
import clear from "rollup-plugin-clear";
import { writeFileSync, mkdirSync } from "fs";
import sha256 from "hash.js/lib/hash/sha/256";
import { terser } from "rollup-plugin-terser";

const manifestSeed = {};
const outputDir = "site-src/assets/dist/rollup/split";
export default {
  input: {
    docs: "site-src/assets/src/docs",
    app1: "site-src/assets/src/example/app1.js",
    app2: "site-src/assets/src/example/app2.js"
  },
  output: {
    entryFileNames: "[name]-[hash].js",
    format: "esm",
    dir: outputDir,
    manualChunks(id) {
      console.log({ id });
      // from https://philipwalton.com/articles/using-native-javascript-modules-in-production-today/
      if (id.includes("node_modules")) {
        // Return the directory name following the last `node_modules` Usually
        // this is the package, but it could also be the scope.
        const dirs = id.split(path.sep);
        return dirs[dirs.lastIndexOf("node_modules") + 1];
      }
    }
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
        const hash = sha256()
          .update(styles)
          .digest("hex");
        const file = `styles-${hash.substring(0, 8)}.css`;
        mkdirSync(outputDir, { recursive: true });
        writeFileSync(`${outputDir}/${file}`, styles);
        manifestSeed["styles.css"] = {
          path: `/assets/dist/rollup/split/${file}`,
          integrity: `sha256-${hash}`
        };
      },
      // `output: true` should output a bunch of split `.css` files in dist, but
      // it doesn't. In any case, it's a great excuse to
      options: {
        // for https://github.com/sass/dart-sass#javascript-api
        outputStyle: "compressed"
      }
    }),
    manifest({
      outputPath: "site-src/_data",
      fileName: "rollup_split.json",
      publicPath: "/assets/dist/rollup/split/",
      generate: keyValueDecorator => chunks =>
        chunks.reduce((manifest, entry) => {
          const { name, fileName, code } = entry;
          const hash = sha256()
            .update(code)
            .digest("hex");
          const [[_name, path]] = Object.entries(
            keyValueDecorator(name, fileName)
          );
          return {
            ...manifest,
            ...{ [_name]: { path, integrity: `sha256-${hash}` } }
          };
        }, manifestSeed)
    }),
    terser()
  ]
};
