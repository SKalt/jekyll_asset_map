---
---
{%
  include test/case.html
    test="asset_map/chunks_css.html"
    test_case_name="chunks_css_include"
    entrypoints="app1,app2"
%}

Missing...
{%
  include test/case.html
    test="asset_map/chunks_css.html"
    test_case_name="chunks_css_include"
    entrypoints="missing,app2"
%}
