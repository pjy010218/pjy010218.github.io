---
layout: page
title: A Self-Synchronizing Cyber Deception Framework via Infrastructure as Code Reflection
description: Wiki introduction page for research paper [A Self-Synchronizing Cyber Deception Framework via Infrastructure as Code Reflection]
---

Welcome to the Wiki page for the research paper, **A Self-Synchronizing Cyber Deception Framework via Infrastructure as Code Reflection**.

## 1. Overview

This paper proposes a self-synchronizing cyber deception framework that automatically generates and maintains high-fidelity honeypot environments using Infrastructure as Code (IaC) reflection techniques. The framework transforms an existing infrastructure definition into a deceptive “look-alike” environment while preserving structural fidelity and removing the original application logic.<br>

The research focuses on solving the operational limitations of conventional honeypots, especially the difficulty of maintaining realistic deception environments in rapidly changing modern infrastructures such as Docker Compose, Kubernetes, and Terraform-based systems.<br>

## 2. Background

Traditional honeypots are difficult to maintain in modern dynamic infrastructures because production environments constantly change through technologies such as Docker Compose, Kubernetes, and Terraform.<br>

Low-interaction honeypots are easily detected, while high-interaction honeypots require large operational costs and manual maintenance. Existing digital twin approaches also often require separate replication systems, increasing complexity.<br>

To solve these limitations, the paper introduces **IaC Reflection**, a method that directly transforms existing IaC files into synchronized deception environments.<br>Traditional honeypots are difficult to maintain in modern dynamic infrastructures because production environments constantly change through technologies such as Docker Compose, Kubernetes, and Terraform.<br>

Low-interaction honeypots are easily detected, while high-interaction honeypots require large operational costs and manual maintenance. Existing digital twin approaches also often require separate replication systems, increasing complexity.<br>

To solve these limitations, the paper introduces **IaC Reflection**, a method that directly transforms existing IaC files into synchronized deception environments.<br>

## 3. Core Findings

The proposed framework consists of automated modules for:

- Parsing IaC files
- Applying deception policies
- Generating honeypot container images
- Deploying deceptive infrastructures
- Automatically synchronizing updates <br>

A key contribution is the **Dynamic Build Strategy**, which:

- Replicates original dependencies, operating systems, versions, and configurations
- Removes the real application logic
- Replaces it with dummy honeypot behavior <br>

As a result, the generated honeypots appear structurally identical to the original services while containing no sensitive functionality or real data.<br>

Experiments showed that:

- The honeypots achieved high structural fidelity
- Automated scanning tools could not easily classify them as honeypots
- Infrastructure changes were automatically synchronized in approximately 26 seconds
- The framework scaled efficiently even with large multi-service infrastructures <br>

## 4. Conclusion

This paper presents a scalable and automated cyber deception framework designed for modern IaC-based infrastructures.<br>

By combining IaC Reflection, dynamic honeypot generation, and automatic synchronization, the framework reduces operational overhead while improving the realism and maintainability of deception environments.<br>

The research demonstrates how cyber deception can become a practical DevSecOps-compatible security strategy for rapidly changing enterprise systems.<br>

## Related Publishment

- [Download / View PDF](/assets/pdfs/A Self-Synchronizing Cyber Deception Framework via Infrastructure as Code Reflection.pdf)

## Notes

_This paper proposes an automated high-fidelity cyber deception framework that continuously synchronizes honeypot environments with real infrastructure using Infrastructure as Code reflection techniques._
