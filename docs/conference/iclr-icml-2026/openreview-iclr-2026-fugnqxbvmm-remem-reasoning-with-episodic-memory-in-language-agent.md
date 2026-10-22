---
title: "REMem: Reasoning with Episodic Memory in Language Agent"
title_zh: REMem：语言智能体中的情景记忆推理
authors: "Yiheng Shu, Saisri Padmaja Jonnalagedda, Xiang Gao, Bernal Jiménez Gutiérrez, Weijian Qi, Kamalika Das, Huan Sun, Yu Su"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=fugnQxbvMm"
tags: ["query:agent-memory"]
score: 10.0
evidence: 面向语言智能体的情景记忆构建与推理
tldr: 语言智能体的记忆目前多为语义记忆，难以像人类一样回忆并推理具体经历事件。本文识别并形式化情景回忆与推理的核心挑战，提出REMem两阶段框架：离线将经历转换为混合记忆图，再在此基础上进行推理。实验表明该方法改善了智能体对交互历史的事件级回忆与推理，为智能体情景记忆机制提供了新范式。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 语言智能体记忆多为语义性，缺乏对交互历史的情景回忆与推理能力。
method: 提出REMem两阶段框架，离线将经历构建为混合记忆图并据此推理。
result: 实验显示其提升了智能体对交互历史的事件级回忆与复杂推理表现。
conclusion: 将情景记忆引入语言智能体，为记忆机制设计提供了新的记忆类型与框架。
---

## Abstract
Humans excel at remembering concrete experiences along spatiotemporal contexts and performing reasoning across those events, i.e., the capacity for episodic memory. In contrast, memory in language agents remains mainly semantic, and current agents are not yet capable of effectively recollecting and reasoning over interaction histories. We identify and formalize the core challenges of episodic recollection and reasoning from this gap, and observe that existing work often overlooks episodicity, lacks explicit event modeling, or overemphasizes simple retrieval rather than complex reasoning. We present REMem, a two-phase framework for constructing and reasoning with episodic memory: 1) Offline indexing, where REMem converts experiences into a hybrid memory graph that flexibly links time-aware gists and facts. 2) Online inference, where REMem employs an agentic retriever with carefully curated tools for iterative retrieval over the memory graph. Comprehensive evaluation across four episodic memory benchmarks shows that REMem substantially outperforms state-of-the-art memory systems such as Mem0 and HippoRAG 2, showing 3.4% and 13.4% absolute improvements on episodic recollection and reasoning tasks, respectively. Moreover, REMem also demonstrates more robust refusal behavior for unanswerable questions.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向语言智能体的情景记忆构建与推理。

### 2. 核心内容
语言智能体的记忆目前多为语义记忆，难以像人类一样回忆并推理具体经历事件。本文识别并形式化情景回忆与推理的核心挑战，提出REMem两阶段框架：离线将经历转换为混合记忆图，再在此基础上进行推理。实验表明该方法改善了智能体对交互历史的事件级回忆与推理，为智能体情景记忆机制提供了新范式。

### 3. 对应检索需求
memory mechanisms and memory systems for autonomous agents。

### 4. 来源与原文
- Source：ICLR-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=fugnQxbvMm](https://openreview.net/forum?id=fugnQxbvMm)
