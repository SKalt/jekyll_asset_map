---
---
{%
  include test/case.md
    test="asset_map/stylesheet"
    test_case_name="stylesheet_present"
    name="foo.css"
%}

{%
  include test/case.md
    test="asset_map/stylesheet"
    test_case_name="stylesheet_missing"
    name="missing.css"
%}
