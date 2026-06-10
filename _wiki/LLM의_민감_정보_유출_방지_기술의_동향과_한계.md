---
layout: page
title: "LLM의 민감 정보 유출 방지 기술의 동향과 한계"
description: "Wiki introduction page for research paper [LLM의 민감 정보 유출 방지 기술의 동향과 한계]"
---

Welcome to the Wiki page for the research paper, **LLM의 민감 정보 유출 방지 기술의 동향과 한계**.

## 1. Overview

This paper examines the current trends and limitations of sensitive information leakage prevention technologies in Large Language Model (LLM) environments. <br>

We focus on the growing security concerns surrounding the enterprise adoption of commercial LLM services such as those developed by OpenAI and Google, particularly regarding the unauthorized exposure of confidential corporate and personal data.<br>

## 2. Background

As commercial LLMs significantly improve productivity and workflow efficiency, many enterprises have adopted AI systems internally. However, repeated incidents involving the leakage of corporate confidential data and employees’ personal information to external LLM vendors have raised serious security concerns. In response, some organizations have restricted or banned the use of commercial AI services and encouraged employees to use locally hosted LLMs instead.<br>

Despite these restrictions, employees continue to use external AI tools because of their superior performance and convenience. This uncontrolled usage pattern is referred to as Shadow AI, where users access external AI services outside organizational oversight. According to the paper, reports such as the Netskope 2025 AI Data Report suggest that Shadow AI incidents are continuously increasing and may be significantly underreported.<br>

## 3. Core Findings

We classify sensitive information leakage into three major categories.<br>

- **Input-side:** Occurs when users provide sensitive information to LLMs themselves.
- **Output-side:** Occurs when AI systems generate responses that contain sensitive information that was previously learned during training or retrieved through RAG systems.
- **Autonomous-side:** Occurs when Agentic AI systems read and write sensitive information from or to external MCP servers.
  <br>
  Also, sensitive information leakage in AI environments is not limited to direct data exposure. Leakage may also occur indirectly through model-generated responses, retrieval responses, or long-term storage of prompts and conversations by external vendors.<br>

## 4. Conclusion

We argue that effective data protection in the AI era must move beyond simple rule-based filtering or organizational restrictions and instead adopt more comprehensive and adaptive security approaches.<br>

## Related Publishment

- [Download / View PDF](/assets/pdfs/KSII'S_LLM의_민감_정보_유출_방지_기술의_동향과_한계.pdf)

## Notes

_This paper is a survey paper on the current trends and limitations of Agentic AI Security research._
