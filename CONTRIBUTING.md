## Licensing patches

Since I'm offering this project under the [Parity public License](./LICENSE), I can only accept patches with compatible licenses. Please indicate in your PR or commit that you're licensing your patch under a permissive license such as [`APACHE-2.0`](https://www.apache.org/licenses/LICENSE-2.0), [`MIT`](https://choosealicense.com/licenses/mit/), or a [BSD license](https://choosealicense.com/licenses/bsd-2-clause/). An easy way to do this is to `git commit --signoff`.

## Developing

`docker-compose up` watches your code and recompiles on changes.

## Liquid template style

For includes with arguments, please use the following style:

```liquid
{%
  include path/name.ext
    arg1="foo"
    arg2=bar
%}
```

Please keep your control flow tags at the same indentation, and indent the inner code.

```liquid
{% if something %}
  ...indented
{% else %}
  ...indented
{% endif %}
```

In whitespace-sensitive areas (i.e. within/between HTML tags), expand the liquid tags so that the control-flow keywords are aligned:

```liquid
{% if something
  %}...indented{%
else
  %}...indented{%
endif %}
```
