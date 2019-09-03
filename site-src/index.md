---
---

<pre><code>{% raw %}{% include asset_map_script.html asset_name="foo.js" %}{% endraw %}</code></pre>
{% capture output %}
  {% include asset_map_script.html asset_name="foo.js" %}
{% endcapture %}
<pre><code>{{ output | strip | escape }}</code></pre>

<hr>
<br>

<pre><code>{% raw %}{% include asset_map_script.html asset_name="foo.js" async=false %}{% endraw %}</code></pre>
{% capture output %}
  {% include asset_map_script.html asset_name="foo.js" async=false %}
{% endcapture %}
<pre><code>{{ output | strip | escape }}</code></pre>

<hr>
<br>

<pre><code>{% raw %}{% include asset_map_script.html asset_name="quux.js" %}{% endraw %}</code></pre>
{% capture output %}
  {% include asset_map_script.html asset_name="quux.js" %}
{% endcapture %}
<pre><code>{{ output | strip | escape }}</code></pre>

<hr>
<br>

<pre><code>{% raw %}{% include asset_map_path.html asset_name="foo.js" %}{% endraw %}</code></pre>
{% capture output %}
  {% include asset_map_path.html asset_name="foo.js" %}
{% endcapture %}
<pre><code>{{ output | strip | escape }}</code></pre>

<hr>
<br>

<pre><code>{% raw %}{% include asset_map_script.html asset_name="bar.js" %}{% endraw %}</code></pre>
{% capture output %}
{% include asset_map_script.html asset_name="bar.js" %}
{% endcapture %}
<pre><code>{{ output | strip | escape }}</code></pre>

<hr>
<br>

<pre><code>{% raw %}{% include asset_map_chunks_js.html entrypoints="app1,app2"%}{% endraw %}</code></pre>
{% capture output %}
{% include asset_map_chunks_js.html entrypoints="app1,app2"%}
{% endcapture %}
<pre><code>{{ output | strip | escape }}</code></pre>
