---
title: Query-Centric Graph Retrieval Augmented Generation
title_zh: 查询中心的图检索增强生成
authors: "Yaxiong Wu, Jianyuan Bo, Yongyue Zhang, Sheng Liang, Yong Liu"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=anCrOOoncq"
tags: ["query:rag-papers"]
score: 8.0
evidence: 面向大语言模型的查询中心图检索增强生成
tldr: 图检索增强生成在粒度选择上存在两难：实体级图token开销大且丢失上下文，文档级图又难以刻画细粒度关系。本文提出QCG-RAG，利用Doc2Query构造查询中心的图索引，并以多跳检索机制选取相关文本块。实验表明该方法在提升图质量与可解释性的同时改善了检索效果，为图RAG的粒度设计提供了新思路。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 现有图检索增强生成在实体级与文档级粒度间难以兼顾token开销与关系刻画。
method: 提出QCG-RAG，用Doc2Query构建查询中心图索引，并设计多跳文本块检索机制。
result: 在LiHuaW等数据集上验证其提升了图质量、可解释性与多跳检索效果。
conclusion: 查询中心的可控粒度图为图检索增强生成提供了更优的组织与检索范式。
---

## Abstract
Graph-based retrieval-augmented generation (RAG) enriches large language models (LLMs) with external knowledge for long-context understanding and multi-hop reasoning, but existing methods face a granularity dilemma: fine-grained entity-level graphs incur high token costs and lose context, while coarse document-level graphs fail to capture nuanced relations. We introduce QCG-RAG, a query-centric graph RAG framework that enables query-granular indexing and multi-hop chunk retrieval. Our query-centric approach leverages Doc2Query and Doc2Query{-}{-} to construct query-centric graphs with controllable granularity, improving graph quality and interpretability. A tailored multi-hop retrieval mechanism then selects relevant chunks via the generated queries. Experiments on LiHuaWorld and MultiHop-RAG show that QCG-RAG consistently outperforms prior chunk-based and graph-based RAG methods in question answering accuracy, establishing a new paradigm for multi-hop reasoning.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向大语言模型的查询中心图检索增强生成。

### 2. 核心内容
图检索增强生成在粒度选择上存在两难：实体级图token开销大且丢失上下文，文档级图又难以刻画细粒度关系。本文提出QCG-RAG，利用Doc2Query构造查询中心的图索引，并以多跳检索机制选取相关文本块。实验表明该方法在提升图质量与可解释性的同时改善了检索效果，为图RAG的粒度设计提供了新思路。

### 3. 对应检索需求
research papers on retrieval-augmented generation for large language models。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=anCrOOoncq](https://openreview.net/forum?id=anCrOOoncq)
