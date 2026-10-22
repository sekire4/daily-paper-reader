---
title: Hierarchical Abstract Tree for Cross-Document Retrieval Augmented Generation
title_zh: 面向跨文档检索增强生成的分层抽象树
authors: "Ziwen Zhao, Menglin Yang"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf/7936e231851b48a26fa59cba1bcb86f1bfaef6dc.pdf"
tags: ["query:rag-papers"]
score: 9.0
evidence: 面向跨文档多跳检索增强生成的树状RAG框架
tldr: 现有树状RAG方法在扩展到跨文档多跳问题时面临聚类噪声、结构孤立与抽象过粗三大挑战。论文提出Psi-RAG框架，构建分层抽象树并引入跨文档连接与更细粒度结构，以支持多粒度查询。实验表明该方法在跨文档多跳问答上显著改善检索增强生成质量，为大规模文档库上的RAG提供了更可扩展的索引方案。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 现有树状RAG难以扩展到跨文档多跳问答，存在聚类噪声、结构孤立与抽象过粗问题。
method: 提出Psi-RAG框架，构建带跨文档连接的分层抽象树以支持多粒度检索。
result: 方法在跨文档多跳问答上提升了检索与生成质量。
conclusion: 为大规模文档库上的树状RAG提供了更可扩展的索引结构。
---

## Abstract
Retrieval-augmented generation (RAG) enhances large language models with external knowledge, and tree-based RAG organizes documents into hierarchical indexes to support queries at multiple granularities. However, existing Tree-RAG methods designed for single-document retrieval face critical challenges in scaling to cross-document multi-hop questions: *(1) poor distribution adaptability*, where $k$-means clustering introduces noise due to rigid distribution assumptions; *(2) structural isolation*, as tree indexes lack explicit cross-document connections; and *(3) coarse abstraction*, which obscures fine-grained details. To address these limitations, we propose **$\Psi$-RAG**, a tree-RAG framework with two key components. *First*, a hierarchical abstract tree index built through an iterative "merging and collapse" process that adapts to data distributions without a priori assumption. *Second*, a multi-granular retrieval agent that intelligently interacts with the knowledge base with reorganized queries and an agent-powered hybrid retriever. $\Psi$-RAG supports diverse tasks from token-level question answering to document-level summarization. On cross-document multi-hop QA benchmarks, it outperforms RAPTOR by 25.9\% and HippoRAG 2 by 7.4\% in average F1 score.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向跨文档多跳检索增强生成的树状RAG框架。

### 2. 核心内容
现有树状RAG方法在扩展到跨文档多跳问题时面临聚类噪声、结构孤立与抽象过粗三大挑战。论文提出Psi-RAG框架，构建分层抽象树并引入跨文档连接与更细粒度结构，以支持多粒度查询。实验表明该方法在跨文档多跳问答上显著改善检索增强生成质量，为大规模文档库上的RAG提供了更可扩展的索引方案。

### 3. 对应检索需求
research papers on retrieval-augmented generation for large language models。

### 4. 来源与原文
- Source：ICML-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=3Hea2WFhPW](https://openreview.net/forum?id=3Hea2WFhPW)
