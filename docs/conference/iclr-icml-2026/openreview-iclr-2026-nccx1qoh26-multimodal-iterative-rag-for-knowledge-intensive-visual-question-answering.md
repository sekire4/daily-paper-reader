---
title: Multimodal Iterative RAG for Knowledge-Intensive Visual Question Answering
title_zh: 面向知识密集型视觉问答的多模态迭代RAG
authors: "Changin Choi, Wonseok Lee, Jungmin Ko, Wonjong Rhee"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=NCcx1qoh26"
tags: ["query:rag-papers"]
score: 8.0
evidence: 面向知识密集型视觉问答的多模态迭代检索增强生成
tldr: 针对多模态大模型在知识密集型视觉问答上缺乏外部知识、单轮RAG难以收集足够信息的问题，提出多模态迭代RAG框架MI-RAG。它在每轮迭代中利用推理增强检索并融合知识以精化理解。实验表明迭代式检索与知识综合显著提升了知识密集型视觉问答的表现。为多模态检索增强生成提供了有效的迭代方案。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 多模态大模型在需要外部知识的知识密集型视觉问题上仍受限，而单轮RAG难以收集足够知识。
method: 提出多模态迭代RAG框架MI-RAG，利用推理增强检索并融合知识以逐步精化理解。
result: 迭代检索与知识综合提升了知识密集型视觉问答的表现。
conclusion: 为多模态检索增强生成提供了有效的迭代框架。
---

## Abstract
Recent advances in Multimodal Large Language Models~(MLLMs) have significantly enhanced the ability of these models in multimodal understanding and reasoning. However, the performance of MLLMs for knowledge-intensive visual questions, which require external knowledge beyond the visual content of an image, still remains limited. While Retrieval-Augmented Generation (RAG) has become a promising solution to provide models with external knowledge, its conventional single-pass framework often fails to gather sufficient knowledge. To overcome this limitation, we propose MI-RAG, a Multimodal Iterative RAG framework that leverages reasoning to enhance retrieval and incorporates knowledge synthesis to refine its understanding. At each iteration, the model formulates a reasoning-guided multi-query to explore multiple facets of knowledge. Subsequently, these queries drive a joint search across heterogeneous knowledge bases, retrieving diverse knowledge. This retrieved knowledge is then synthesized to enrich the reasoning record, progressively deepening the model's understanding. Experiments on challenging benchmarks, including Encyclopedic VQA, InfoSeek, and OK-VQA, show that MI-RAG significantly improves both retrieval recall and answer accuracy, establishing a scalable approach for compositional reasoning in knowledge-intensive VQA.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向知识密集型视觉问答的多模态迭代检索增强生成。

### 2. 核心内容
针对多模态大模型在知识密集型视觉问答上缺乏外部知识、单轮RAG难以收集足够信息的问题，提出多模态迭代RAG框架MI-RAG。它在每轮迭代中利用推理增强检索并融合知识以精化理解。实验表明迭代式检索与知识综合显著提升了知识密集型视觉问答的表现。为多模态检索增强生成提供了有效的迭代方案。

### 3. 对应检索需求
research papers on retrieval-augmented generation for large language models。

### 4. 来源与原文
- Source：ICLR-2026-Public
- OpenReview：[https://openreview.net/forum?id=NCcx1qoh26](https://openreview.net/forum?id=NCcx1qoh26)
