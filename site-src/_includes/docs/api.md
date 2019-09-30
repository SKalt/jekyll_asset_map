{% capture name %}{{ include.name | downcase }}{% endcapture %}
{% assign api = site.data.docs[name].arguments %}
{% capture args %}
  {% for arg in api %}
  {% assign defaults = arg[1].defaults %}
  {% capture href %}asset-map-include-{{ name }}--arg-{{ arg[0] }}{% endcapture %}
__{{ arg[0] }}__: _{% if args[1].required %}required{% else %}optional{% endif %} {{ arg[1].type }}_. {{ arg[1].description }}{% if defaults %} Default{% unless defaults.size == 1 %}s:
  ```
  {{ defaults | join: "
    | default: " }}
  ```
  {% else %}: `{{ defaults[0] }}`
  {% endunless %}
{% endif %}
{% endfor %}
{% endcapture%}
<details open id="docs-{{ name }}" class="docs" >
  <summary>
    <h2><code>asset_map/{{ name }}.html</code></h2>
  </summary>
  {{ site.data.docs[name].description | markdownify }}
  <details open id="docs-{{ name }}-args" class="docs docs--args"><summary>Arguments</summary>
    <section class="docs docs--args-arg">
      {{ args | markdownify }}
    </section>
  </details>

  <details open id="docs-{{ name }}-examples" class="docs doc--examples">
    <summary>Examples</summary>
    <section class="examples">
      {{ include.content }}
    </section>
  </details>
</details>