---
---

{%
  include test/case.html
    test="asset_map/error.html"
    test_case_name="error_alert"
    error="alert"
    message="this failed. Here's why:..."
%}

{%
  include test/case.html
    test="asset_map/error.html"
    test_case_name="error_error"
    error="error"
    message="this failed. Here's why:..."
%}

{%
  include test/case.html
    test="asset_map/error.html"
    test_case_name="error_comment"
    error="comment"
    message="this failed. Here's why:..."
%}

{%
  include test/case.html
    test="asset_map/error.html"
    test_case_name="error_fail"
    error="fail"
    type="this failed. Here's why:..."
%}
<!-- ^ fail uses   -->

