---
title: "Mnemosyne: An Unsupervised, Human-Inspired Long-Term Memory Architecture for Edge-Based LLMs"
title_zh: Mnemosyne：面向边缘LLM的无监督类人长期记忆架构
authors: "Aneesh Jonelagadda, Christina Hahn, Haoze Zheng, Salvatore Penachio"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=PpvYXkHf1t"
tags: ["query:agent-memory"]
score: 9.0
evidence: 面向对话LLM的类人长期记忆架构，含图存储与概率召回
tldr: 针对现有LLM记忆系统依赖暴力扩展上下文或静态检索、难以适配边缘设备的问题，本文提出Mnemosyne，一种无监督、类人启发的长期记忆架构。该方法采用图结构存储、内容与冗余过滤、记忆提交与剪枝，以及带时间衰减与刷新的概率召回，并从记忆图提取核心摘要刻画用户特征。该工作使边缘端LLM也能实现自然连贯的长程对话记忆，拓展了长期记忆系统的部署场景。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 自然真实对话需要长期记忆，但现有方案依赖暴力上下文扩展或静态检索，难以在边缘设备运行。
method: 提出Mnemosyne，用图结构存储、实质性与冗余过滤、记忆提交剪枝及带时间衰减的概率召回构建长期记忆。
result: 摘要称其可从记忆图高效导出核心摘要以刻画用户人格，并支持边缘端长程对话。
conclusion: 该架构为资源受限设备上的对话智能体长期记忆提供了类人化设计思路。
---

## Abstract
Long-term memory is essential for natural, realistic dialogue. However, current large language model (LLM) memory systems rely on either brute-force context expansion or static retrieval pipelines that fail on edge-constrained devices. We introduce Mnemosyne, an unsupervised, human-inspired long-term memory architecture designed for edge-based LLMs. Our approach uses graph-structured storage, modular substance and redundancy filters, memory committing and pruning mechanisms, and probabilistic recall with temporal decay and refresh processes modeled after human memory. Mnemosyne also introduces a concentrated "core summary" efficiently derived from a fixed-length subset of the memory graph to capture the user's personality and other domain-specific long-term details such as, using healthcare application as an example, post-recovery ambitions and attitude towards care. Unlike existing retrieval-augmented methods, Mnemosyne is designed for use in longitudinal healthcare assistants, where repetitive and semantically similar but temporally distinct conversations are limited by naive retrieval. In experiments with longitudinal healthcare dialogues, Mnemosyne demonstrates the highest win rate of 65.8\% in blind human evaluations of realism and long-term memory capability compared to a baseline RAG win rate of 31.1\%. Mnemosyne also achieves current highest LoCoMo benchmark scores in temporal reasoning and single-hop retrieval compared to other same-backboned techniques. Further, the average overall score of 54.6\% was second highest across all methods, beating commonly used Mem0 and OpenAI baselines among others. This demonstrates that improved factual recall, enhanced temporal reasoning, and much more natural user-facing responses can be feasible with an edge-compatible and easily transferable unsupervised memory architecture.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向对话LLM的类人长期记忆架构，含图存储与概率召回。

### 2. 核心内容
针对现有LLM记忆系统依赖暴力扩展上下文或静态检索、难以适配边缘设备的问题，本文提出Mnemosyne，一种无监督、类人启发的长期记忆架构。该方法采用图结构存储、内容与冗余过滤、记忆提交与剪枝，以及带时间衰减与刷新的概率召回，并从记忆图提取核心摘要刻画用户特征。该工作使边缘端LLM也能实现自然连贯的长程对话记忆，拓展了长期记忆系统的部署场景。

### 3. 对应检索需求
long-term memory storage and retrieval in agent systems。

### 4. 来源与原文
- Source：ICLR-2026-Public
- OpenReview：[https://openreview.net/forum?id=PpvYXkHf1t](https://openreview.net/forum?id=PpvYXkHf1t)
