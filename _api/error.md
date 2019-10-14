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

{%
  include test/case.md
    test="asset_map/error"
    test_case_name="error_404"
    error="404"
    name="a-missing-pack.js"
%}

Causing a `404` error is the default in production. In other environments, `alert` is the default.
