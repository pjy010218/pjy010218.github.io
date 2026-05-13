---
layout: page
title: "CLEAR Project Wiki"
description: "Wiki introduction page for Contextual Leak Evaluation and Redaction (CLEAR)"
---

Welcome to the Wiki page for **CLEAR**. This project focuses on developing a dynamic, layered defense architecture to prevent sensitive data leakage in autonomous Large Language Model (LLM) agent environments.

## Overview

**CLEAR** is a contextual data loss prevention (DLP) system designed for enterprise environments where AI agents autonomously call internal APIs and databases. Unlike traditional DLP solutions that only inspect static inputs or outputs, CLEAR intercepts the agent's thought process by analyzing the relationship between the **User Input (I)**, the **Tool Call (T)**, and the **Returned Data (R)**. By evaluating the semantic alignment of these three points, CLEAR can detect and redact sensitive information—such as Personally Identifiable Information (PII)—even when it is over-collected or synthesized by the agent.

## Features

- **3-Point Contextual Analysis**: Evaluates the consistency between the user's original intent, the agent's generated tool call, and the actual returned data to identify potential leaks.
- **Deterministic Redaction**: Moves beyond probabilistic LLM-based security by using a dedicated "LLM Judge" to generate precise JSON-based filtering instructions (Instruction JSON) for an algorithmic filtering layer.
- **Non-Invasive Architecture**: Implemented as an overlay at the network layer using the Model Context Protocol (MCP), allowing it to be applied to existing agent systems without modifying their internal code.
- **Multi-Layered Filtering**: Combines high-speed pattern matching (MS Presidio) with structured data parsing (JSONPath) and high-performance keyword scanning (Aho-Corasick) to ensure low-latency data protection.
- **Real-time Monitoring & Audit**: Provides a centralized management dashboard for security administrators to monitor tool calls, view blocked threats, and analyze the reasoning behind every security decision.

## Achievements

- **Architecture Design**: Developed a complete system blueprint integrating MCP Gateway, OAM Matrix, LLM Judge, and a dual-route Filtering Layer.
- **Benchmark Evaluation (Ongoing)**: ~~Validated system performance using self-created benchmarks.~~
- **Dataset Creation**: Built a custom dataset of 100 high-quality security scenarios to quantitatively verify defense rates and prevent over-censorship.

**Github Page**<br>

- **Sejong [[capstone-design|Capstone Design]] Artifacts**: [CLEAR Github Repository](https://github.com/sejong-capstone-seirenes)

## Related Publishment

- [LLM의 민감 정보 유출 방지 기술의 동향과 한계](/wiki/LLM의_민감_정보_유출_방지_기술의_동향과_한계/)
- [에이전틱 AI 환경에서의 데이터 과다 수집 위협 분석](/wiki/에이전틱_AI_환경에서의_데이터_과다_수집_위협_분석/)
- [VAT (Virtually Abstracted Tools) 기반의 결정론적 데이터 최소화 기술](/wiki/VAT_기반_데이터_최소화_기술/)

## Notes

- This project is being developed as part of the 2026 Sejong University Information Security [[capstone-design|Capstone Design]] course by Team **Seirenes**.
- Current status: System logic implementation and prototype verification finalized. (2026-05-13)
