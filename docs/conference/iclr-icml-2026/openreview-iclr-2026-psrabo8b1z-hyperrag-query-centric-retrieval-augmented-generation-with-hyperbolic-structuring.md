---
title: "HyperRAG: Query-Centric Retrieval Augmented Generation with Hyperbolic Structuring"
title_zh: HyperRAG：基于双曲结构的查询中心检索增强生成
authors: "Chuang Zhou, Junnan Dong, Yilin Xiao, Shengyuan Chen, Su Dong, di yin, Zhaozhuo Xu, Xiao Huang"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=PSrABo8b1z"
tags: ["query:rag-papers"]
score: 8.0
evidence: 基于双曲结构的查询中心GraphRAG
tldr: 现有GraphRAG多依赖静态、与查询无关的图构建，忽视了检索中关键的推理关系。作者提出HyperRAG，以查询为中心并借助双曲空间结构组织知识，从而更好地建模实体间的推理关联。该方法面向复杂多跳问答改进了检索质量，为知识图谱增强的RAG提供了新思路。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 现有GraphRAG依赖静态且与查询无关的图，忽视检索中的关键推理关系。
method: 提出查询中心的HyperRAG，用双曲结构组织知识图以建模实体间推理关系。
result: 该方法在复杂多跳问答中改善了检索质量与推理表现。
conclusion: 查询中心与双曲结构化提升了知识图谱增强RAG的效果。
---

## Abstract
Retrieval-Augmented Generation (RAG) has demonstrated significant potential in enhancing question answering systems by supplementing large language models (LLMs) with external knowledge. However, existing approaches focus primarily on retrieving isolated factual knowledge entities while neglecting the critical reasoning relationships. To address this limitation, Graph Retrieval-Augmented Generation (GraphRAG) has emerged as an effective solution, which explicitly integrates structured knowledge graphs into LLMs to support complex reasoning tasks. Although diverse corpus retrieval methods have been explored, they typically rely on static, query-agnostic graphs constructed via fixed heuristics. We are thereby motivated to propose a query-centric retrieval framework that adaptively constructs a graph tailored to each query. However, it is challenging to accurately identify these latent relationships from queries to the corpus. Moreover, unifying multiple local-perspective connections into a globally coherent structured corpus introduces additional complexity. To this end, we introduce HyperRAG, a novel framework in the Hyperbolic space that captures both explicit entity-based links and implicit logical connections inferred by the LLM. Our main contributions include: (i) A dual-stage prompting strategy that guides the LLM to identify relevant passages and their implicit relationships based on the query. (ii) A hierarchical graph unification paradigm that models each query-specific graph as a minimal subtree and integrates them into a cohesive graph. (iii) A hyperbolic space embedding approach that effectively preserves the hierarchical structure during graph learning. Extensive experiments have been conducted on three benchmark datasets, where a remarkable improvement on three datasets indicates our superior performance than others.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
基于双曲结构的查询中心GraphRAG。

### 2. 核心内容
现有GraphRAG多依赖静态、与查询无关的图构建，忽视了检索中关键的推理关系。作者提出HyperRAG，以查询为中心并借助双曲空间结构组织知识，从而更好地建模实体间的推理关联。该方法面向复杂多跳问答改进了检索质量，为知识图谱增强的RAG提供了新思路。

### 3. 对应检索需求
research papers on retrieval-augmented generation for large language models。

### 4. 来源与原文
- Source：ICLR-2026-Public
- OpenReview：[https://openreview.net/forum?id=PSrABo8b1z](https://openreview.net/forum?id=PSrABo8b1z)
