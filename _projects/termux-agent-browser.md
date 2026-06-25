---
layout: page
title: termux-agent-browser
description: Native browser automation for AI agents running on Android via Termux.
importance: 1
category: work
---

`termux-agent-browser` is an open-source project designed to enable native browser automation for AI agents (specifically the Hermes Agent) running entirely on an Android device using Termux.

By building the browser layer natively in Rust and patching browser discovery logic for Android's Chromium structure, this project makes it possible to run long-lived, fully capable autonomous agents on a spare smartphone—eliminating the need for cloud infrastructure or always-on desktop computers.

## The Problem

AI agents often rely on browser interaction for information retrieval and web tasks. While Termux provides an excellent Linux-like userspace on Android, executing browser automation natively is notoriously difficult. Standard agent frameworks assume standard Linux browser paths and binaries, meaning that out-of-the-box, the agent loses its browser capabilities when migrated to Android.

## The Solution

Instead of adapting the agent to work around the limitations (such as relying on externally launched browsers via Chrome DevTools Protocol), `termux-agent-browser` adapts the browser layer to the platform itself.

This project modifies the underlying Agent Browser component by:

1. Building the browser dependencies natively in Rust for the Android architecture.
2. Patching the browser detection logic to understand Android's unique Chromium installation layout.
3. Introducing Android-specific environment handling to ensure the runtime can successfully locate and launch Chromium.

## Key Features

- **Native Chromium Integration**: Enables seamless browser execution directly within Termux.
- **Android Compatibility Patches**: Overrides core Linux assumptions with robust Android environment handling.
- **Reproducible Builds**: Includes comprehensive Rust build instructions and reproducible setup steps.
- **Total Autonomy**: Empowers local, standalone agent execution on spare Android hardware without cloud subscriptions.

## Architecture

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

## Links

- **GitHub Repository**: [termux-agent-browser](https://github.com/pjy010218/termux-agent-browser)
