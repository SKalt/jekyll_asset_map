{% capture name %}{{ include.name | downcase }}{% endcapture %}
{% assign api = site.data.docs[name].arguments %}
{% capture args %}
{% for arg in api %}
{% assign defaults = arg[1].defaults %}
{% capture href %}asset-map-include-{{ name }}--arg-{{ arg[0] }}{% endcapture %}
**{{ arg[0] }}**: _{% if args[1].required %}required{% else %}optional{% endif %} {{ arg[1].type }}_. {{ arg[1].description }}{% if defaults %} Default{% unless defaults.size == 1 %}s:

```
{{ defaults | join: "
  | default: " }}
```

{% else %}: `{{ defaults[0] }}`
{% endunless %}
{% endif %}
{% endfor %}
{% endcapture%}

<details id="docs-{{ name }}" class="docs">
  <summary class="h">
    <code>asset_map/{{ name }}</code>
  </summary>
  {{ site.data.docs[name].description | markdownify }}
  <details open id="docs-{{ name }}-args" class="docs docs--args"><summary class="h2">Arguments</summary>
    <section class="docs docs--args-arg">
      {{ args | markdownify }}
    </section>
  </details>

  <details open id="docs-{{ name }}-examples" class="docs doc--examples">
    <summary class="h2">Examples</summary>
    <section class="examples">
      {{ include.content }}
    </section>
  </details>
</details>
