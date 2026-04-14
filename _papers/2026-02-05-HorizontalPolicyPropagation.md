---
seotitle: Horizontal Policy Propagation (1)
title: Toward a Bio-Inspired Immune System for Cloud Microservices
description: This is an ongoing log for research & development for the Horizontal Policy Propagation research.
author: Junyeong Park
type: post
updated: 2026-02-05
sitemap:
  lastmod: 2026-02-05
url: /papers/HPP-1
tags:
  - Horizontal Policy Propagation
  - Bio-Inspired Microservice Security
---
It's been a while since I've written a research log. It's not that I've been inattentive or careless to work the past couple of months. Research was ongoing as always, just not the documenting.<br>
So, I have some updates on some of the things I've been doing, and as one can already notice, I have a new paper on the way and this is the scope I'm going to be talking about in this log.<br>
I like interdisciplinary research. New knowledge from other disciplines, diffferent ways of solving problems are what intrigues me in my own research, and when one way of solving a certain problem is applied to another problem of a completely different field, I believe it provides incredible insight in new ways.<br>
So this is where I started.<br>
Long story short, the immunity system in our bodies seemed similar to the cloud environment, especially in microservice environments. Each microservice is a cell, and metadata of the microservice is a gene. The control plane *controls* the lifecycle of the cells, and how they communicate, how they gain immunity, and how they tell the "host" its sick. <br>
This is exactly transcribable/translatable to cloud language. Each pod tells the host its sick, the host then initiates an immune system, and finally achieve cluster-wide immunity.<br>
Several thing are already implemented and in place. I'm not going into too much detail about the technical side of the project, since they are mostly widely used commercial/open-source tools that are a "means to an end" in this research. The core contribution comes from the full on integration/implementation of the immunity process into the microservice environtment (or strictly speaking *"bio-inspired"*).<br>
But here are some things that need "polishing".
- **Threat Model:** It seems though the threat model and the attack scope that this research can manage is rather small and tight. People say "there is no silver bullet", but it still needs to be a bullet...
- **Bio-Inspired or Fully-Integrated**: Fair enough to say that the current implementation does not *really* reflect human immunity. Yes it mimicks enough to say it indeed is an immune system, and yes it is generally safe to say the current system is "Bio-Inspired", but some critical points have become a hurdle in order to call this research a "Fully-Integrated Immune System" for any biologists that might be in review.
<br>
So, what next?

**2026-02-05**  
<br>
**Junyeong Park**
