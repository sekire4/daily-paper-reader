---
title: Structured Retrieval-Augmented Generation for Multi-Doc Multi-Entity Question Answering
title_zh: 面向多文档多实体问答的结构化检索增强生成
authors: "Teng Lin, Yizhang Zhu, Zhengxuan Zhang, Yuyu Luo, Nan Tang"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=sMRzFxSg9W"
tags: ["query:rag-papers"]
score: 9.0
evidence: 面向问答的跨文档结构化证据链RAG
tldr: 多文档多实体问答需跨文档连接实体间的隐含逻辑，而现有RAG的向量相似度检索过于粗粒度、易遗漏关键事实，图方法也难以整合分散的关系网络。作者提出结构化检索增强生成框架，构建跨文档证据链并推断实体关系。实验表明该框架能更有效地整合碎片化信息并提升问答表现。该工作为证据链构建与关系推理型RAG提供了新方案。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 多文档多实体问答中，现有RAG粗粒度检索易遗漏关键事实，难以构建跨文档证据链。
method: 提出结构化RAG框架，跨文档构建证据链并推断实体关系以整合碎片信息。
result: 实验表明该框架能更有效整合多文档信息并提升多实体问答效果。
conclusion: 为关系推理与证据链构建型检索增强问答提供了有效方案。
---

## Abstract
Multi-document Multi-entity Question Answering (MDMEQA) fundamentally requires models to track and connect the implicit logic between multiple entities across documents, a task that reveals critical limitations of Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) frameworks: they struggle to construct effective cross-document evidence chains and deduce entity relationships when faced with fragmented information. Although RAG improves answering capabilities through context injection, its coarse-grained retrieval strategy that relies on vector similarity often leads to the omission of critical facts. Meanwhile, graph-based RAG fails to efficiently integrate scattered complex relationship networks in multi-document scenarios, resulting in low efficiency in retrieving and reasoning MDMEQA. We propose Structured Retrieval-Augmented Generation (SRAG): a two-stage framework that first transforms unstructured text into semantically coherent relational tables via a SQL-driven Extraction-Retrieval module, then guides LLMs toward schema-aware relational reasoning over structured representations. This architectural breakthrough offers three key advantages: (1) SQL-powered indexing enables precise fact localization; (2) relational tables naturally support multi-hop entity join operations; (3) the structuring process mitigates the attention diffusion effect of LLMs. To verify the effectiveness of our proposed method, we evaluate SRAG on two multi-document QA benchmarks, MEBench and Loong. The results show that SRAG significantly outperforms the current state-of-the-art long-context LLMs and RAG systems, achieving 27.2% and 27% improvements in accuracy respectively. These results highlight the importance of structured data representation in enhancing complex reasoning and answer precision in multi-document multi-entity  question answering. The source code and data have been made available at https://anonymous.4open.science/r/SRAG-07A7.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向问答的跨文档结构化证据链RAG。

### 2. 核心内容
多文档多实体问答需跨文档连接实体间的隐含逻辑，而现有RAG的向量相似度检索过于粗粒度、易遗漏关键事实，图方法也难以整合分散的关系网络。作者提出结构化检索增强生成框架，构建跨文档证据链并推断实体关系。实验表明该框架能更有效地整合碎片化信息并提升问答表现。该工作为证据链构建与关系推理型RAG提供了新方案。

### 3. 对应检索需求
Search for papers on retrieval methods and evidence grounding in language model question answering.

### 4. 来源与原文
- Source：ICLR-2026-Public
- OpenReview：[https://openreview.net/forum?id=sMRzFxSg9W](https://openreview.net/forum?id=sMRzFxSg9W)
