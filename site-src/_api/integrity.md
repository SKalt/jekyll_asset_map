---
---
{%
  include test/case.html
    test="asset_map/integrity"
    test_case_name="integrity"
    name="bar.js"
%}

If missing, returns nothing:
{%
  include test/case.html
    test="asset_map/integrity"
    test_case_name="integrity_missing"
    name="missing.js"
%}
