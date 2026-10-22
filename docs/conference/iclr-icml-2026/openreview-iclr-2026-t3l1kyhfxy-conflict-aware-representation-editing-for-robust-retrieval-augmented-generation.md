---
title: Conflict-Aware Representation Editing for Robust Retrieval-Augmented Generation
title_zh: 面向鲁棒检索增强生成的冲突感知表示编辑
authors: "Dahyun Jung, Jaehyung Seo, Heuiseok Lim"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=t3L1KyhFxY"
tags: ["query:rag-papers"]
score: 9.0
evidence: 缓解知识冲突与噪声导致幻觉的鲁棒RAG
tldr: RAG通过外部知识增强大模型回答，但检索知识与模型参数知识冲突及文档噪声会引发幻觉。作者提出冲突感知表示编辑方法CARE，在表示层面进行编辑以生成鲁棒回答。实验表明即使检索包含低相关文档，该方法仍能缓解冲突、降低幻觉输出。该工作为提升RAG在噪声与冲突场景下的可靠性提供了新思路。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 检索知识与参数知识的冲突及文档噪声会导致RAG产生幻觉输出。
method: 提出冲突感知表示编辑CARE，在表示层面编辑以增强对低相关检索文档的鲁棒性。
result: 实验显示即使检索含低相关文档，该方法仍能生成鲁棒回答并缓解冲突。
conclusion: 为噪声与冲突场景下提升RAG可靠性提供了有效方法。
---

## Abstract
Large Language Models (LLMs) may not always provide accurate responses to user queries, owing to the staleness of training data and the presence of noise. To address this, Retrieval-Augmented Generation (RAG) has been widely adopted, enabling LLMs to ground their responses in external knowledge sources. Nonetheless, recent studies show that conflicts between the retrieved external knowledge and the model’s parametric knowledge can lead to hallucinatory outputs, and this problem is exacerbated when the retrieved documents contain noise. In this work, we propose Conflict-Aware Representation Editing (CARE), a method designed to generate robust responses even when the retrieval includes documents with low relevance to the query. CARE aims to produce conflict-resilient responses by editing the internal representations of the model. Assuming that LLMs encode distinguishable internal patterns indicative of knowledge conflicts, we introduce an autoencoder into the model’s internal layers to identify such regions. We then modulate neuron activations accordingly, steering the model to generate responses unaffected by knowledge conflicts. We evaluate CARE across six Question Answering (QA) benchmarks and four LLMs, demonstrating its superior performance over existing methods.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
缓解知识冲突与噪声导致幻觉的鲁棒RAG。

### 2. 核心内容
RAG通过外部知识增强大模型回答，但检索知识与模型参数知识冲突及文档噪声会引发幻觉。作者提出冲突感知表示编辑方法CARE，在表示层面进行编辑以生成鲁棒回答。实验表明即使检索包含低相关文档，该方法仍能缓解冲突、降低幻觉输出。该工作为提升RAG在噪声与冲突场景下的可靠性提供了新思路。

### 3. 对应检索需求
hallucination mitigation using retrieved external knowledge。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=t3L1KyhFxY](https://openreview.net/forum?id=t3L1KyhFxY)
