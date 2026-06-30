---
layout: post
title: AIVSS Scoring System for OWASP Agentic AI Core Security Risks v0.1 Draft Participation
date: 2026-06-30 20:07:00 +0900
description: Participating in the draft of OWASP Agentic AI Core Security Risks
tags: AIVSS OWASP Agentic-AI Draft Participation
categories: standards
---

## Situation

Along my journey of creating CLEAR, Our team have created the terms "Broad Read" and "Atomic Read", which refers to the scope of data that the agent is allowed to read. "Broad Read" refers to a wide scope of data where the tool call is structurally designed to grab/obtain all or as much data as possible in order to provide the agent with the most data. "Atomic Read" refers to the smallest scope of data where the tool call is designed to grab/obtain a very specific type or keyword of data.

Broad Read tool calls naturally give the agent privilege; privilege to read whatever it requested, and possibly more.

This is where we found out the tool/API design is fundamentally flawed in security. In order to give enough, or more than enough information to the agent for best results, it results in agents reading unnecessary, possibly sensitivie information that nobody knows how the agent will use in the future.

## My Contribution

I contributed this realization to the **AIVSS Scoring System For OWASP Agentic AI Core Security Risks v1 Draft**, in the **"Agentic AI Tool Misuse"** section, and this is what I wrote:
> **Over-Privileged Read Scope:** The agent utilizes tools designed for broad, unvetted reading rather than strictly scoped, granular queries, mainly driven by development convenience. Importing vast, unrestricted data chunks increases the attack surface for Indirect Prompt Injections and possible data leakage.

Disclaimer: The draft is still in writing, so full disclosure of the document is impossible, and the contribution itself still needs to be accepted into the final document.
