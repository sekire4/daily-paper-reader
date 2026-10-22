---
title: "Look Back to Reason Forward: Revisitable Memory for Long-Context LLM Agents"
title_zh: 回溯以推理前行：面向长上下文LLM智能体的可重访记忆
authors: "Yaorui Shi, Yuxin Chen, Siyuan Wang, Sihang Li, Hengxing Cai, Qi GU, Xiang Wang, An Zhang"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=1cymflI2Lh"
tags: ["query:agent-memory"]
score: 9.0
evidence: 可回溯记忆增强智能体，支持从完整记忆历史中选择性检索
tldr: 长上下文问答中，边读边记的记忆方法虽高效，却存在不可逆的单向处理、覆写导致的信息丢失与稀疏强化信号等问题。论文提出ReMemR1，一种带回调增强记忆的记忆增强智能体，允许从完整记忆历史中选择性检索，实现非线性推理与对早期证据的回溯。该设计缓解了信息丢失并强化学习信号，提升了长上下文问答中记忆的存储与检索能力。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 边读边记的记忆方法存在单向处理不可逆、覆写丢失信息与强化信号稀疏的问题。
method: 提出ReMemR1智能体，用回调增强记忆支持对完整记忆历史的选择性检索与回溯。
result: 该方法支持非线性推理与证据重访，缓解信息丢失并改善长上下文问答。
conclusion: 为长上下文智能体的记忆存储与检索提供了可重访的新机制。
---

## Abstract
Large language models face challenges in long-context question answering, where key evidence of a query may be dispersed across millions of tokens.
Existing works equip large language models with a memory corpus that is dynamically updated during a single-pass document scan, also known as the "memorize while reading" methods.
While this approach scales efficiently, it suffers from irreversible forward-only processing, information loss through overwriting, and sparse reinforcement learning signals.
To tackle these challenges, we present ReMemR1, a memory-augmented agent with callback-enhanced memory that allows selective retrieval from the entire memory history and allows non-linear reasoning and revisiting of early evidence.
To further strengthen training, we propose Reinforcement Learning with Multi-Level Rewards (RLMLR), which combines final-answer rewards with dense, step-level signals that guide effective memory use.
Together, these contributions mitigate information degradation, improve supervision, and support multi-hop memory utilizing.
Experiments on long-document QA show significant gains over existing memory-based approaches, which validates ReMemR1 as an effective solution for long-context reasoning agents.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
可回溯记忆增强智能体，支持从完整记忆历史中选择性检索。

### 2. 核心内容
长上下文问答中，边读边记的记忆方法虽高效，却存在不可逆的单向处理、覆写导致的信息丢失与稀疏强化信号等问题。论文提出ReMemR1，一种带回调增强记忆的记忆增强智能体，允许从完整记忆历史中选择性检索，实现非线性推理与对早期证据的回溯。该设计缓解了信息丢失并强化学习信号，提升了长上下文问答中记忆的存储与检索能力。

### 3. 对应检索需求
how agents store retrieve and update long term memory。

### 4. 来源与原文
- Source：ICLR-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=1cymflI2Lh](https://openreview.net/forum?id=1cymflI2Lh)
