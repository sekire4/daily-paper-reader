---
title: "LinearRAG: Linear Graph Retrieval Augmented Generation on Large-scale Corpora"
title_zh: LinearRAG：面向大规模语料的线性图检索增强生成
authors: "Luyao Zhuang, Shengyuan Chen, Yilin Xiao, Huachi Zhou, Yujing Zhang, Hao Chen, Qinggang Zhang, Xiao Huang"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=mCtfkypdm6"
tags: ["query:rag-papers"]
score: 8.0
evidence: 面向大规模语料的线性图RAG
tldr: 传统RAG在信息碎片化的大规模语料上表现不佳，而现有GraphRAG依赖不稳定且昂贵的关系抽取，易产生噪声图并降低检索质量。作者重新审视GraphRAG流程，提出LinearRAG线性图检索方法，以更高效稳健的方式构建图并支持复杂多跳推理。该工作改善了大语料下的检索质量。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 传统RAG难处理碎片化大语料，GraphRAG又依赖不稳定昂贵的关系抽取。
method: 重新审视GraphRAG流程，提出LinearRAG线性图检索方法以高效构建图结构。
result: 该方法减少了噪声图问题，改善大语料下的检索与多跳推理质量。
conclusion: 线性图检索为大规模语料下的GraphRAG提供了更稳健的方案。
---

## Abstract
Retrieval-Augmented Generation (RAG) is widely used to mitigate hallucinations of Large Language Models (LLMs) by leveraging external knowledge. While effective for simple queries, traditional RAG systems struggle with large-scale, unstructured corpora where information is fragmented. Recent advances incorporate knowledge graphs to capture relational structures, enabling more comprehensive retrieval for complex, multi-hop reasoning tasks. However, existing graph-based RAG (GraphRAG) methods rely on unstable and costly relation extraction for graph construction, often producing noisy graphs with incorrect or inconsistent relations that degrade retrieval quality. In this paper, we revisit the pipeline of existing GraphRAG systems and propose Linear Graph-based Retrieval-Augmented Generation (LinearRAG), an efficient framework that enables reliable graph construction and precise passage retrieval. Specifically, LinearRAG constructs a relation-free hierarchical graph, termed Tri-Graph, using only lightweight entity extraction and semantic linking, avoiding unstable relation modeling. This new paradigm of graph construction scales linearly with corpus size and incurs no extra token consumption, providing an economical and reliable indexing of the original passages. For retrieval, LinearRAG adopts a two-stage strategy: (i) relevant entity activation via local semantic bridging, followed by (ii) passage retrieval through global importance aggregation. Extensive experiments on four benchmark datasets demonstrate that LinearRAG significantly outperforms baseline models. Our code and datasets are available at https://github.com/DEEP-PolyU/LinearRAG.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向大规模语料的线性图RAG。

### 2. 核心内容
传统RAG在信息碎片化的大规模语料上表现不佳，而现有GraphRAG依赖不稳定且昂贵的关系抽取，易产生噪声图并降低检索质量。作者重新审视GraphRAG流程，提出LinearRAG线性图检索方法，以更高效稳健的方式构建图并支持复杂多跳推理。该工作改善了大语料下的检索质量。

### 3. 对应检索需求
research papers on retrieval-augmented generation for large language models。

### 4. 来源与原文
- Source：ICLR-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=mCtfkypdm6](https://openreview.net/forum?id=mCtfkypdm6)
