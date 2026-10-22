---
title: "From Retrieval to Translation: Translating Query into Graph-level Clues for Retrieval-Augmented Generation"
title_zh: 从检索到翻译：将查询转化为图级线索的检索增强生成
authors: "Qichuan Liu, Qinggang Zhang, Yuxuan Hu, Chenfeng Zheng, Zerui Chen, Chentao Zhang, Zhihong Zhang"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf/eaadaa7ab9a85e5ab7f9c24edcf6161af35d0339.pdf"
tags: ["query:rag-papers"]
score: 8.0
evidence: 图结构检索增强生成以缓解幻觉
tldr: 针对结构增强型RAG因低质量结构与语义嵌入导致检索中断和语义漂移的问题，本文提出KG-Translator，将用户查询翻译为图级线索而非依赖传统匹配式检索。该方法利用知识图谱结构更准确地定位相关段落，从而为LLM提供更可靠的外部知识支撑。实验表明该范式能提升检索精度并更有效地缓解幻觉，为结构化检索增强生成提供了新的对齐用户意图的思路。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 现有树/图结构增强RAG因结构质量与嵌入不佳，易出现检索中断和累积语义漂移。
method: 提出KG-Translator，将用户查询翻译为图级线索，替代传统基于匹配的段落检索范式。
result: 摘要称该方法能更精准匹配用户意图并有效缓解LLM幻觉。
conclusion: 该工作为结构化知识驱动的检索增强生成提供了翻译式新范式。
---

## Abstract
Retrieval-Augmented Generation (RAG) has recently been enhanced with tree or graph structures to match user intent for precise passage retrieval, which facilitates large language models (LLMs) in effectively mitigating hallucinations by leveraging external knowledge. However, we identify that existing structure-augmented RAG systems are experiencing (i) potential retrieval suspension and (ii) cumulative semantic drift, due to low-quality structures and semantic embeddings that often poorly capture textual details. Motivated by this, we propose a novel paradigm named KG-Translator, which is distinct from traditional matching-based paradigms and instead translates user queries into graph-level clues. Specifically, KG-Translator utilizes lightweight models to conduct named entity recognition (NER) and syntactic parsing on the corpus, constructing a reliable knowledge graph (ParseKG). On top of ParseKG, KG-Translator adopts constrained decoding strategies to faithfully translate clues, traces them to original passages, and employs a lightweight ranking model for precise passage retrieval. Extensive experiments on five datasets demonstrate that KG-Translator significantly outperforms baselines.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
图结构检索增强生成以缓解幻觉。

### 2. 核心内容
针对结构增强型RAG因低质量结构与语义嵌入导致检索中断和语义漂移的问题，本文提出KG-Translator，将用户查询翻译为图级线索而非依赖传统匹配式检索。该方法利用知识图谱结构更准确地定位相关段落，从而为LLM提供更可靠的外部知识支撑。实验表明该范式能提升检索精度并更有效地缓解幻觉，为结构化检索增强生成提供了新的对齐用户意图的思路。

### 3. 对应检索需求
research papers on retrieval-augmented generation for large language models。

### 4. 来源与原文
- Source：ICML-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=AS14E8aMmL](https://openreview.net/forum?id=AS14E8aMmL)
