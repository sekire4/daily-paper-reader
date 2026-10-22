---
title: Discourse-Aware Retrieval-Augmented Generation via Rhetorical Structure Modeling
title_zh: 通过修辞结构建模的篇章感知检索增强生成
authors: "Dongqi Liu, Hang Ding, Qiming Feng, Jian Li, Xurong Xie, Zhucun Xue, Chengjie Wang, Jiangning Zhang, Yabiao Wang"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=AWv0mlCeUk"
tags: ["query:rag-papers"]
score: 8.0
evidence: 面向分散证据综合的篇章结构感知RAG
tldr: 现有RAG策略通常将检索段落视为扁平无结构文本，使模型难以捕捉结构线索、综合分散证据并跨文档推理。已有结构增强方法又局限于实体图或依存边等浅层表示，无法刻画层级篇章组织。作者提出Discourse-RAG，显式将修辞篇章结构注入检索与生成过程，使模型能够利用层级话语组织整合证据。该框架为知识密集型任务中的检索增强生成提供了结构感知的新路径。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 多数RAG将检索段落视为扁平文本，难以捕捉结构线索与跨文档综合分散证据。
method: 提出Discourse-RAG框架，将层级修辞篇章结构显式注入检索与生成过程。
result: 结构感知机制使模型能利用层级话语组织综合证据并跨文档推理。
conclusion: 为知识密集型RAG提供了超越浅层结构表示的篇章感知方案。
---

## Abstract
Retrieval-Augmented Generation (RAG) has emerged as an important means for enhancing the performance of large language models (LLMs) in knowledge-intensive tasks. However, most existing RAG strategies treat retrieved passages as flat and unstructured text, which prevents the model from capturing structural cues and constrains its ability to synthesize dispersed evidence and to reason across documents. Although a few recent approaches attempt to incorporate structural signals, each remains restricted to shallow representations such as entity graphs or dependency edges and thus fails to capture hierarchical discourse organization. To overcome these limitations, we propose Discourse-RAG, a structure-aware framework that explicitly injects discourse signals into the generation process. Our method constructs intra-chunk rhetorical structure theory (RST) trees to capture local coherence hierarchies and builds inter-chunk rhetorical graphs to model cross-passage discourse flow. These structures are jointly integrated into a planning blueprint that conditions the generation. Experiments on question answering and long-document summarization benchmarks show the efficacy of our approach. Discourse-RAG achieves a new state-of-the-art ROUGE-L score of 42.4 on ASQA dataset and improves LLM Score by 12.79 points over standard RAG on Loong benchmark. These findings underscore the important role of discourse structure in advancing retrieval-augmented generation.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向分散证据综合的篇章结构感知RAG。

### 2. 核心内容
现有RAG策略通常将检索段落视为扁平无结构文本，使模型难以捕捉结构线索、综合分散证据并跨文档推理。已有结构增强方法又局限于实体图或依存边等浅层表示，无法刻画层级篇章组织。作者提出Discourse-RAG，显式将修辞篇章结构注入检索与生成过程，使模型能够利用层级话语组织整合证据。该框架为知识密集型任务中的检索增强生成提供了结构感知的新路径。

### 3. 对应检索需求
retrieval augmentation strategies for language model pipelines。

### 4. 来源与原文
- Source：ICLR-2026-Public
- OpenReview：[https://openreview.net/forum?id=AWv0mlCeUk](https://openreview.net/forum?id=AWv0mlCeUk)
