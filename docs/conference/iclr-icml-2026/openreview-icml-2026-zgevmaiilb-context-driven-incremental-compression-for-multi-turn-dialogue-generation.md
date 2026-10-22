---
title: Context-Driven Incremental Compression for Multi-Turn Dialogue Generation
title_zh: 面向多轮对话生成的上下文驱动增量压缩
authors: "Yeongseo Jung, Jaehyeok Kim, Eunseo Jung, Jiachuan Wang, Yongqi Zhang, Ka Chun Cheung, Simon See, Lei Chen"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf/db8782949ed131cee665709b311f40b99d0ee96b.pdf"
tags: ["query:agent-memory"]
score: 8.0
evidence: 通过增量压缩构建对话记忆
tldr: 多轮对话中不断增长的对话历史带来冗余注意力与编码开销，简单截断或摘要又会损失信息。作者提出上下文驱动的增量压缩C-DIC，将对话视为交织的上下文线程，并把可修订的每线程压缩状态存入紧凑的对话记忆。该方法兼顾效率与保真度，缓解长对话中的信息丢失与误差累积。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 多轮对话历史不断增长带来开销，简单截断或摘要会损失信息并累积误差。
method: 提出C-DIC，将对话视为交织线程，把可修订的压缩状态存入紧凑对话记忆。
result: 该方法在提升效率的同时保持对话保真度，减少长对话信息丢失。
conclusion: 可修订的对话记忆压缩为长对话生成提供了高效稳健的方案。
---

## Abstract
Modern conversational agents condition on an ever-growing dialogue history at each turn, incurring redundant attention and encoding costs that grow with conversation length. Naive truncation or summarization degrades fidelity, while existing context compressors lack cross-turn memory sharing or revision, causing information loss and compounding errors in long dialogues. We revisit the context compression under conversational dynamics and empirically present its fragility. To improve both efficiency and robustness, we introduce Context-Driven Incremental Compression (C-DIC), which treats a conversation as interleaved contextual threads and stores revisable per-thread compression states in a single, compact dialogue memory. At each turn, a lightweight retrieve → revise → write-back loop shares information across turns and updates stale memories, stabilizing long-horizon behavior. In addition, we adapt truncated backpropagation-through-time (TBPTT) to our multi-turn setting, learning cross-turn dependencies without full-history backpropagation. Extensive experiments on long-form dialogue benchmarks demonstrate superior performance and efficiency of C-DIC; notably, C-DIC maintains near-constant inference time and stable perplexity even over hundreds of dialogue turns, supporting a scalable path to high-quality dialogue modeling.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
通过增量压缩构建对话记忆。

### 2. 核心内容
多轮对话中不断增长的对话历史带来冗余注意力与编码开销，简单截断或摘要又会损失信息。作者提出上下文驱动的增量压缩C-DIC，将对话视为交织的上下文线程，并把可修订的每线程压缩状态存入紧凑的对话记忆。该方法兼顾效率与保真度，缓解长对话中的信息丢失与误差累积。

### 3. 对应检索需求
conversational memory for dialogue agents。

### 4. 来源与原文
- Source：ICML-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=ZGeVMaiIlb](https://openreview.net/forum?id=ZGeVMaiIlb)
