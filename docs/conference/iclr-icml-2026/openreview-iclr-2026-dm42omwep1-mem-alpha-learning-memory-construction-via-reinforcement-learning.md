---
title: "MEM-$\\alpha$: LEARNING MEMORY CONSTRUCTION VIA REINFORCEMENT LEARNING"
title_zh: Mem-α：通过强化学习学习记忆构建
authors: "Yu Wang, Ryuichi Takanobu, Zhiqi Liang, Yuzhen Mao, Yuanzhe Hu, Julian McAuley, Xiaojian Wu"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=dm42omwep1"
tags: ["query:agent-memory"]
score: 10.0
evidence: 用强化学习训练智能体决定记忆的存储、结构与更新
tldr: LLM智能体受限于上下文窗口，需依赖外部记忆系统，但现有方法依赖预定义指令与工具来更新记忆，难以判断存什么、如何组织、何时更新，导致记忆构建次优与信息丢失。论文提出Mem-alpha强化学习框架，通过交互与反馈训练智能体有效管理复杂记忆系统，并构建多轮交互数据集。该方法提升了记忆构建质量，为智能体长期记忆的存储与更新提供了可学习方案。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 现有记忆增强智能体依赖预定义指令更新记忆，难以判断存什么与何时更新。
method: 提出Mem-alpha强化学习框架，通过交互反馈训练智能体管理复杂记忆系统。
result: 该方法改善了记忆构建质量，减少信息丢失。
conclusion: 为智能体长期记忆的存储与更新提供了可学习的管理方案。
---

## Abstract
Large language model (LLM) agents are constrained by limited context windows, necessitating external memory systems for long-term information understanding. Current memory-augmented agents typically depend on pre-defined instructions and tools for memory updates. However, language models may lack the ability to determine which information to store, how to structure it, and when to update it—especially as memory systems become more complex. This results in suboptimal memory construction and information loss. To this end, we propose Mem-$\alpha$, a reinforcement learning framework that trains agents to effectively manage complex memory systems through interaction and feedback. We also construct a specialized training dataset spanning diverse multi-turn interaction patterns paired with comprehensive evaluation questions designed to teach effective memory management. During training, agents process sequential information chunks, learn to extract, store, and update the memory system. The reward signal derives from downstream question-answering accuracy over the full interaction history, directly optimizing for memory construction. To illustrate the effectiveness of our training framework, we design a memory architecture comprising core, episodic, and semantic components, equipped with multiple tools for memory operations. Empirical evaluation demonstrates that Mem-$\alpha$ achieves significant improvements over existing memory-augmented agent baselines. Despite being trained exclusively on instances with a maximum length of 30k tokens, our agents exhibit remarkable generalization to sequences exceeding 400k tokens—over 13× the training length, highlighting the robustness of reinforcement learning for memory management. Code and data will be released upon publication.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
用强化学习训练智能体决定记忆的存储、结构与更新。

### 2. 核心内容
LLM智能体受限于上下文窗口，需依赖外部记忆系统，但现有方法依赖预定义指令与工具来更新记忆，难以判断存什么、如何组织、何时更新，导致记忆构建次优与信息丢失。论文提出Mem-alpha强化学习框架，通过交互与反馈训练智能体有效管理复杂记忆系统，并构建多轮交互数据集。该方法提升了记忆构建质量，为智能体长期记忆的存储与更新提供了可学习方案。

### 3. 对应检索需求
how agents store retrieve and update long term memory。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=dm42omwep1](https://openreview.net/forum?id=dm42omwep1)
