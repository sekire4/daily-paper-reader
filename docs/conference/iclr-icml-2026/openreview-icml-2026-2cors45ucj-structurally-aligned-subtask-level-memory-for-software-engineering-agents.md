---
title: Structurally Aligned Subtask-Level Memory for Software Engineering Agents
title_zh: 面向软件工程智能体的结构对齐子任务级记忆
authors: "Kangning Shen, Jingyuan Zhang, Chenxi Sun, Wencong Zeng, Yang Yue"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf/3e2e8de22a1fb642ce3897235fef2bb6eef954c0.pdf"
tags: ["query:agent-memory"]
score: 9.0
evidence: 面向LLM智能体的子任务级记忆存储与检索机制
tldr: 现有软件工程智能体的记忆机制以整个问题解决实例为原子单位，存在粒度错配，导致表面描述相似但推理逻辑不同的任务被错误检索。作者提出结构对齐的子任务级记忆方法，使记忆的存储、检索与更新对齐到具体推理阶段。实验表明该方法能更精准地复用历史经验，提升长程任务的求解表现，为智能体记忆的粒度设计提供了新思路。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 现有智能体记忆以实例为原子单位，粒度错配导致检索误导，难以支持长程推理。
method: 提出结构对齐的子任务级记忆，将记忆的存储、检索与更新对齐到具体推理阶段。
result: 实验显示子任务级记忆显著缓解错误检索，提升软件工程智能体的长程任务表现。
conclusion: 记忆粒度应与任务结构对齐，该设计为自主智能体记忆系统提供了可复用范式。
---

## Abstract
Large Language Models (LLMs) have demonstrated significant potential as autonomous software engineering (SWE) agents. Recent work has further explored augmenting these agents with memory mechanisms to support long-horizon reasoning. However, these approaches typically operate at a coarse instance granularity, treating the entire problem-solving episode as the atomic unit of storage and retrieval. We empirically demonstrate that instance-level memory suffers from a fundamental granularity mismatch, resulting in misguided retrieval when tasks with similar surface descriptions require distinct reasoning logic at specific stages. To address this, we propose Structurally Aligned Subtask-Level Memory, a method that aligns memory storage, retrieval, and updating with the agent’s functional decomposition. Extensive experiments on SWE-bench Verified demonstrate that our method consistently outperforms both vanilla agents and strong instance-level memory baselines across diverse backbones, improving mean Pass@1 over the vanilla agent by +4.7 pp on average (e.g., +6.8 pp on Gemini 2.5 Pro). Performance gains grow with more interaction steps, showing that leveraging past experience benefits long-horizon reasoning in complex software engineering tasks.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向LLM智能体的子任务级记忆存储与检索机制。

### 2. 核心内容
现有软件工程智能体的记忆机制以整个问题解决实例为原子单位，存在粒度错配，导致表面描述相似但推理逻辑不同的任务被错误检索。作者提出结构对齐的子任务级记忆方法，使记忆的存储、检索与更新对齐到具体推理阶段。实验表明该方法能更精准地复用历史经验，提升长程任务的求解表现，为智能体记忆的粒度设计提供了新思路。

### 3. 对应检索需求
memory mechanisms and memory systems for autonomous agents。

### 4. 来源与原文
- Source：ICML-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=2CoRS45Ucj](https://openreview.net/forum?id=2CoRS45Ucj)
