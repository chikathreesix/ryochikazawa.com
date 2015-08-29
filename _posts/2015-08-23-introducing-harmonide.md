---
layout: default
type: post
title: Introducing Harmonide
---

When I got a talk, I am very lazy to prepare slides. I don\'t want to spend too much time on creating it. So no choice to open neither Keynote nor PowerPoint.

What I wanted was a slide show framework that can be driven by Markdown. Then I found there are some cool frameworks like [cleaver](http://jdan.github.io/cleaver/) or [remark](http://remarkjs.com/). They are great but because I mostly have a talk about JavaScript, one more thing I wanted was to run a JavaScript code on the slide show.

So I finally decided to implement my own framework which is called [Harmonide](http://harmonide.com/).

# What is Harmonide?
Harmonide is a HTML5 slide show framework for JavaScript hackers that meets these two requirements: compiling from Markdown and running JavaScript codes on it.

# Getting started
Harmonide command is implemented in node.js and available on npm. So first of all, install Harmonide by npm.

### Install Harmonide

{% highlight sh %}
$ npm install harmonide
{% endhighlight %}
### Generate slides
Once you install Harmonide, now you can use harmonide commands on your terminal.

To compile slides, you can use build command with specifying your markdown file. This will create a `build` directory that includes a compiled HTML slide.

{% highlight sh %}
$ harmonide build your-slide.md
{% endhighlight %}

# Markdown format

Because you will define pages and set some settings in one single Markdown file, here are few basic Markdown format for Harmonide you might want to remember.

### Define pages
Defining pages can be done by inserting 2 lines of  `-----` in front of the page of the content you are going to define.

<div class="highlight">
<pre><code>-----
-----
# Slide1

-----
-----
# Slide2
</code></pre>
</div>

### Options
You can change backgournd color of the slide, positions of the texts and so on by setting them either globally or specifically for a slide.

Global options should be specified in the begining of the markdown and options for each slide should be specified in between the 2 lines of `-----`.

<div class="highlight">
<pre><code>backgroundColor: white

-----
backgroundColor: black
align: middle
-----
# Slide1

-----
-----
# Slide2
</code></pre>
</div>

### JavaScript Codes

All JavaScript codes written in Github code block format will generate the code block in HTML with a button to run the code.

<div class="highlight">
<pre><code>-----
-----
# Slide1

```js
console.log('Hello Harmonide!');
```

- ES6 is also available

```jses6
var square = (x) => x * x;
console.log(square(2));
```
</code></pre>
</div>

The generated block will be like as follows.

![My helpful screenshot]({% asset_path harmonide_js.png %})

# Contribute to Harmonide

Harmonide is still under development. Here is the [repository](https://github.com/chikathreesix/harmonide) so feel free to [give suggestions](https://github.com/chikathreesix/harmonide/issues) or [send a pull request](https://github.com/chikathreesix/harmonide/pulls).

Try Harmonide for your next talk and happy harmoniding!
