---
dependency_order: # I wanted this to respect _config.yml#collections#order, but here we are...
  - Path
  - Integrity
  - Error
  - Script
  - Stylesheet
  - Chunks_js
  - Chunks_css
example_app:
  - foo
  - app1
  - app2
repo: https://github.com/SKalt/jekyll_asset_map/tree/master
---

# [`jekyll_asset_map`](#)

> [![v1](https://github.com/skalt/jekyll_asset_map/workflows/testing%20v1/badge.svg)](https://github.com/skalt/jekyll_asset_map/actions?workflow=testing+v1) [GitHub](https://github.com/skalt/jekyll_asset_map) [License: `Parity-6.0.0`](https://github.com/skalt/jekyll_asset_map/blob/master/LICENSE) [Buy a license for use in closed source](https://licensezero.com/projects/de9c209f-86b8-4a63-ae81-fb4ff3339d32)

## When to use this

You should use this if all of the below are true:

<input type="checkbox"> you've got an existing Jekyll site written using liquid templates

<input type="checkbox"> you want to use some of the hot new tools from the JS ecosystem

<input type="checkbox"> but you don't want to completely rewrite your build process.

If you're going to process your HTML with some tool that runs in Node.js ([webpack](https://webpack.js.org), [rollup](https://rollupjs.org/), [parcel](https://parceljs.org/), [gulp](https://gulpjs.com/), or anything else), that tool likely has its own asset map implementation.

<a id="installation"></a>

## [installation](#installation)

Copy the [`_includes/asset_map` directory]({{ page.repo }}/\_includes) into your own `_includes` directory.

<a id="API"></a>

## [API](#API)

---

{% for title in page.dependency_order %}
{% assign content = site.api | where: "title", title %}
{% include docs/api.md
    name=title
    content=content
  %}
{% endfor %}

<a id="configuration-examples"></a>

## [JS Compiler Configuration Examples](#configuration-examples)

<details open><summary>Example app to compile</summary>

{% for i in page.example_app %}
{% capture f %}

```javascript
// example/{{ i }}.js
{% include_relative assets/src/example/{{ i }}.js %}
```

{% endcapture %}
{{ f | markdownify }}
{% endfor%}

</details>
Configurations:
- `rollup`
  - [simple configuration]({{ page.repo }}/examples/rollup/simple.js)
  - [maximally-split, maximally-hashed]({{ page.repo }}/examples/rollup/split.js)
- `webpack`
  - `webpack-assets-manifest-plugin`
    - [simple configuration]({{ page.repo }}/examples/webpack/assets-manifest.simple.js)
    - [with integrity hashes]({{ page.repo }}/examples/webpack/assets-manifest.integrity.js)
  - `webpack-manifest-plugin`
    - [simple configuration]({{ page.repo }}/examples/webpack/manifest-plugin.config.js)
    - [with arrays of chunks for each entrypoint]({{ page.repo }}/examples/webpack/manifest-plugin.split.js)
