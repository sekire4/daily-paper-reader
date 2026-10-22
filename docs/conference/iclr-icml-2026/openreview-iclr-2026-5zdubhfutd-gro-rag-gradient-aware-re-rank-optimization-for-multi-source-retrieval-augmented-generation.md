---
title: "GRO-RAG: Gradient-aware Re-rank Optimization for Multi-source Retrieval-Augmented Generation"
title_zh: GRO-RAG：面向多源检索增强生成的梯度感知重排序优化
authors: "Siyuan Chen, Hang Ding, Kangxiaoyu, Jiechao Gao"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=5zdubHFutd"
tags: ["query:rag-papers"]
score: 8.0
evidence: 面向多源RAG流水线的梯度感知重排序
tldr: 现有多源检索增强生成系统往往统一聚合所有来源或静态选择单一来源，且重排序模型忽略了文档对生成目标的实际贡献。作者提出GRO-RAG，一种无需训练的梯度感知重排序框架，通过一次反向传播读取语言模型梯度，估计每篇文档对生成损失的贡献并据此选择Top-k文档。该框架同时兼顾多源语义互补性，为多源RAG的证据筛选提供了更贴合生成目标的选择机制。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 现有RAG系统对多源信息统一聚合或静态选源，且重排序忽视文档对生成目标的真实贡献。
method: 提出无需训练的梯度感知重排序框架，利用一次反向传播的梯度估计各文档对生成损失的贡献并选取Top-k。
result: 方法在多源RAG场景下依据梯度贡献完成文档选择，兼顾语义互补性并提升生成证据的贴合度。
conclusion: 为多源检索增强生成提供了以生成目标为导向、无需额外训练的重排序方案。
---

## Abstract
Retrieval-Augmented Generation (RAG) systems often rely on information retrieved from heterogeneous sources to support generation tasks. However, existing approaches typically either aggregate all sources uniformly or statically select a single source, neglecting semantic complementarity. Moreover, they commonly employ re-ranking models to obtain Top-k documents, without accounting for actual contribution to generation objective.
In this paper, we propose GRO-RAG, a training-free, gradient-aware re-ranking framework for multi-source RAG. 
Our method performs Top-k document selection by reading gradients from the language model, estimating each document’s contribution to the generation loss through a single backward pass. 
This enables re-ranking not by heuristic relevance, but by direct feedback from LLM's generation objective. 
At the source level, we incorporate inter-source redundancy and query relevance to select source combination prior to re-ranking.
Theoretically, we prove that this gradient-based Top-k selection approximates the optimal subset minimizing the generation loss, and aligns with minimizing the leave-one-out loss upper bound.
Experiments across multi-source QA and open-domain generation tasks demonstrate consistent improvements in generation quality, highlighting the importance of generation-aware retrieval selection in multi-source RAG.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向多源RAG流水线的梯度感知重排序。

### 2. 核心内容
现有多源检索增强生成系统往往统一聚合所有来源或静态选择单一来源，且重排序模型忽略了文档对生成目标的实际贡献。作者提出GRO-RAG，一种无需训练的梯度感知重排序框架，通过一次反向传播读取语言模型梯度，估计每篇文档对生成损失的贡献并据此选择Top-k文档。该框架同时兼顾多源语义互补性，为多源RAG的证据筛选提供了更贴合生成目标的选择机制。

### 3. 对应检索需求
retrieval augmentation strategies for language model pipelines。

### 4. 来源与原文
- Source：ICLR-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=5zdubHFutd](https://openreview.net/forum?id=5zdubHFutd)
