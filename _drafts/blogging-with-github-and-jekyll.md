---
title: Blogging with Github and Jekyll
---

# Blogging with Github and Jekyll

## Creating repository
`username.github.io` or `gh-pages`

## Installing

- Ruby
- Jekyll
- Bundler

## Setting up

- Gemfile
- `_config.yml`
- bundle install
- index.html

## Serve
- `jekyll serve --watch`
- http://localhost:4000

## Front Matters
- Add `---` then Jekyll will process this as a special file

- Use parameters
```
---
title: Awesome Page
---
```

- show title
```
{{ page.title }}
```

- Add parameters in `_config.yml`
```
{{ site.title }}
```

## Wriging posts
