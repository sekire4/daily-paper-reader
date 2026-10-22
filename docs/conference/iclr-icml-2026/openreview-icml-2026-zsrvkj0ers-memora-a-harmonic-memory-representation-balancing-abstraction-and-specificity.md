---
title: "Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity"
title_zh: Memora：平衡抽象与具体性的和谐记忆表示
authors: "Menglin Xia, Xuchao Zhang, Shantanu Dixit, Paramaguru Harimurugan, Rujia Wang, Victor Rühle, Robert Sim, Chetan Bansal, Saravan Rajmohan"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf/0cb2d1b1e6a87f8e3c6fa7ef5facd8b3f2346657.pdf"
tags: ["query:agent-memory"]
score: 9.0
evidence: 兼顾抽象与具体、支持智能体记忆存储与检索的记忆表示
tldr: 针对智能体记忆需持续扩展却因抽象化丢失细粒度细节的问题，提出和谐记忆表示Memora。它以主抽象索引具体记忆值并整合相关更新，以线索锚点扩展检索访问并连接相关记忆，并配合检索策略。该方法在扩展记忆规模的同时保留了推理所需的细节。为智能体长期记忆的存储与检索提供了兼顾抽象与具体的结构化方案。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 智能体记忆系统需容纳持续增长的信息并支持高效上下文检索，但抽象化常牺牲具体细节。
method: 提出Memora和谐记忆表示，用主抽象索引具体记忆值并合并更新，用线索锚点扩展检索访问，并配合检索策略。
result: 该方法在扩展记忆规模的同时保留细粒度细节，提升检索与推理效果。
conclusion: 为智能体长期记忆提供了兼顾抽象与具体的结构化表示。
---

## Abstract
Agent memory systems must accommodate continuously growing information while supporting efficient, context-aware retrieval for downstream tasks. Abstraction is essential for scaling agent memory, yet it often comes at the cost of specificity, obscuring the fine-grained details required for effective reasoning. We introduce Memora, a harmonic memory representation that structurally balances abstraction and specificity. Memora organizes information via its *primary abstractions* that index concrete memory values and consolidate related updates into unified memory entries, while *cue anchors* expand retrieval access across diverse aspects of the memory and connect related memories. Building on this structure, we employ a retrieval policy that actively exploits these memory connections to retrieve relevant information beyond direct semantic similarity. Theoretically, we show that standard Retrieval-Augmented Generation (RAG) and Knowledge Graph (KG)-based memory systems emerge as special cases of our framework. Empirically, Memora establishes a new state-of-the-art on the LoCoMo and LongMemEval benchmarks, demonstrating better retrieval relevance and reasoning effectiveness as memory scales.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
兼顾抽象与具体、支持智能体记忆存储与检索的记忆表示。

### 2. 核心内容
针对智能体记忆需持续扩展却因抽象化丢失细粒度细节的问题，提出和谐记忆表示Memora。它以主抽象索引具体记忆值并整合相关更新，以线索锚点扩展检索访问并连接相关记忆，并配合检索策略。该方法在扩展记忆规模的同时保留了推理所需的细节。为智能体长期记忆的存储与检索提供了兼顾抽象与具体的结构化方案。

### 3. 对应检索需求
how agents store retrieve and update long term memory。

### 4. 来源与原文
- Source：ICML-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=zSrvkj0ers](https://openreview.net/forum?id=zSrvkj0ers)
