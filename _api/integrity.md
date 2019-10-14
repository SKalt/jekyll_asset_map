---
---
{%
  include test/case.md
    test="asset_map/integrity"
    test_case_name="integrity"
    name="bar.js"
%}

If missing, `integrity` returns nothing:
{%
  include test/case.md
    test="asset_map/integrity"
    test_case_name="integrity_missing"
    name="missing.js"
%}
