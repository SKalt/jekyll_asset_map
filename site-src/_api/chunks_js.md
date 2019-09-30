---
---
Chunks shared between entrypoints are deduplicated.  Here, `app1` and `app2` share `app.chunk.1.js`.  
{%
  include test/case.html
    test="asset_map/chunks_js.html"
    test_case_name="chunks_js_include"
    entrypoints="app1,app2"
%}

Missing entrypoints cause an error
{%
  include test/case.html
    test="asset_map/chunks_js.html"
    test_case_name="chunks_js_include"
    entrypoints="missing,app2"
%}
