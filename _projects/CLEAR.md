---
layout: page
title: CLEAR
description: An LLM-as-a-Judge based Data Loss Prevention system.
importance: 1
category: work
---

## What it is

`CLEAR` is an LLM-as-a-Judge based Data Loss Prevention system, a graduation project for Sejong University InfoSec students.

*Short for **Contextual Leak Evaluation and Redaction**.*

## The Problem

Traditional DLP systems sit in between the user and the model. And attempts to implement that same DLP system in between the agent and the tools ignore the difference that comes from that position shift. There are no native DLP systems that catch data loss in between the agent and the tools, because we need to look bigger than the sensitive data's existence itself inside the transaction; the agent over-obtains out-of-scope, unnecessary data for sycophancy. The agent sees information it didn't need/have to.

## The Solution

CLEAR is a proxy layer that introduces an LLM-as-a-Judge mechanism that evaluates whether the tool call result includes unnecessary data, by comparing the user's initial input (what the user asked for), the generated tool call (what the agent thought it needed), and the returned value (what that tool call obtained). For example, if the user's initial input asked for a person's email address, and the tool call was `_get_text()` (a broader read function that doesn't close its read scope enough, resulting in over-obtaining of data), and the result included the person's name, email, phone number, the LLM-as-a-Judge layer outputs a JSON file that states "name" and "phone number" is over-obtained. Then two algorithm engines (JSONPath, Aho-Corasick) sanitizes the result by trimming and masking the stated fields/keywords; "name" and "phone number". The final result thus does not contain the unnecessary information.

## Key Features

- **LLM-as-a-Judge Evaluation**: Triangulates user intent, agent tool call, and tool result to identify out-of-scope data.
- **Context-Aware Trimming**: Outputs specific JSON outlining over-obtained fields.
- **Multi-Engine Sanitization**: Utilizes JSONPath and Aho-Corasick algorithms to mask and trim unnecessary information.
- **Transparent Proxy Layer**: Sits between the agent and its tools to natively prevent over-obtaining.

## Experiments & Results

To validate CLEAR's effectiveness, we conducted two primary experiments:

1. **Semantic Context Alignment Benchmark**: We evaluated CLEAR across 100 enterprise scenarios (including Notion, Slack, and Discord). CLEAR successfully identified and mitigated data over-collection and adversarial logic hijacking with an **80.0% accuracy**. By intercepting malicious or overly broad reads dynamically, CLEAR demonstrated practical resilience with an acceptable average latency of 14.60 seconds.
2. **Demographic k-Anonymity and Mosaic Effect Mitigation**: We simulated an autonomous agent progressively collecting scattered, harmless-looking data from a 1,000,000-record database to infer sensitive demographic traits (the "Mosaic Effect"). CLEAR's intent-aligned trimming significantly reduced the risk of re-identification, achieving a **7.4× improvement in median anonymity** and a **5.2× reduction in extreme re-identification risks** compared to a baseline with no filtering.

## Architecture

```text
User Intent
    ↓
Agent
    ↓
Tool Call
    ↓
CLEAR Proxy Layer (LLM-as-a-Judge)
    ↓
Tools (e.g., APIs, Database)
    ↓
CLEAR Sanitization Engine (JSONPath / Aho-Corasick)
    ↓
Sanitized Result Returned to Agent
```

## Links

- **GitHub Repository**: [CLEAR](https://github.com/sejong-capstone-seirenes/clear) *(Currently private, will be public soon)*