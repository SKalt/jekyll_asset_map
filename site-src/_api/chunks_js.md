---
---
Chunks shared between entrypoints are deduplicated.  Here, `app1` and `app2` share `app.chunk.1.js`.  
{%
  include test/case.md
    test="asset_map/chunks_js"
    test_case_name="chunks_js_include"
    entrypoints="app1,app2"
%}

Missing entrypoints cause an error
{%
  include test/case.md
    test="asset_map/chunks_js"
    test_case_name="chunks_js_include_missing"
    entrypoints="missing,app2"
%}
