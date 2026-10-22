---
title: Efficient On-Device Agents via Adaptive Context Management
title_zh: 通过自适应上下文管理实现高效端侧智能体
authors: "Sanidhya Vijayvargiya, Rahul Lokesh"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=TPXVdBjrvU"
tags: ["query:agent-memory"]
score: 8.0
evidence: 动态记忆系统将对话历史压缩为结构化上下文状态
tldr: 端侧AI智能体受限于有限内存与上下文窗口，难以兼顾丰富的有状态交互与设备可行性。论文提出上下文高效框架，包含用专用LoRA适配器将对话历史蒸馏为压缩结构化上下文状态对象的动态记忆系统，以及极简工具模式序列化与即时传递机制。该方案在有限内存下维持了丰富的对话式记忆与工具能力，提升了端侧智能体的实用性。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 端侧智能体受内存与上下文窗口限制，难以兼顾有状态交互与设备可行性。
method: 提出含动态记忆系统、极简工具序列化与即时传递的上下文高效框架。
result: 该方法在有限内存下维持了对话式记忆与工具能力，提升端侧可行性。
conclusion: 为资源受限设备上的对话式智能体记忆管理提供了高效方案。
---

## Abstract
On-device AI agents offer the potential for personalized, low-latency assistance, but their deployment is fundamentally constrained by limited memory capacity, which restricts usable context. This reduced practical context window creates a trade-off between supporting rich, stateful interactions with complex tool capabilities and maintaining on-device feasibility. We break this trade-off with a framework for context-efficient on-device agents, driven by three synergistic optimizations (1) a dynamic memory system using specialized LoRA adapters to distill conversational history into a compressed, and structured Context State Object; (2) a minimalist serialization format for tool schemas to minimize token overhead per tool; and (3) a just-in-time schema-passing mechanism that loads full tool definitions only upon tool selection. We realize this framework by adapting a 3B parameter SLM to context-efficient trajectories and rigorously evaluate it against a conventional baseline on complex user tasks. Our agent matches, or exceeds, the performance of a conventional baseline while dramatically compressing context, achieving more than a 6-fold reduction in initial system prompt context and a 10- to 25-fold reduction in context growth rate based on the interaction verbosity, demonstrating that strategic context management is key to unlocking capable and persistent on-device AI.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
动态记忆系统将对话历史压缩为结构化上下文状态。

### 2. 核心内容
端侧AI智能体受限于有限内存与上下文窗口，难以兼顾丰富的有状态交互与设备可行性。论文提出上下文高效框架，包含用专用LoRA适配器将对话历史蒸馏为压缩结构化上下文状态对象的动态记忆系统，以及极简工具模式序列化与即时传递机制。该方案在有限内存下维持了丰富的对话式记忆与工具能力，提升了端侧智能体的实用性。

### 3. 对应检索需求
conversational memory for dialogue agents。

### 4. 来源与原文
- Source：ICLR-2026-Public
- OpenReview：[https://openreview.net/forum?id=TPXVdBjrvU](https://openreview.net/forum?id=TPXVdBjrvU)
