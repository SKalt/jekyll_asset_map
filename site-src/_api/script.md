---
---
{%
  include test/case.html
    test="asset_map/script.html"
    name="foo.js"
%}
{%
  include test/case.html
    test="asset_map/script.html"
    name="foo.js"
    async=false
%}
{%
  include test/case.html
    test="asset_map/script.html"
    name="quux.js"
%}
{%
  include test/case.html
    test="asset_map/script.html"
    name="bar.js"
%}