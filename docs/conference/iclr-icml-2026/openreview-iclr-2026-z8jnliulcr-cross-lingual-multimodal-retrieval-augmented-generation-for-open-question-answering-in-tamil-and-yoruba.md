---
title: Cross-Lingual Multimodal Retrieval-Augmented Generation for Open Question Answering in Tamil and Yoruba
title_zh: 面向泰米尔语和约鲁巴语开放问答的跨语言多模态检索增强生成
authors: "Kiran Raja, Mobareji Abejide, Arya Ram, Utkarsh Sharma, Michael Saxon, Kevin Zhu, Sunishchal Dev"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=Z8JNliulCr"
tags: ["query:rag-papers"]
score: 8.0
evidence: 评估低资源语言跨语言多模态检索的基准与RAG流程
tldr: 大语言模型结合检索增强生成在多模态知识库问答中日益流行，但其向低资源语言的迁移尚未得到充分研究。作者构建了LR-MMQA基准，通过翻译、人工校验与文化对齐改写评估跨语言多模态检索与推理，并提出XM-RAG跨语言多模态RAG流程，达到38.1的答案准确率。该工作为RAG系统的评估与低资源迁移提供了基准。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: RAG在多模态知识库问答中兴起，但其向低资源语言的迁移缺乏评估。
method: 构建LR-MMQA跨语言多模态基准并提出XM-RAG检索增强流程。
result: XM-RAG在低资源语言问答上达到38.1的答案准确率。
conclusion: 为RAG系统的跨语言评估与低资源适配提供了基准与方案。
---

## Abstract
As large language models (LLMs) with retrieval augmented generation (RAG) gain traction in multimodal knowledge base question answering (KBQA), concerns about their transfer to low resource languages (LRLs) remain unaddressed. We introduce LR-MMQA, a benchmark evaluating multimodal cross lingual retrieval and reasoning in LRLs. Using the hardest examples from WebQA and MultimodalQA, we build a high quality LRL benchmark through LLM assisted translation, human validation, and culturally aligned rewriting that reflects native speaker phrasing (i.e. what a native speaker would naturally ask) while preserving answerability. We also present XM-RAG, a cross lingual multimodal RAG pipeline for LRLs that reaches 38.1 answer accuracy, more than 7.8 points above the next best baseline. LR-MMQA exposes major performance gaps and failure modes in current systems. Notably, all baselines perform far below top English results (WebQA 64.4 and MultimodalQA 73.48), showing that existing methods still struggle with complex tasks in LRL settings. By releasing LR-MMQA and XM-RAG, we offer a resource to evaluate and address these gaps and guide progress toward equitable multimodal KBQA.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
评估低资源语言跨语言多模态检索的基准与RAG流程。

### 2. 核心内容
大语言模型结合检索增强生成在多模态知识库问答中日益流行，但其向低资源语言的迁移尚未得到充分研究。作者构建了LR-MMQA基准，通过翻译、人工校验与文化对齐改写评估跨语言多模态检索与推理，并提出XM-RAG跨语言多模态RAG流程，达到38.1的答案准确率。该工作为RAG系统的评估与低资源迁移提供了基准。

### 3. 对应检索需求
Locate academic papers that evaluate retrieval augmented generation systems.

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=Z8JNliulCr](https://openreview.net/forum?id=Z8JNliulCr)
