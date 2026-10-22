---
title: Embedding-Based Context-Aware Reranker
title_zh: 基于嵌入的上下文感知重排序器
authors: "Ye Yuan, Mohammad Amin Shabani, Siqi Liu"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=OBMcxeSK5U"
tags: ["query:rag-papers"]
score: 8.0
evidence: 面向RAG证据聚合的轻量上下文感知重排序
tldr: RAG系统常将长文档切分为短段落以提升检索粒度，但这也使跨段落推理变得困难，例如指代消解、实体消歧与证据聚合。现有强重排序方法虽借助大模型却仍忽视这些问题且推理成本高。作者提出基于嵌入的上下文感知重排序器EBCAR，以轻量方式在重排序阶段整合跨段落上下文信息，从而更有效地聚合分散证据并提升检索增强生成的证据质量。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 文档切段虽提升检索粒度，却带来跨段落指代、实体消歧与证据聚合难题，现有重排序方法忽视这些且成本高。
method: 提出轻量级的基于嵌入的上下文感知重排序框架EBCAR，在重排序中整合跨段落上下文信号。
result: 该框架以较低推理开销缓解跨段落推理问题，改善分散证据的聚合与检索质量。
conclusion: 为RAG提供了一种兼顾效率与上下文理解的重排序方案。
---

## Abstract
Retrieval-Augmented Generation (RAG) systems rely on retrieving  relevant evidence from a corpus to support downstream generation. 
The common practice of splitting a long document into multiple shorter passages enables finer-grained and targeted information retrieval. 
However, it also introduces challenges when a correct retrieval would require inference across passages, such as resolving coreference, disambiguating entities, and aggregating evidence scattered across multiple sources.
Many state-of-the-art (SOTA) reranking methods, despite utilizing powerful large pretrained language models with potentially high inference costs, still neglect the aforementioned challenges.
Therefore, we propose Embedding-Based Context-Aware Reranker (EBCAR), a lightweight reranking framework operating directly on embeddings of retrieved passages with enhanced cross-passage understandings through the structural information of the passages and a hybrid attention mechanism, which captures both high-level interactions across documents and low-level relationships within each document.
We evaluate EBCAR against SOTA rerankers on the ConTEB benchmark, demonstrating its effectiveness for information retrieval requiring cross-passage inference and its advantages in both accuracy and efficiency.
Our source code is available at https://github.com/BorealisAI/EBCAR.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向RAG证据聚合的轻量上下文感知重排序。

### 2. 核心内容
RAG系统常将长文档切分为短段落以提升检索粒度，但这也使跨段落推理变得困难，例如指代消解、实体消歧与证据聚合。现有强重排序方法虽借助大模型却仍忽视这些问题且推理成本高。作者提出基于嵌入的上下文感知重排序器EBCAR，以轻量方式在重排序阶段整合跨段落上下文信息，从而更有效地聚合分散证据并提升检索增强生成的证据质量。

### 3. 对应检索需求
retrieval augmentation strategies for language model pipelines。

### 4. 来源与原文
- Source：ICLR-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=OBMcxeSK5U](https://openreview.net/forum?id=OBMcxeSK5U)
