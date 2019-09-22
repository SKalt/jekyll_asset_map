---
---
{%
  include test/case.html
    test="asset_map/script.html"
    test_case_name="script_present"
    name="foo.js"
%}

{%
  include test/case.html
    test="asset_map/script.html"
    test_case_name="script_present_async"
    name="foo.js"
    async=false
%}

{%
  include test/case.html
    test="asset_map/script.html"
    test_case_name="script_present_missing"
    name="quux.js"
%}

{%
  include test/case.html
    test="asset_map/script.html"
    test_case_name="script_integrity_by_default"
    name="bar.js"
%}