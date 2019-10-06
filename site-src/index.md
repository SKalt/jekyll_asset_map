---
dependency_order: # I wanted this to respect _config.yml#collections#order, but here we are...
  - Path
  - Integrity
  - Error
  - Script
  - Stylesheet
  - Chunks_js
  - Chunks_css
---

{% include asset_map/script map="rollup_simple" name="docs.js" %}

# [`jekyll_asset_map`](#)

---

## When to use this

You should use this if all of the below are true:

<input type="checkbox"> you've got an existing Jekyll site written using liquid templates

<input type="checkbox"> you want to use some of the hot new tools from the JS ecosystem

<input type="checkbox"> but you don't want to completely rewrite your build process.

If you're going to process your HTML with some tool that runs in Node.js (webpack, rollup, parcel, gulp, or anything else), that tool likely has its own asset map implementation.

<a id="installation"></a>

## [installation](#installation)

```sh
#!/usr/bin/env bash
# TODO
# install.sh
ASSET_MAP_VERSION="${ASSET_MAP_VERSION:-1.0.0}";
# ^ must always specify a full semver number
TARGET_LOCATION="${1:-./}"
curl -O https://raw.githubusercontent.com/ | gunzip
```

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
