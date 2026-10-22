---
title: Dynamic Parametric Retrieval Augmented Generation
title_zh: 动态参数化检索增强生成
authors: "Yuqiao Tan, Shizhu He, Huanxuan Liao, Tian Liang, Jun Zhao, Kang Liu"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=TWMiVfRwSF"
tags: ["query:rag-papers"]
score: 9.0
evidence: 将文档嵌入模型参数的参数化RAG
tldr: 标准RAG通过注入外部文档增强大模型，但显著增加推理成本并因缺乏参数知识而引入知识冲突；现有参数化RAG需预先转换全部文档，训练与存储成本高且难泛化到未见文档。作者提出动态参数化RAG框架DyPRAG，动态地将文档映射为参数。实验表明其能降低推理成本与知识冲突并具备更好泛化性。该工作为高效低冲突的检索增强提供了新范式。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 标准RAG推理成本高且存在知识冲突，静态参数化RAG训练存储成本高、泛化差。
method: 提出动态参数化RAG框架DyPRAG，动态将检索文档嵌入模型参数。
result: 实验表明其能降低推理成本与知识冲突并提升对未见文档的泛化。
conclusion: 为高效且低冲突的检索增强生成提供了新范式。
---

## Abstract
Retrieval-augmented generation (RAG) enhances large language models (LLMs) by injecting externally retrieved documents into the input context. It significantly increases inference costs and introduces knowledge conflicts, primarily caused by the lack of corresponding parametric knowledge in LLMs. Recently, Parametric RAG (PRAG) proposed to overcome these limitations by embedding symbolic documents into LLMs parameters, effectively reducing the inference costs and conflicts through offline training. However, PRAG needs to convert all documents into parameters in advance, which incurs high training and storage costs and renders it difficult to generalize to unseen documents. To address these challenges, we propose Dynamic Parametric RAG (DyPRAG), a novel framework that leverages a lightweight parameter translator model to efficiently convert symbolic documents into parametric knowledge online. Specifically, the parameter translator employs several linear layers to convert document embeddings into LoRA modules of feed-forward networks of LLMs directly. DyPRAG achieves test-time parametric knowledge enhancement by dynamically generating the requisite parameters, which not only reduces the inference cost and mitigates knowledge conflicts inherent in RAG, but also lowers the training and storage overhead of PRAG. Extensive experiments on multiple datasets demonstrate the effectiveness and generalization capabilities of DyPRAG. Furthermore, the combination of contextual knowledge with test-time generated parametric knowledge offers a practical and more powerful RAG paradigm which updates parametric knowledge adaptively, enables superior knowledge fusion and alleviates knowledge conflicts in real-world applications. Our code is available at https://anonymous.4open.science/r/DyPRAG_ICLR.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
将文档嵌入模型参数的参数化RAG。

### 2. 核心内容
标准RAG通过注入外部文档增强大模型，但显著增加推理成本并因缺乏参数知识而引入知识冲突；现有参数化RAG需预先转换全部文档，训练与存储成本高且难泛化到未见文档。作者提出动态参数化RAG框架DyPRAG，动态地将文档映射为参数。实验表明其能降低推理成本与知识冲突并具备更好泛化性。该工作为高效低冲突的检索增强提供了新范式。

### 3. 对应检索需求
research papers on retrieval-augmented generation for large language models。

### 4. 来源与原文
- Source：ICLR-2026-Public
- OpenReview：[https://openreview.net/forum?id=TWMiVfRwSF](https://openreview.net/forum?id=TWMiVfRwSF)
