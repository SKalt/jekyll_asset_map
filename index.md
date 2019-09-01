---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
---

<pre><code>{% raw %}{% include javascript_pack_tag.html asset_name="foo.js" %}{% endraw %}</code></pre>
{% capture output %}
  {% include javascript_pack_tag.html asset_name="foo.js" %}
{% endcapture %}
<pre><code>{{ output | strip | escape }}</code></pre>

<hr>
<br>

<pre><code>{% raw %}{% include javascript_pack_tag.html asset_name="foo.js" async=false %}{% endraw %}</code></pre>
{% capture output %}
  {% include javascript_pack_tag.html asset_name="foo.js" async=false %}
{% endcapture %}
<pre><code>{{ output | strip | escape }}</code></pre>

<hr>
<br>

<pre><code>{% raw %}{% include javascript_pack_tag.html asset_name="quux.js" %}{% endraw %}</code></pre>
{% capture output %}
  {% include javascript_pack_tag.html asset_name="quux.js" %}
{% endcapture %}
<pre><code>{{ output | strip | escape }}</code></pre>

<hr>
<br>

<pre><code>{% raw %}{% include asset_pack_path.html asset_name="foo.js" %}{% endraw %}</code></pre>
{% capture output %}
  {% include asset_pack_path.html asset_name="foo.js" %}
{% endcapture %}
<pre><code>{{ output | strip | escape }}</code></pre>

<hr>
<br>

<pre><code>{% raw %}{% include javascript_pack_tag.html asset_name="bar.js" %}{% endraw %}</code></pre>
{% capture output %}
{% include javascript_pack_tag.html asset_name="bar.js" %}
{% endcapture %}
<pre><code>{{ output | strip | escape }}</code></pre>

<hr>
<br>

<pre><code>{% raw %}{% include javascript_packs_with_chunks.html entrypoints="app1,app2"%}{% endraw %}</code></pre>
{% capture output %}
{% include javascript_packs_with_chunks.html entrypoints="app1,app2"%}
{% endcapture %}
<pre><code>{{ output | strip | escape }}</code></pre>
