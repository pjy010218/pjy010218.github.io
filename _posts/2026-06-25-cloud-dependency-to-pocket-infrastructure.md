---
layout: post
title: From Cloud Dependency to Pocket Infrastructure
date: 2026-06-25 19:07:00
description: Running Hermes Agent on Android with Native Browser Automation
tags: hermes android termux infrastructure
categories: engineering
---

## Situation

For a while, I had been running my personal AI agent environment in the cloud.

The setup worked well: Hermes Agent running remotely with persistent memory, scheduled jobs, browser capabilities, and custom research skills.

But eventually I hit a credit limitation, and I realized that my agent depended entirely on a cloud subscription, which I do not want to afford.
At first, moving the agent onto my personal desktop seemed like the obvious solution. But after thinking more about it, that introduced a different concern.

AI agents are long-running systems. They execute scheduled jobs, interact with external tools, and occasionally behave in unexpected ways. Running that directly on my primary machine felt like mixing experimental infrastructure with my personal environment. Also the machine that the agent runs on has to be always available and running at all times. I didn't want to keep my desktop turned on 24/7.

So I wanted something isolated, running 24/7, that I didn't have to tend to at all. That was when I looked at something I already had:

> an unused Android phone.

Interestingly, Hermes Agent already supported Termux.
So the idea became simple:

> Migrate the entire agent from the cloud into a dedicated Android device.

---

## Task

The goal was no longer migration.

The goal became independence.

I wanted to:

- Remove dependency on cloud subscriptions
- Run Hermes Agent entirely on local hardware
- Preserve long-running agent behavior
- Keep browser-based capabilities intact
- Avoid introducing additional servers or desktops

In short:

Build a self-contained AI agent appliance from a spare Android phone.

---

## Action

### Step 1 — Moving Hermes into Termux

The initial migration was straightforward. Termux provides a Linux-like userspace with package management, process execution, and enough compatibility for Hermes Agent to run. After restoring the environment and dependencies, the agent launched successfully.

But then I ran into one major capability: **Browser automation.**

Hermes relied on browser interaction for tasks such as information retrieval and web interaction. Inside Termux, browser execution simply did not work. That effectively disabled one of the agent’s core abilities.

---

### Step 2 — Exploring CDP-based workarounds

The first idea was not to fix browser execution directly. Instead, I tried using Chrome DevTools Protocol (CDP) to connect externally to an already-running browser. This **_partially worked_**, but it introduced multiple architectural compromises:

- Dependency on an externally launched browser
- Session management complexity
- Reduced portability
- Additional operational steps

It felt more like bypassing the problem than solving it. I wanted the browser to behave as a native runtime dependency, not an external service.

---

### Step 3 — Bringing Chromium directly to Android

That led me to a different direction. I found an [[open-source approach]](https://github.com/Jobians/playwright-termux) that enabled Chromium in Termux and demonstrated scraping inside Android environments. I directly used this idea to Hermes.

The browser layer used by Hermes depended on Agent Browser. However, Agent Browser did not provide Android binaries. So I started from source. I built the browser component manually in Rust and eventually got execution working.

But another issue appeared: **Browser discovery.**

The implementation had been written with Linux assumptions. It searched Linux browser paths. Android’s Chromium installation layout is fundamentally different. As a result, the browser existed, but the runtime could not find it. So I patched the browser detection logic. I introduced Android-specific environment handling and added Android browser discovery paths so the runtime could locate and launch Chromium correctly. After rebuilding, browser execution finally worked.

---

### Step 4 — Publishing the solution

Once everything worked end-to-end, I packaged the changes into an open repository.

The project contains:

- Android compatibility patches
- Browser discovery updates
- Chromium integration for Termux
- Rust build instructions
- Reproducible setup steps

Repository:

[termux-agent-browser](https://github.com/pjy010218/termux-agent-browser?utm_source=chatgpt.com)

---

## Result

The final architecture now looks like this:

```text
Android Device
    ↓
Termux
    ↓
Hermes Agent
    ↓
Patched Agent Browser
    ↓
Chromium
```

This got me thinking of an unexpected realization: All you need is a phone.

[[View in Projects](/projects/termux-agent-browser.md)]
