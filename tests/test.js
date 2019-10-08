/* eslint-env node */ /* eslint-env jest */
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

const testIds = [
  "path_present",
  "path_missing",

  "integrity",
  "integrity_missing",

  "error_alert",
  "error_error",
  "error_comment",
  "error_404",

  "script_present",
  "script_present_async",
  "script_present_async_false",
  "script_present_missing",
  "script_integrity_by_default",

  "stylesheet_present",
  "stylesheet_missing",

  "chunks_js_include",
  "chunks_css_include",
  "chunks_css_include_missing",
  "chunks_js_mixed",

  "chunks_css_include",
  "chunks_css_include_missing"
];

describe("asset_map", () => {
  const $ = cheerio.load(
    fs.readFileSync(path.resolve(__dirname, "../_site/index.html"), "utf8")
  );
  testIds.forEach(id => {
    it(id, () => {
      expect($(`#test--${id} .test-output`).text()).toMatchSnapshot();
    });
  });
});
