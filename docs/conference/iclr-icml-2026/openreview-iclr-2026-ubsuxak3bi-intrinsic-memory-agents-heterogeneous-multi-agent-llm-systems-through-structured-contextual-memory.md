---
title: "Intrinsic Memory Agents: Heterogeneous Multi-Agent LLM Systems through Structured Contextual Memory"
title_zh: 内在记忆智能体：通过结构化上下文记忆构建异构多智能体大模型系统
authors: "Sizhe Yuen, Francisco Gomez Medina, Ting Su, Yali Du, Adam Sobey"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=UbSUxAK3BI"
tags: ["query:agent-memory"]
score: 9.0
evidence: 面向多智能体大模型系统的结构化上下文记忆
tldr: 基于大模型的多智能体系统受上下文窗口限制，导致记忆一致性、角色遵循与流程完整性受损。本文提出Intrinsic Memory Agents框架，为每个智能体维护随输出内在演化的角色对齐记忆，并使用通用记忆模板免去手工提示。基准实验表明该方法在保持角色特化的同时提升了协作任务表现，为多智能体记忆架构提供了可复用方案。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 多智能体大模型系统受上下文窗口限制，记忆一致性与角色遵循难以维持。
method: 提出内在记忆智能体，用随输出演化的角色对齐记忆和通用记忆模板。
result: 基准测试显示其在保持角色特化的同时提升多智能体协作任务表现。
conclusion: 为多智能体系统提供了一种免手工提示、可迁移的结构化记忆架构。
---

## Abstract
Multi-agent systems built on Large Language Models (LLMs) show exceptional promise for complex collaborative problem-solving, yet they face fundamental challenges stemming from context window limitations that impair memory consistency, role adherence, and procedural integrity. This paper introduces Intrinsic Memory Agents, a novel framework that addresses these limitations through agent-specific memories that evolve intrinsically with agent outputs. Specifically, our method maintains role-aligned memory that preserves specialized perspectives while focusing on task-relevant information. Our approach utilises a generic memory template applicable to new problems without the need to hand-craft specific memory prompts. We benchmark our approach on the PDDL, FEVER, and ALFWorld datasets, comparing its performance to existing state-of-the-art multi-agentic memory approaches and showing state-of-the-art or comparable performance across all three, with the highest consistency. An additional evaluation is performed on a complex data pipeline design task, and we demonstrate that our approach produces higher quality designs across 5 metrics: scalability, reliability, usability, cost-effectiveness, and documentation, plus additional qualitative evidence of the improvements. Our findings suggest that addressing memory limitations through intrinsic approaches can improve the capabilities of multi-agent LLM systems on structured planning tasks.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向多智能体大模型系统的结构化上下文记忆。

### 2. 核心内容
基于大模型的多智能体系统受上下文窗口限制，导致记忆一致性、角色遵循与流程完整性受损。本文提出Intrinsic Memory Agents框架，为每个智能体维护随输出内在演化的角色对齐记忆，并使用通用记忆模板免去手工提示。基准实验表明该方法在保持角色特化的同时提升了协作任务表现，为多智能体记忆架构提供了可复用方案。

### 3. 对应检索需求
memory architectures for conversational agents and multi agent systems。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=UbSUxAK3BI](https://openreview.net/forum?id=UbSUxAK3BI)
