---
title: KVCache-Centric Memory for LLM Agents
title_zh: 面向LLM智能体的KV缓存中心化记忆
authors: "Yuan Zeng, Pengfei Zuo, Min Lyu, Xingkun Yang, Huatao Wu, Yinlong Xu, Zhou Yu"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=YolJOZOGhI"
tags: ["query:agent-memory"]
score: 9.0
evidence: 面向LLM智能体的KV缓存式记忆范式与隐空间检索
tldr: 针对现有纯文本记忆系统检索不稳定且破坏前缀缓存的问题，本文提出MemArt，将对话轮次直接以KV缓存块的形式存储，并在隐空间中通过注意力分数计算来检索相关记忆。方法引入多token聚合检索策略与解耦位置编码，保证检索块被安全一致地复用。该范式在长程工作流中兼顾了记忆准确性与推理效率，为LLM智能体记忆提供了LLM原生格式的新路径。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 长程任务中智能体受上下文窗口限制，纯文本记忆检索不稳且破坏前缀缓存。
method: 提出MemArt，把对话轮次存为可复用KV缓存块，用注意力分数在隐空间检索并配合多token聚合与解耦位置编码。
result: 摘要表明该设计在保持检索准确性的同时避免破坏前缀缓存，提升性能与效率。
conclusion: 工作表明以KV缓存为载体的记忆是LLM智能体记忆系统的一种可行新范式。
---

## Abstract
LLM agents in complex, long-horizon workflows are constrained by the model’s context window. Current plaintext-based memory systems suffer from unstable retrieval accuracy and disrupt prefix caching, harming both performance and efficiency. 
We propose MemArt, a novel memory paradigm that operates directly within the LLM-native format: the key-value (KV) cache. Instead of using plaintext, MemArt stores conversational turns as reusable KV cache blocks and retrieves relevant memories by computing attention scores in latent space. To enable accurate and efficient retrieval, we develop a multi-token aggregation retrieval strategy that uses compressed keys for efficient KV selection and a decoupled position encoding mechanism to ensure retrieved blocks are safely and coherently reused. On the LoCoMo benchmark, MemArt improves accuracy by over 11\% (up to 39.4\%) compared to state-of-the-art plaintext-based memory methods, nearly matching full-context performance. Critically, it achieves this while reducing prefill tokens by over two orders of magnitude (91-135$\times$), representing a significant leap forward for building powerful and efficient long-context agents.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向LLM智能体的KV缓存式记忆范式与隐空间检索。

### 2. 核心内容
针对现有纯文本记忆系统检索不稳定且破坏前缀缓存的问题，本文提出MemArt，将对话轮次直接以KV缓存块的形式存储，并在隐空间中通过注意力分数计算来检索相关记忆。方法引入多token聚合检索策略与解耦位置编码，保证检索块被安全一致地复用。该范式在长程工作流中兼顾了记忆准确性与推理效率，为LLM智能体记忆提供了LLM原生格式的新路径。

### 3. 对应检索需求
memory mechanisms and memory systems for autonomous agents。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=YolJOZOGhI](https://openreview.net/forum?id=YolJOZOGhI)
