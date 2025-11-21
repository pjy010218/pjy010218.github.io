---
seotitle: Fuzzing for Digital Artifacts -2-
title: "Fuzzing for Digital Artifacts (2)"
description: This is a journal on writing a research paper on acquiring user-application-related digital artifacts based on fuzzing methods.
author: Junyeong Park
type: post
updated: 2025-11-22
sitemap:
  lastmod: 2025-11-22
url: /papers/fuzzing-DAs-2
tags:
  - research
  - Fuzzing
  - Digital Artifacts
---

### Fuzzing for Digital Artifacts (2)
<br

So I've created a PoC project that extracts which files a 'mousepad' program uses/modifies via eBPF tracing,<br>
executes the "Save" action to represent user action, and save every trace into a designated json file.<br>
After the json file is created, a local LLM (OLLAMA 3.2) maps the traces with D3FEND Digital Artifacts.<br>
<br>
This works as a successful PoC, but we need more novelty, and more robustness in the pipeline.<br>
Here are some things that I want, or need to implement in order to achieve said robustness.<br>
<br>
1. **The 'Fuzzing' isn't actually fuzzing**
   Right now, the fuzzing mechanism is just an automated script that says "Do this, do that". After it's done, it doesn't do anything.<br>
   So essentially this really isn't 'fuzzing'. It's a hardcoded script.<br>
   We need to fix this.<br>
2. **The Target**
   The target (the mousepad) is not novel, or robust at all. It's literally only for PoC.<br>
   This needs to escalate to more complex applications (e.g., Chrome, Discord).<br>
3. **Better 'Pointers'**
   Right now, we do not know which action causes which artifact. This needs to be saved somewhere, in order to create a truely novel CTI database.<br>
   
<br>
<br>

This is my record on creating a Digital Artifact extraction method on user-level software based on fuzzing techniques.<br>

**2025-11-22**

<br>

**Junyeong Park**
