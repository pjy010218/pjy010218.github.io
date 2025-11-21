---
seotitle: Fuzzing for Digital Artifacts -1-
title: "Fuzzing for Digital Artifacts (1)"
description: This is a journal on writing a research paper on acquiring user-application-related digital artifacts based on fuzzing methods.
author: Junyeong Park
type: post
updated: 2025-11-21
sitemap:
  lastmod: 2025-11-21
url: /papers/fuzzing-DAs-1
tags:
  - research
  - Fuzzing
  - Digital Artifacts
---

### Fuzzing for Digital Artifacts (1)
<br

A thought occurred to me.<br>
Fuzzers are brute forcing every crash, every error a software could have.<br>
They can also track which input created which crash.<br>
What if fuzzing can be used to 'track' and 'record' every file a program touches, or can touch?<br>
<br>
For example, if Chrome Explorer creates/manages/modifies file A, B, C,<br>
Couldn't a fuzzer know that the Chrome Explorer is related to file A, B, C?<br>
And since practically everything is a file in UNIX systems, this could turn out easier than expected.<br>
<br>

If this works, and we've created, or found an open-source fuzzer that has these capabilites,<br>
We can save the modified-files data into a database, creating intelligence on whatever files a certain software touchs.<br>
Then, we can get an AI model (probably a Pre-trained LLM) to natural-language-process this data,<br>
and link it with MITRE D3FEND's Digital Artifacts.<br>
<br>
Then we would have an abstracted database, useful for CTI, and a raw database of low-level abstraction, useful for real-world use.<br>
<br>
Let's get digging.<br>
<br>
<br>

This is my record on creating a Digital Artifact extraction method on user-level software based on fuzzing techniques.<br>

**2025-11-08**

<br>

**Junyeong Park**
