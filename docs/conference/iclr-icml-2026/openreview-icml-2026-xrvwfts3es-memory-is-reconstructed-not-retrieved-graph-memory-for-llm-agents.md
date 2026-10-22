---
title: "Memory is Reconstructed, Not Retrieved:  Graph Memory for LLM Agents"
title_zh: 记忆是被重构而非检索：面向LLM智能体的图记忆
authors: "Shuo Ji, Yibo Li, Bryan Hooi"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf/287ef26120ae98620ee1b2cc5a8a704b47fceafa.pdf"
tags: ["query:agent-memory"]
score: 9.0
evidence: 面向LLM智能体的图结构记忆与主动重构检索
tldr: LLM智能体在长交互历史推理上仍显不足，现有记忆增强方法依赖静态的先检索后推理流程，无法根据推理中发现的中间证据动态调整记忆访问。作者提出MRAgent，将记忆组织为线索—标签—内容的关联图，并引入主动重构机制，把LLM推理直接嵌入记忆访问过程。该方法使智能体能迭代式探索与重组记忆，提升长历史推理的准确性，重新定义了智能体记忆的存储与检索方式。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 静态先检索后推理的流程无法依据推理中发现的中间证据动态调整记忆访问。
method: 构建线索—标签—内容关联记忆图，并引入将LLM推理嵌入记忆访问的主动重构机制。
result: 实验表明该方法能迭代探索与重组记忆，显著改善长交互历史下的推理表现。
conclusion: 记忆应被视为可重构结构而非静态检索库，为智能体记忆架构提供新范式。
---

## Abstract
Despite recent progress, LLM agents still struggle with reasoning over long interaction histories. While current memory-augmented agents rely on a static ``retrieve-then-reason'' paradigm, this rigid pipeline design prevents them from dynamically adapting memory access to intermediate evidence discovered during inference. To bridge this gap, we propose MRAgent, a framework that combines an associative memory graph with an active reconstruction mechanism. We represent memory as a Cue–Tag–Content graph, where associative tags serve as semantic bridges connecting fine-grained cues to memory contents. Operating on this structure, our active reconstruction mechanism integrates LLM reasoning directly into memory access, allowing the agent to iteratively explore and prune retrieval paths based on accumulated evidence. This ensures that memory retrieval is dynamically adapted to the  reasoning context while avoiding combinatorial explosion caused by unconstrained expansion. Experiments on the LoCoMo benchmark  and LongMemEval benchmark  demonstrate significant improvements over strong baselines (up to $23\\%$), while substantially reducing retrieval cost, highlighting the effectiveness of active and associative reconstruction for long-horizon memory reasoning.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向LLM智能体的图结构记忆与主动重构检索。

### 2. 核心内容
LLM智能体在长交互历史推理上仍显不足，现有记忆增强方法依赖静态的先检索后推理流程，无法根据推理中发现的中间证据动态调整记忆访问。作者提出MRAgent，将记忆组织为线索—标签—内容的关联图，并引入主动重构机制，把LLM推理直接嵌入记忆访问过程。该方法使智能体能迭代式探索与重组记忆，提升长历史推理的准确性，重新定义了智能体记忆的存储与检索方式。

### 3. 对应检索需求
how agents store retrieve and update long term memory。

### 4. 来源与原文
- Source：ICML-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=xRVWftS3ES](https://openreview.net/forum?id=xRVWftS3ES)
