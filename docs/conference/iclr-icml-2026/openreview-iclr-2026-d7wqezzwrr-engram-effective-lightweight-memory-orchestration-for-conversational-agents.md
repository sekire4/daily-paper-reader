---
title: "ENGRAM: Effective, Lightweight Memory Orchestration for Conversational Agents"
title_zh: ENGRAM：面向对话智能体的高效轻量记忆编排
authors: "Daivik Patel, Shrenik Patel"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=D7WqEZzwRR"
tags: ["query:agent-memory"]
score: 9.0
evidence: 面向对话智能体的轻量记忆系统，将对话组织为情景、语义、程序三类记忆
tldr: 针对对话智能体长期一致性需求与现有记忆系统过于复杂的问题，提出轻量记忆编排系统ENGRAM。它将对话转化为情景、语义、程序三类带规范化模式和嵌入的记忆记录，由单一路由与检索器统一管理并持久化存储。实验表明其在保持简单可复现的同时达到先进性能，能记住历史交互并据此推理。为对话智能体提供了高效可扩展的长期记忆方案。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 面向用户的LLM应用需要长期一致性，但现有记忆系统依赖知识图谱与多阶段检索，复杂且难以复现。
method: 提出轻量记忆系统ENGRAM，用单一路由与检索器将对话组织为情景、语义、程序三类记忆并规范化持久化存储。
result: 该系统在保持轻量可复现的同时取得先进性能，能记住过往交互并依据历史事件推理。
conclusion: 表明通过类型化记忆记录与统一路由检索即可高效实现对话智能体的长期记忆管理。
---

## Abstract
Large language models (LLMs) deployed in user-facing applications require long-horizon consistency: the capacity to remember prior interactions, respect user preferences, and ground reasoning in past events. However, contemporary memory systems often adopt complex architectures such as knowledge graphs, multi-stage retrieval, and operating-system–style schedulers, which introduce engineering complexity and reproducibility challenges. We present ENGRAM, a lightweight state-of-the-art memory system that organizes conversation into three canonical memory types—episodic, semantic, and procedural—through a single router and retriever. Each user turn is converted into typed memory records with normalized schemas and embeddings and persisted in a database. At query time, the system retrieves top-k dense neighbors per type, merges results with simple set operations, and provides relevant evidence as context to the model. ENGRAM attains state-of-the-art results on the LoCoMo benchmark, a realistic multi-session conversational question-answering (QA) suite for long-horizon memory, and exceeds the full-context baseline by 15 absolute points on LongMemEval, an extended-horizon conversational benchmark, while using only ${\approx}\$1% of the tokens. Our results suggest that careful memory typing and straightforward dense retrieval enable effective long-term memory management in language models, challenging the trend toward architectural complexity in this domain.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向对话智能体的轻量记忆系统，将对话组织为情景、语义、程序三类记忆。

### 2. 核心内容
针对对话智能体长期一致性需求与现有记忆系统过于复杂的问题，提出轻量记忆编排系统ENGRAM。它将对话转化为情景、语义、程序三类带规范化模式和嵌入的记忆记录，由单一路由与检索器统一管理并持久化存储。实验表明其在保持简单可复现的同时达到先进性能，能记住历史交互并据此推理。为对话智能体提供了高效可扩展的长期记忆方案。

### 3. 对应检索需求
conversational memory for dialogue agents。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=D7WqEZzwRR](https://openreview.net/forum?id=D7WqEZzwRR)
