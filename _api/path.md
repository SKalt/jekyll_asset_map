---
---
{%
  include test/case.md
    test="asset_map/path"
    test_case_name="path_present"
    name="foo.js"
%}

However, if `path` fails to map a name to a path, it will return an empty string:

{%
  include test/case.md
    test="asset_map/path"
    test_case_name="path_missing"
    name="missing.js"
%}
