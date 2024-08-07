---
layout: $/layouts/post.astro
title: What is the Jamstack in 2022?
description: Are we at risk of losing sight of what made Jamstack great?
tags:
  - jamstack
author: Brian Rinaldi
date: 2022-01-18T10:23:31.210Z
---

2021 was a year of big changes in the Jamstack. [A year ago](https://remotesynthesis.com/blog/jamstack-in-2021), we were struggling a bit with how to define Jamstack in a world that included the ability to use SSR in a Jamstack application. At the time, this was unique to Next.js, but today you'll find this supported in Nuxt.js 3, Gatsby 4 and even Eleventy via the Eleventy Serverless plugin. Not just that, but we've now added in multiple other kinds of rendering such that I wrote an extensive article clarifying the [various types of Jamstack rendering](https://bejamas.io/blog/understanding-rendering-in-the-jamstack/).

2021 also included the release of some new tools that gained a great deal of popularity very quickly and introduced a new concept, the [islands architecture](https://jasonformat.com/islands-architecture/), to the Jamstack. Both [Astro](https://astro.build/), a completely new SSG, and [Slinkity](https://slinkity.dev/), which is built on top of Eleventy, offered the ability to use frameworks like React, but limit JavaScript to only where it is needed.

So, suffice it to say, Jamstack got more popular but it also arguably got more complicated. We probably came no closer to clarity on what the Jamstack is in 2021. And this has led to some thoughts on how I see Jamstack in 2022.

_If you're into Jamstack, which I'm guessing you are because you are reading this, you'll definitely want to join me (virtually) at [TheJam.dev](https://thejam.dev) on January 26-27. It's 2 days of amazing speakers all about Jamstack and it's completely FREE!_

## Where'd the Simple Go?

> For any technology, the hardest part is not establishing simplicity, but protecting it over time.
>
> - Matt Biilmann, CEO of Netlify

I got into Jamstack development – well really static site development – because it felt like a return to simpler days of developing for the web. Sure, SSGs couldn't handle every kind of site, but that was ok because they handled a lot of types of sites. Plus, they were fun and easy to use for many developers in a way that Wordpress or its alternatives were not.

Over time, we added more complexity because we liked building with Jamstack and wanted it to be able to build more sites with it – sites that pure static couldn't handle. In one sense, that's been great. Only a few years ago, it was easy to think of types of sites that couldn't be built with Jamstack. That's no longer true.

But it also has come with some tradeoffs. Getting started with Jamstack was never incredibly easy given that it isn't prescriptive and there are so many options, but once you got past that, the experience used to be much simpler in my opinion. Today, I feel that the learning curve is becoming much steeper. Plus, the result isn't always better than the alternative, with large JavaScript bundles weighing down the apps performance.

This has led to "competition" (so to speak) appealing to developers on territory that Jamstack used to own. Frameworks like Remix or concepts like [functional web apps](https://cfe.dev/sessions/moar2021-functional-web-apps/) often specifically target Jamstack for its growing complexity. "Why fight with rendering options and long builds when pure SSR using serverless is easier to build and offers similar performance?" they argue. Plus, we can run on platforms like Netlify and Vercel just the same.

While it's difficult to admit for someone like me who has been a Jamstack advocate, but I think they have a point.

## 2022 is About Rediscovering the Simple

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">One of the quirks of growing older as a developer in my experience is that, while I&#39;ve learned to appreciate complexity in people a lot more, I&#39;ve also learned to appreciate complexity in code a lot less.</p>&mdash; Brian Rinaldi (@remotesynth) <a href="https://twitter.com/remotesynth/status/1482032277005742080?ref_src=twsrc%5Etfw">January 14, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I feel like, if the concept of Jamstack is to continue to be valuable in 2022 as differentiated from just plain web development, it needs to rediscover what made it appealing – it needs to bring back the simplicity. The good news is that I do not believe that means going back to plain old static sites using traditional SSGs.

This is my list of requirements that I think a modern SSG needs to have:

1. A way to call APIs for data at build time.
2. The ability to modularize my code, whether that be components or partials.
3. Some tools to make building frontend interactivity easier.

To me, everything else is a bit superfluous and adds complexity. Is the ability to build and deploy an edge function within my sites application code cool? Heck, yes. Is it a necessary feature in a Jamstack site builder? No.

It's worth remembering what all this added rendering complexity is actually doing for us and that's just handling the compiling and deployment of our application API. SSR in a Jamstack framework is just deploying parts of your code to serverless functions for you. I could actually already accomplish this to a large degree without the framework depending on the platform that I am deploying my application to. For instance, both Netlify and Cloudflare (and I am sure others) will deploy serverless functions for your API for you automatically if they are placed in a specific folder.

I think we're already seeing some movement in this direction. For example, both Astro and 11ty seem to be geared towards specifically accomplishing the core requirements without the extras (I'm curious if Astro sticks to that given [recent announcements](https://astro.build/blog/the-astro-technology-company/) or moves more in the direction of Next.js). The growing popularity of both tools seems to indicate to me that this has some value and resonance.

But both tools also emphasize something that can make Jamstack _better_ than other methods in the way we always claimed it was better but [didn't always live up to](https://almanac.httparchive.org/en/2021/jamstack#performance-score). That's because both aim to deliver less JavaScript, meaning that the site they deliver should perform better than a framework-heavy alternative both because most of the content is prerendered and because they don't inlude all the extra baggage of a JavaScript framework whenever it isn't necessary. I'm hopeful that it is a path other tools pursue as well.

The original goal of Jamstack was to deliver a better experience to end users (faster and more secure) while offering a better experience to developers (easy to build and maintain). Go [check out the original manifesto](http://web.archive.org/web/20160603092304/http://jamstack.org/). Tons of new (and undeniably cool) advances in cloud computing and application development have seemingly led us down a path towards ever increasing complexity.

All of this complexity added value but complexity also came at a cost. I'm not advocating removing features, and, to be honest, I am still thinking through how this problem can be solved. But I think it can start refocusing on the core tenets of what Jamstack means – it doesn't have to be the solution to every problem but instead a solution that solve a set of particular problems, better. Maybe Jamstack needs to be more opinionated about the experience of building a Jamstack site and about the result. In my view, 2022 could be about rediscovering the simplicity of Jamstack's developer experience and the differentiation of its output or Jamstack could simply blend into web development, not really offering a clear alternative to non-Jamstack options. I personally think the concept still has a ton of value.
