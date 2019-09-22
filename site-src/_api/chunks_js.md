---
---
{%
  include test/case.html
    test="asset_map/chunks_js.html"
    test_case_name="chunks_js_include"
    entrypoints="app1,app2"
%}

Missing...
{%
  include test/case.html
    test="asset_map/chunks_js.html"
    test_case_name="chunks_js_include"
    entrypoints="missing,app2"
%}
