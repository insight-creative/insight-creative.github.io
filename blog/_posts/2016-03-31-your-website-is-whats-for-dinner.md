---
layout: post
title: Your Website is What's for Dinner
author: Bart Raboin
tag: blog
card: summary large image
image: website-malware.jpg
description: "Your Website is What's for Dinner"
---

![Your Website is What's for Dinner](/img/website-malware.jpg)

You just typed in your website’s URL to take a look at something and bam! You’re interrupted by a glaring, red page with a warning from Google: ...

![The site ahead contains malware.](/img/malware-warning.jpg)

Suddenly you feel your heart in your throat and an imaginary Mike Tyson just jacked you in the gut. Now imagine that feeling while looking at eight different websites that were all hit at the same time. That was me a few weeks ago.

If you were on your own, dealing with this issue, it might very well feel like an impossible task.  Who do you turn to? Your hosting provider? Unless you’re paying for a high-end hosting plan, there are no services in place to protect you from this sort of thing. No backups, no cleanup services. A bully just smashed your lego house, and left you with broken pieces.

Your next step might be to try googling “how to remove malware from my website.” You would be met with many different tactics on how to remove malware, but how do you know which one applies to the malware that hit your site? As malware, bots and hackers continue to become more intelligent with masking their hacks (not only the files they install but the activity they perform), it becomes an effort that you cannot solve alone.

What’s worse, if you actually manage to purge your website of the malware 100%, what’s to protect you from it happening again? This was the challenge I faced when several of our clients were hit by what is known as the [Nuclear EK virus](https://blog.malwarebytes.org/threat-analysis/2016/02/nuclear-ek-leveraged-in-large-wordpress-compromise-campaign/).

**UPDATE:**
**_To demonstrate how quickly the world of malware evolves, since writing this article the Nuclear EK malware campaign has evolved to deliver different package labeled,"[Angler EK](https://blog.malwarebytes.org/threat-analysis/2016/02/wordpress-compromise-campaign-from-nuclear-ek-to-angler-ek/)."_**

We have dealt with typical bots and malware for a long time - like brute force attacks for example - that just hammer away at the login form of a Wordpress-based website trying thousands and thousands of usernames and passwords in the hopes of gaining access. These sort of “zombie horde” attacks are pretty easy to dispel. What’s not as easy to ward off, are the types of attacks that target a specific vulnerability in a public file or online form that can be used to inject malicious code throughout the rest of your site.

We at Insight, took this attack very seriously. It took A LOT of extra hours to get the issues resolved, websites cleaned and reviewed by Google to lift the malware flags. Out of that experience, we have implemented an additional security policy that will be applied to all current and future clients’ websites which includes:

- 24/7 monitoring and scanning of all site files
- Blacklist monitoring
- Off-site backup of all site files and databases
- Professional level WAF (Web Application Firewall)
- Professional file analysis and malware removal

One additional level of security I absolutely recommend is an SSL Certificate. If you manage a website built on a CMS (Content Management System) platform, using an SSL Certificate to secure any sensitive information being submitted—like username and password while logging in—is crucial to keeping your site safe. SSLs can range from $99 to over $500 per year. If you’re not dealing with ecommerce and managing the content of your site, an entry-level SSL is sufficient. It’s a very small cost to protect your sensitive login information. You would cringe if you knew how easy it was for hackers to simply “listen” for familiar strings of data, and pull your username and password - and now they have access to your site.

If you have any questions about website security, or are currently dealing with a malware issue on your site, we’d be glad to talk with you about how we can help.
