---
layout: default
type: post
title: Deploy Rails app with browserify-rails to Heroku
---

I am building Rails 4.x app that runs on Heroku. And I recently added browserify-rails to the app then I got an error below while deploying it to Heroku.

{% highlight text %}
BrowserifyRails::BrowserifyError: browserify could not be found at /tmp/build_7afd0a3da809f3510421bfa4737d3bf8/./node_modules/.bin/browserify. Please run npm install.
{% endhighlight %}

I\'ve tried a lot of thing and finally found the solution. Here is the process for solving this issue.

### Configure Heroku to use multi-buildpack
{% highlight sh %}
heroku config:add BUILDPACK_URL=https://github.com/ddollar/heroku-buildpack-multi.git
{% endhighlight %}

### Create `.buildpacks` file
Create `.buildpack` file for the multi-buildpack to make sure node.js is compiled before ruby.

{% highlight text %}
https://github.com/heroku/heroku-buildpack-nodejs
https://github.com/heroku/heroku-buildpack-ruby
{% endhighlight %}

### Install browserify with `--save`

`rake assets:precompile` in heroku deploy expects `browserify` to be installed in `.node_modules` directory. So move it from `devDependencies` to `dependencies`.

{% highlight sh %}
npm uninstall browserify --save-dev
npm install browserify --save
{% endhighlight %}

Now try to deploy again!

{% highlight sh %}
git push heroku master
{% endhighlight %}

It should work now.
