---
layout: $/layouts/post.astro
title: What Is the Jamstack in 2021?
description: What Jamstack means is evolving. While labels don't help you get your work done, they are also important.
tags:
  - jamstack
author: Brian Rinaldi
date: 2020-12-28T10:23:31.210Z
---

2020 was a terrible year for a lot of things but it was a pretty good year for the Jamstack. We not only saw a lot of startups in the Jamstack space getting massive funding, but also big companies jumping in as well. For example, Microsoft launched Azure Static Web Apps and, more recently, Cloudflare launched Cloudflare pages. As I argued in the recent issue of [Jamstacked](https://jamstack.email/), I think we will look back on this year as the year the Jamstack went mainstream.

> On a side note, if you're interested Jamstack, make sure to join me at [TheJam.dev](https://thejam.dev), a Jamstack community conference being held on January 28-29.

## What Does Jamstack Mean in 2021?

This has also been a year in which the concept of the Jamstack has been evolving. What began as just tools for static sites, was redefined to include dynamic client-side functionality via JavaScript and APIs in 2016, when the term Jamstack was coined. In 2020 we saw the first hints of change in this definition since it was originally defined caused by the rise of hybrid sites that use a combination of SSR (server-side rendering) and static pre-rendering. This hybrid option has been popularized largely by Next.js.

But are these sites truly Jamstack? I'd argue that, on the one hand, how we define and redefine the Jamstack term doesn't matter at all in practice, while on the other it is actually really important.

## The Background

JavaScript based Jamstack tools like Next.js, RedwoodJS and Nuxt allow developers to define how a route within a site will be generated. For instance, my blog pages could all be purely static, while my home page could be server-side rendered. This was initially only available via hosting on Vercel or a Node-based hosting service, but Netlify has also begun supporting these hybrid SSR/SSG sites via tools like [Next on Netlify](https://www.netlify.com/blog/2020/12/07/announcing-one-click-install-next.js-build-plugin-on-netlify/).

There has been lively debate within the community about whether these sites are Jamstack or not. As with every debate about the term Jamstack, this is colored by the fact that Netlify largely created and maintains the term. This has become more pronounced as Jamstack has gained popularity and, in particular, as companies have jumped into the ecosystem. For instance, while I'm not privy to any of the internal discussion, I largely suspect this is why Microsoft uses the phrase "static web app" rather than Jamstack - because it can be hard to disassociate promoting Jamstack from promoting Netlify. This is no more obvious than with [Vercel's recent funding announcement](https://vercel.com/blog/series-b-40m-to-build-the-next-web), wherein the company went from being a Jamstack promoter to attacking the concept of Jamstack as "the dogmatism of pure static."

Thus the debate has gone from whether hybrid SSR/SSG sites were Jamstack to whether they represented what you might call a post-Jamstack concept.

## Labels Are Meaningless

You may wonder why anyone cares about such an esoteric debate and you'd have a point. The reality for most developers is that these definitions are pointless in the day-to-day work. We aren't paid according to our strict adherence to the concepts of Jamstack, but to get the job done. If the requirements of a site are best served by building it fully SSR, partially SSR or fully static, then that's what we should do. We may have a preference for one type of solution, which may guide us, but it doesn't - it cannot - restrict how we ultimately solve the problem.

This leads many developers to often see this as a debate about marketing. After all, they say, Jamstack was just a marketing term created by Netlify to popularize a set of tools (static site generators) that, not coincidentally, were how you built sites to run on Netlify.

That's true but...

## Labels Are Important

Let's go back to 2016 when the term Jamstack was created. Having been an active proponent of static site generators for already some years by that time, it was obvious to me and to others that there was a real perception problem. "Static sites", as we called them, were seen as purely a niche solution primarily for developer blogs and developer portfolios (and maybe, to a lesser degree, for documentation). No one would build a serious site with a static site generator, right?

By defining a new term, one that dropped the problematic use of "static", Jamstack helped change the perception of these tools - but it did more than that. It helped define a concept around which we could organize - write Jamstack books, host Jamstack conferences, run Jamstack meetups and so on. Doing so doesn't just require a term, but a term that has understandable meaning and value to the community. Jamstack was clearly defined enough that it accomplished this and, in my opinion, helped drive the use of these tools from a fringe solution in 2016 to a mainstream one as we enter 2021.

Which is where we get to the problem of how we define Jamstack going forward...

## Jamstack in 2021 is Static-First but not Static-Only

My one big criticism of Vercel's "attack" on the concept of Jamstack is that it didn't offer any clearly defined alternative. We "don’t care if an application is CSR, SSR, SSG, etc. as long as [our] end-user is delighted" is exactly the sentiment I shared in the "labels are meaningless" section above but it is not a principle or concept we can organize around or evangelize. It only says what it isn't not what it is.

Which leaves us with the problem of how we define Jamstack going forward. I believe it is fair to say that the concept of Jamstack can evolve to include hybrid sites, though some will disagree. However, the term has to retain a clear definition and understandable meaning if it will continue to have value for all the reasons I defined above. Saying a site is Jamstack just because it uses a static site generator, even if it is an entirely SSR site running on Next makes the definition far too nebulous to me. What's the difference then between that and a plain old React site with SSR (and no Next)? Or really any site because, well, nearly everything on the web nowadays is JavaScript, APIs and Markup (HTML is markup after all)? Going that route, to me, ends up putting us in a position where we are, more or less, just advocating modern web development, with no real organizing principle or architecture.

My personal definition has room for hybrid solutions, but it is *static first*, by which I mean every route is assumed to be static unless the specific requirements for that route prevent the possibility of a static solution. So this is a site built upon statically generated assets sprinkled with SSR where necessary, not an SSR site sprinkled with static routes. That is not to say there is anything wrong with the alternative, just that it isn't Jamstack - and that's fine, do what works for you. I personally believe that _many_, if not a majority of, sites on the web can work in a static-first hybrid model of Jamstack. I also think adding some sprinkled SSR doesn't overly dilute the value of the term.

So for 2021, let's start first by dropping the JAM acronym (in my opinion, it creates more confusion than it helps nowadays). It's just Jamstack not JAMstack. It's an architecture or a methodology rather than a "stack" of specific tools - so, yeah, the stack part of the name is a bit confusing but it's the name we have. Let's define Jamstack as static-first and not static-only, making room for hybrid solutions. Finally, as a developer, do what you need to do regardless of whether it fits neatly into Jamstack or not - but learn about and apply Jamstack principles wherever you can for the benefit of your project.