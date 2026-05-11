---
layout: page
title: "에이전틱 AI 환경에서의 데이터 과다 수집 위협 분석"
description: "Wiki introduction page for research paper [에이전틱 AI 환경에서의 데이터 과다 수집 위협 분석]"
---

# 에이전틱 AI 환경에서의 데이터 과다 수집 위협 분석

Welcome to the Wiki page for **에이전틱 AI 환경에서의 데이터 과다 수집 위협 분석**.

## 1. Overview

This paper analyzes the threat of excessive data collection in the agentic AI environment and how this threat is structurally innate in the evolving MCP environments.<br>

The study focuses on how AI agents unintentionally collect and process excessive amounts of information due to the structural design of existing MCP tools. This study proposes that this risks are not accidental, but are deeply rooted in the current direction of MCP tool calls and APIs; optimized for convenience and reusability rather than security and privacy.<br>

## 2. Background

Recent Agentic AI systems rely on external tools (a.k.a MCP Servers) and multi-agent collaboration to perform users' complicated tasks. But as MCP environments become more widely adopted in enterprise systems, AI agents gain access to a broad range of APIs and DBs. However, this expanded functionality also creates new security and privacy risks.<br>

![Agentic AI and the 7 Data Leak Paths](/assets/images/AgenticAI_C1-C7.png)
*Figure 1: Agentic AI and the 7 Data Leak Paths*
<br>
This paper references three prior studies to explain these threats:<br>
- **AgentRaft** identified that many agent tools return excessively broad data schemas instead of only the minimum required information. Since LLMs lack contextual privacy awareness, unnecessary sensitive information may be exposed or leaked during task execution.
- **Qiao et al.** demonstrated that AI agents can combine fragmented non-sensitive data collected from multiple tools to infer or synthesize sensitive information that would otherwise remain hidden. The study further showed that stronger reasoning capabilities in advanced models can unintentionally increase privacy leakage risks.
- **AgentLeak** revealed that traditional output-based monitoring systems fail to detect many privacy leaks occurring within intermediate tool-call processes. Approximately 41.7% of such leakages were not captured by existing security mechanisms.
Based on these findings, the paper argues that data leakage in Agentic AI environments originates not only from external attacks but also from structural flaws in how agents and tools exchange excessive information.<br>

## 3. Core Findings

This paper classifies MCP data retrieval tools into two categories:<br>
- **Broad Read**: Returns all attributes related to an object in a single request.
- **Atomic Read**: Returns only the minimum amount of data necessary for a specific purpose.
<br>
We identify Broad Read architectures as the primary source of over-collection risks. Because these tools expose unnecessary fields to the LLM, the model may either leak sensitive information directly or infer hidden information through unintended reasoning.<br>

We have analyzed **seven widely used MCP servers**, including Github, Stripe, HubSpot, PostgreSQL, Supabase, and Notion MCP servers. Their investigation
## Related Publishment

- [Download / View PDF](/assets/pdfs/CISC'S_에이전틱_AI_환경에서의_데이터_과다_수집_위협_분석.pdf)
- ![[CISC'S_에이전틱_AI_환경에서의_데이터_과다_수집_위협_분석.pdf]]

## Notes

- _Add your introductory content here._
