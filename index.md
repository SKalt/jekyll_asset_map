---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

{% include javascript_pack_tag.html asset_name="foo.js" %}
<!-- {% include javascript_pack_tag.html asset_name="foo.js" async=false %} -->
{% include javascript_pack_tag.html asset_name="quux.js" %}
{% include asset_pack_path.html asset_name="foo.js" %}
{% include javascript_pack_tag.html asset_name="bar.js" %}
