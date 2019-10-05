---
---
{%
  include test/case.md
    test="asset_map/error"
    test_case_name="error_alert"
    error="alert"
    message="this failed. Here's why:..."
%}

{%
  include test/case.md
    test="asset_map/error"
    test_case_name="error_error"
    error="error"
    message="this failed. Here's why:..."
%}

{%
  include test/case.md
    test="asset_map/error"
    test_case_name="error_comment"
    error="comment"
    message="this failed. Here's why:..."
%}

In production, $_

{%
  include test/case.md
    test="asset_map/error"
    test_case_name="error_fail"
    error="fail"
    name="a-missing-pack.js"
%}

