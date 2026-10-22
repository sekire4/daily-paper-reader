---
title: "LOGOS: Precision Retrieval via Logical Document Graphs for Retrieval-Augmented Generation"
title_zh: LOGOS：面向检索增强生成的逻辑文档图精确检索
authors: "Yulong Wang, Han Weng"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=v217hjzwQE"
tags: ["query:rag-papers"]
score: 9.0
evidence: 基于逻辑文档图的RAG精确检索方法
tldr: RAG系统在处理长文档时，传统检索把文档视为线性页面序列，返回噪声较大的页面级上下文，破坏了跨页的逻辑依赖。论文提出LOGOS，将文档建模为由语义区域节点和逻辑关系边构成的图，实现尊重文档内在逻辑结构的精确检索。该方法显著提升长文档检索与生成质量，为检索增强生成提供了结构感知的检索新范式。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 传统RAG将长文档视为线性页面序列，返回噪声上下文并破坏跨页逻辑依赖。
method: 提出LOGOS，将文档转为语义区域节点与逻辑边的图以实现精确检索。
result: 该方法在长文档上提升了检索精度与生成质量。
conclusion: 为检索增强生成提供了结构感知的精确检索新方法。
---

## Abstract
Retrieval-Augmented Generation (RAG) systems struggle with long documents because conventional retrieval methods provide noisy, page-level context that degrades generation quality. These methods are fundamentally limited by treating documents as a linear sequence of pages, which breaks the crucial logical dependencies—like tables, paragraphs, or references—that span across page boundaries. To overcome this limitation, we propose Precision Retrieval via Logical Document Graphs for Retrieval-Augmented Generation (LOGOS), a new RAG method that achieves precision retrieval by modeling a document's intrinsic logical structure. LOGOS transforms a document into a graph where semantic regions are nodes and logical connections are edges, effectively bridging page breaks. A Graph Neural Network then generates fine-grained, context-aware representations for each node, enabling a more concise and semantically relevant context for the generator. Extensive experiments on the ViDoRe and MMDOCIR benchmarks show that LOGOS sets a new state-of-the-art, significantly outperforming strong baselines by up to 2\%  in average Recall@1.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
基于逻辑文档图的RAG精确检索方法。

### 2. 核心内容
RAG系统在处理长文档时，传统检索把文档视为线性页面序列，返回噪声较大的页面级上下文，破坏了跨页的逻辑依赖。论文提出LOGOS，将文档建模为由语义区域节点和逻辑关系边构成的图，实现尊重文档内在逻辑结构的精确检索。该方法显著提升长文档检索与生成质量，为检索增强生成提供了结构感知的检索新范式。

### 3. 对应检索需求
research papers on retrieval-augmented generation for large language models。

### 4. 来源与原文
- Source：ICLR-2026-Public
- OpenReview：[https://openreview.net/forum?id=v217hjzwQE](https://openreview.net/forum?id=v217hjzwQE)
