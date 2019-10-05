---
---
{%
  include test/case.md
    test="asset_map/chunks_css"
    test_case_name="chunks_css_include"
    entrypoints="app1,app2"
%}

Missing chunks throw errors exactly like missing stylesheets do.
{%
  include test/case.md
    test="asset_map/chunks_css"
    test_case_name="chunks_css_include_missing"
    entrypoints="missing,app2"
%}
