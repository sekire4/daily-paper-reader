---
title: "HiChunk: Evaluating and Enhancing Retrieval-Augmented Generation with Hierarchical Chunking"
title_zh: HiChunk：用分层分块评估并增强检索增强生成
authors: "Wensheng Lu, Keyu Chen, Ruizhi Qiao, Xing Sun"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=yCyv2Ij3bS"
tags: ["query:rag-papers"]
score: 8.0
evidence: 用分层分块基准评估并增强检索增强生成
tldr: 文档分块是检索增强生成的重要环节，但现有基准因证据稀疏而难以评估分块质量。本文提出HiCBench，包含人工标注的多级分块点、合成的证据密集问答对及证据来源；并设计HiChunk分层文档结构化框架与Auto-Merge检索算法。实验表明该基准能有效评估分块并提升RAG效果，为RAG系统评估提供了工具。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: RAG中的文档分块缺乏有效评估工具，现有基准存在证据稀疏问题。
method: 构建HiCBench基准并提出基于微调大模型与Auto-Merge检索的分层分块框架。
result: 实验表明该基准可有效评估分块质量，分层分块显著提升RAG表现。
conclusion: 为检索增强生成的分块评估与优化提供了基准与可复用方法。
---

## Abstract
Retrieval-Augmented Generation (RAG) enhances the response capabilities of language models by integrating external knowledge sources. However, document chunking as an important part of RAG system often lacks effective evaluation tools. This paper first analyzes why existing RAG evaluation benchmarks are inadequate for assessing document chunking quality, specifically due to evidence sparsity. Based on this conclusion, we propose HiCBench, which includes manually annotated multi-level document chunking points, synthesized evidence-dense question answer(QA) pairs, and their corresponding evidence sources. We also propose HiChunk, a hierarchical document structuring framework using fine-tuned LLMs and the Auto-Merge retrieval algorithm to enhance retrieval quality. Experiments demonstrate that HiCBench effectively evaluates the impact of different chunking methods across the entire RAG pipeline. Moreover, HiChunk achieves better chunking quality within reasonable time consumption, thereby enhancing the overall performance of RAG systems.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
用分层分块基准评估并增强检索增强生成。

### 2. 核心内容
文档分块是检索增强生成的重要环节，但现有基准因证据稀疏而难以评估分块质量。本文提出HiCBench，包含人工标注的多级分块点、合成的证据密集问答对及证据来源；并设计HiChunk分层文档结构化框架与Auto-Merge检索算法。实验表明该基准能有效评估分块并提升RAG效果，为RAG系统评估提供了工具。

### 3. 对应检索需求
Locate academic papers that evaluate retrieval augmented generation systems.

### 4. 来源与原文
- Source：ICLR-2026-Public
- OpenReview：[https://openreview.net/forum?id=yCyv2Ij3bS](https://openreview.net/forum?id=yCyv2Ij3bS)
