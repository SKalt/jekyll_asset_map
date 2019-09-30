---
---
{%
  include test/case.html
    test="asset_map/script.html"
    test_case_name="script_present"
    name="foo.js"
%}

You can use script attributes such as `async`, `defer`, `type`, `nomodule`, `crossorigin`, or `referrerpolicy`.
{%
  include test/case.html
    test="asset_map/script.html"
    test_case_name="script_present_async"
    name="foo.js"
    async=true
%}

Setting a boolean attribute to `false` will result in it being omitted (equivalent to false in html).
{%
  include test/case.html
    test="asset_map/script.html"
    test_case_name="script_present_async_false"
    name="foo.js"
    async=false
%}

Missing scripts accept the standard `error` parameter (see [_](#))
{%
  include test/case.html
    test="asset_map/script.html"
    test_case_name="script_present_missing"
    error="comment"
    name="quux.js"
%}

By default, if your asset map includes integrity information, that integrity is included in the generated script tag.
{%
  include test/case.html
    test="asset_map/script.html"
    test_case_name="script_integrity_by_default"
    name="bar.js"
%}