---
layout: default
type: post
title: Blogging with Github and Jekyll
image: tokyo.jpg
---

Before I created this blog, I had been thinking about the best way for me to create a blog. I have my [Japanese blog](http://chikathreesix.com), which is created by Wordpress and hosted on a hosting server, however, I felt that is a little bit obsolete and didn\'t want to follow this way again.

Anyway, I had two requirements for this blog which can\'t be accomplished with Wordpress and hosting server.

- Write a blog by Markdown
- Easy to customize



# Creating repository
`username.github.io` or `gh-pages`

# Installing

- Ruby
- Jekyll
- Bundler

# Setting up

- Gemfile
- `_config.yml`
- bundle install
- index.html

# Serve
- `jekyll serve --watch`
- http://localhost:4000

# Front Matters
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

# Wriging posts
