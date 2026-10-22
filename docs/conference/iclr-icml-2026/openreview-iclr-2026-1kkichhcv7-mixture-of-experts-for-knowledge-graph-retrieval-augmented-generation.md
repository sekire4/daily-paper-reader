---
title: Mixture-of-Experts for Knowledge Graph Retrieval-Augmented Generation
title_zh: 面向知识图谱检索增强生成的混合专家方法
authors: "Haochen Liu, Guanghui Min, Song Wang, Yada Zhu, Chen Chen, Jundong Li"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=1KkIChhCv7"
tags: ["query:rag-papers"]
score: 9.0
evidence: 基于混合专家的知识图谱检索增强生成
tldr: 大语言模型因训练语料不完整而在事实准确性和多跳推理上表现不足，知识图谱检索增强生成是有前景的方案，但现有方法或依赖大模型导致高开销，或在轻量模型下检索质量差。作者提出MoRA，采用混合专家机制改进知识图谱检索增强生成。该工作在轻量模型与多跳场景下提升了检索与生成质量。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 现有KG-RAG方法依赖大模型成本高，轻量模型多跳检索质量差。
method: 提出MoRA，用混合专家机制改进知识图谱上的检索增强生成流程。
result: 在轻量模型与多跳问答场景下提升了检索质量与事实准确性。
conclusion: 为高效低成本的知识图谱检索增强生成提供了新方案。
---

## Abstract
Large Language Models (LLMs) have demonstrated strong capabilities in open-domain question answering, but often struggle with factual accuracy and multi-hop reasoning due to the incompleteness of the training corpora. A promising solution is Knowledge Graph Retrieval-Augmented Generation (KG-RAG), which supplements LLMs with structured knowledge retrieved from external knowledge graphs (KGs). However, existing KG-RAG methods either rely on large-scale language models (e.g., ChatGPT) to guide the retrieval process, which leads to high computational costs, or suffer from limited retrieval quality when using lightweight language models, particularly under multi-hop scenarios. We propose MoRA (Mixture-of-Experts for Retrieval-Augmented Generation over Knowledge Graphs), a novel KG-RAG framework that enhances hop-wise KG knowledge retrieval through a Mixture-of-Experts (MoE) framework. Each expert is guided by a combination of two types of soft prompts: expert-specific soft prompt encourages specialization in different reasoning perspectives across experts, and contextual soft prompt evolves with each reasoning hop by encoding the query and previously explored KG triplets, enabling the model to preserve consistency and relevance across multi-hop retrieval. This design allows MoRA to perform accurate and robust retrieval using lightweight language models. MoRA achieves superior performance across multiple KG-based Question Answering benchmarks compared to existing retrieval systems, including those that rely on much larger language models, demonstrating its effectiveness under limited computational budgets.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
基于混合专家的知识图谱检索增强生成。

### 2. 核心内容
大语言模型因训练语料不完整而在事实准确性和多跳推理上表现不足，知识图谱检索增强生成是有前景的方案，但现有方法或依赖大模型导致高开销，或在轻量模型下检索质量差。作者提出MoRA，采用混合专家机制改进知识图谱检索增强生成。该工作在轻量模型与多跳场景下提升了检索与生成质量。

### 3. 对应检索需求
research papers on retrieval-augmented generation for large language models。

### 4. 来源与原文
- Source：ICLR-2026-Public
- OpenReview：[https://openreview.net/forum?id=1KkIChhCv7](https://openreview.net/forum?id=1KkIChhCv7)
