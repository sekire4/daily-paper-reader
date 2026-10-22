---
title: "Weak-to-Strong GraphRAG: Aligning Weak Retrievers with Large Language Models for Graph-based Retrieval Augmented Generation"
title_zh: 弱到强图RAG：为图检索增强生成对齐弱检索器与大模型
authors: "Deyu Zou, Yongqiang Chen, Mufei Li, Siqi Miao, Chenxi Liu, Bo Han, James Cheng, Pan Li"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=GtjELGHkPB"
tags: ["query:rag-papers"]
score: 9.0
evidence: 图检索增强生成通过知识图谱接地回答并减少幻觉
tldr: 图检索增强生成借助知识图谱为模型回答提供外部知识接地以减少幻觉，但弱检索器会引入虚假信号且检索知识组织混乱。本文提出ReG框架，利用大模型反馈对齐弱检索器并去除虚假信号，从而精化图检索增强生成。实验表明该方法提升了回答的接地性与准确性，有效缓解了幻觉问题。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 图RAG中弱检索器因缺乏真值而产生虚假信号，检索知识组织混乱。
method: 提出ReG，用大模型反馈对齐弱检索器并去除虚假信号以精化图RAG。
result: 实验表明该方法提升了检索知识质量与回答的接地性，减少了幻觉。
conclusion: 为图检索增强生成的检索器与大模型对齐提供了有效方案。
---

## Abstract
Graph-based retrieval-augmented generation (RAG) enables large language models (LLMs) to ground responses with structured external knowledge from up-to-date knowledge graphs (KGs) and reduce hallucinations. However, LLMs often rely on a weak retriever in graph-based RAG: I) Due to the lack of ground truth, the retriever is often trained on weak supervision, which often introduces spurious signals to the LLMs. II) Due to the abstraction of graph data, the retrieved knowledge is often presented in unorganized forms. To mitigate the issue, we present Refined Graph-based RAG (ReG) to align weak retrievers to LLMs for graph-based RAG. Specifically, ReG incorporates LLM feedback to get rid of spurious signals and improve the quality of the supervision. Meanwhile, ReG introduces a structure-aware reorganization module to refactor the retrieval results into logically coherent evidence chains. Experiments on prominent benchmarks demonstrate that ReG significantly and consistently brings improvements across different LLM backbones by up to 10%. The improved supervision quality enables ReG to match the state-of-the-art performance with 5% training data and to transfer to out-of-distribution KGs. Notably, when adopted to reasoning-based LLMs, ReG reduces the reasoning token cost by up to 30% and improves the performance by up to 4%.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
图检索增强生成通过知识图谱接地回答并减少幻觉。

### 2. 核心内容
图检索增强生成借助知识图谱为模型回答提供外部知识接地以减少幻觉，但弱检索器会引入虚假信号且检索知识组织混乱。本文提出ReG框架，利用大模型反馈对齐弱检索器并去除虚假信号，从而精化图检索增强生成。实验表明该方法提升了回答的接地性与准确性，有效缓解了幻觉问题。

### 3. 对应检索需求
hallucination mitigation using retrieved external knowledge。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=GtjELGHkPB](https://openreview.net/forum?id=GtjELGHkPB)
