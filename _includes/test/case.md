{% capture input %}

```liquid
{% raw %}{%{% endraw %}
  include {{ include.test | strip }}{% for kvp in include %}{%
    unless kvp[0] contains 'test'
     %}{%
       if kvp[1] == true or kvp[1] == false %}
    {{ kvp[0] }}={{ kvp[1] }}{%
       else
       %}
    {{ kvp[0] }}="{{ kvp[1] }}"{%
       endif
       %}{%
    endunless %}{% endfor %}
{% raw %}%}{% endraw %}
```

{% endcapture %}

{% capture raw_output %}
{%
    include {{ include.test }}
      map=include.map
      name=include.name
      sep=include.sep
      asset_key=include.key
      entrypoint_key=include.entrypoint_key
      entrypoints=include.entrypoints
      error=include.error
      type=include.type
      message=include.message
      async=include.async
      defer=include.defer
      nomodule=include.nomodule
      type=include.type
      crossorigin=include.crossorigin
      referrerpolicy=include.referrerpolicy
      importance=include.importance
      media=include.media
  %}
{% endcapture %}

{% capture output %}

```html
{{
  raw_output
    | strip
    | replace: "><", ">
<"
    | replace: ">
</", "></"
}}
```

{% endcapture %}

<div class="test" id="test--{{ include.test_case_name }}"><div class="test-input"><span class="test-input--annotation"></span>{{ input | markdownify | strip }}</div><div class="test-output"><span class="test-output--annotation"></span>{{ output | markdownify | strip }}</div></div>
