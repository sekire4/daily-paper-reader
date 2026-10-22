---
title: "MemOCR: Layout-Aware Visual Memory for Efficient Long-Horizon Reasoning"
title_zh: MemOCR：面向高效长程推理的布局感知视觉记忆
authors: "Yaorui Shi, Shugui Liu, Yu Yang, Wenyu Mao, Yuxin Chen, Qi GU, Hui Su, Xunliang Cai, Xiang Wang, An Zhang"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf/76f14e73cf6aaf2154bb30987aedba5fe345728f.pdf"
tags: ["query:agent-memory"]
score: 8.0
evidence: 基于视觉布局记忆的多模态记忆智能体
tldr: 长程智能体推理需将不断增长的交互历史压缩进有限上下文，而文本序列化记忆的token成本随长度线性上升。论文提出MemOCR多模态记忆智能体，维护结构化富文本记忆并渲染为图像供智能体访问，通过视觉布局自适应分配信息密度。方法在紧张上下文预算下优先保留关键证据并压缩次要细节，提升了长程推理效率。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 文本序列化记忆的token成本随历史长度线性增长，难以在有限上下文内高效支持长程推理。
method: 提出MemOCR多模态记忆智能体，将结构化富文本记忆渲染为图像，按视觉布局自适应分配信息密度。
result: 在紧张上下文预算下，该方法能优先保留关键证据并压缩次要细节，提升长程推理表现。
conclusion: 为智能体记忆压缩与访问提供了视觉布局驱动的新思路。
---

## Abstract
Long-horizon agentic reasoning necessitates effectively compressing growing interaction histories into a limited context window.
Most existing memory systems serialize history as text, where token-level cost is uniform and scales linearly with length, often spending scarce budget on low-value details.
To this end, we introduce **MemOCR**, a multimodal memory agent that improves long-horizon reasoning under tight context budgets by allocating memory space with adaptive information density through visual layout.
Concretely, MemOCR maintains a structured rich-text memory (e.g., headings, highlights) and renders it into an image that the agent consults for memory access, visually prioritizing crucial evidence while aggressively compressing auxiliary details.
To ensure robustness across varying memory budgets, we train MemOCR with reinforcement learning under budget-aware objectives that expose the agent to diverse compression levels.
Across long-context multi-hop and single-hop question-answering benchmarks, MemOCR outperforms strong text-based baselines and achieves more effective context utilization under extreme budgets.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
基于视觉布局记忆的多模态记忆智能体。

### 2. 核心内容
长程智能体推理需将不断增长的交互历史压缩进有限上下文，而文本序列化记忆的token成本随长度线性上升。论文提出MemOCR多模态记忆智能体，维护结构化富文本记忆并渲染为图像供智能体访问，通过视觉布局自适应分配信息密度。方法在紧张上下文预算下优先保留关键证据并压缩次要细节，提升了长程推理效率。

### 3. 对应检索需求
memory architecture designs for intelligent agents。

### 4. 来源与原文
- Source：ICML-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=vv4TMkyfWA](https://openreview.net/forum?id=vv4TMkyfWA)
