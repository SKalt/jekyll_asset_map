{% capture name %}{{ include.name | downcase }}{% endcapture %}
{% assign api = site.data.docs[name].arguments %}
## asset_map/{{ name }}
{% capture args %}
  {% for arg in api %}
  {% assign defaults = arg[1].defaults %}
__{{ arg[0] }}__: _{% if args[1].required %}required{% else %}optional{% endif %} {{ arg[1].type }}_. {{ arg[1].description }}{% if defaults %} defaults: {% if defaults.size > 1 %}
  ```
  {{ defaults | join: "
    | default: " }}
  ```
  {% else %}`{{ defaults[0] }}`
  {% endif %}
{% endif %}
{% endfor %}
{% endcapture%}
<details id="docs-{{ name}}-args" class="docs docs--args" open><summary>Arguments</summary>
    <section class="docs docs--args-arg">
      {{ args | markdownify }}
    </section>
    <section class="examples">
      {{ include.content | markdownify }}
    </section>
</details>