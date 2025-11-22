---
seotitle: Fuzzing for Digital Artifacts -3-
title: "Fuzzing for Digital Artifacts (3)"
description: This is a journal on writing a research paper on acquiring user-application-related digital artifacts based on fuzzing methods.
author: Junyeong Park
type: post
updated: 2025-11-23
sitemap:
  lastmod: 2025-11-23
url: /papers/fuzzing-DAs-3
tags:
  - research
  - Fuzzing
  - Digital Artifacts
---

### Fuzzing for Digital Artifacts (3)
<br>

I've updated the fuzzer to be *'smarter'*.<br>
Here are some of the updates.<br>
<br>

- Random Clicking -> UI based Action
- Fed dpkg information for 'grey-box fuzzing'
- Reinforced Learning method by 'rewarding' the fuzzer if it finds any artifacts worth recording.
- Target software is **Chrome** instead of **Mousepad**.

<br>
<br>
By implementing these updates, the fuzzer became smarter than before, doing more actions on more diverse UI components.<br>
This gives us better findings of artifacts (what the software touches), thus giving us more intel to work with.<br>
<br>
I've measured the technichal gains by creating this "Reinforced Learning based Artifact Fuzzer" by using the Random Fuzzer and Non-Reinforced Learning Fuzzer as a baseline.<br>
By this I can ensure that using the RL based Fuzzer is better than just any simple automated method (of course).<br>
<br>

Now we need to implement the following:
1. An increase in robustness:
   Possibly transforming the fuzzer into an all-round fuzzing tool, appliable to other software that the user chooses.
2. A smarter fuzzer:
   The current fuzzer, while the behavior is similar to what I wanted it to be, it's not quite there yet.<br>
   We need to implement some better strategies.<br>
<br>
<br>

This is my record on creating a Digital Artifact extraction method on user-level software based on fuzzing techniques.<br>

**2025-11-23**

<br>

**Junyeong Park**
