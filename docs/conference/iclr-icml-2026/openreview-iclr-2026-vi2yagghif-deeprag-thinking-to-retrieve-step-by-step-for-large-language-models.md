---
title: "DeepRAG: Thinking to Retrieve Step by Step for Large Language Models"
title_zh: DeepRAG：面向大语言模型的逐步思考式检索
authors: "Xinyan Guan, Jiali Zeng, Fandong Meng, Chunlei Xin, Yaojie Lu, Hongyu Lin, Xianpei Han, Le Sun, Jie Zhou"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=VI2YaggHIF"
tags: ["query:rag-papers"]
score: 9.0
evidence: 将检索增强推理建模为马尔可夫决策过程以实现自适应检索
tldr: 大语言模型受参数知识时效性、准确性与全面性限制，易产生事实性幻觉，而现有检索增强生成存在任务分解低效与冗余检索噪声问题。DeepRAG将检索增强推理建模为马尔可夫决策过程，通过迭代分解查询动态判断是检索外部知识还是依赖参数知识。实验表明该框架实现了合理且自适应的检索，减少噪声并提升回答质量。该工作为推理驱动的检索增强生成提供了可决策的检索策略框架。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: LLM受参数知识时效性与准确性限制易产生幻觉，现有检索增强生成任务分解低效且冗余检索引入噪声。
method: 将检索增强推理解为马尔可夫决策过程，迭代分解查询并动态决定是否检索外部知识。
result: 实验表明该框架实现自适应检索，减少冗余检索噪声并提升回答质量与可靠性。
conclusion: 为推理驱动的检索增强生成提供可决策的检索策略，兼顾外部知识与参数知识。
---

## Abstract
Large Language Models (LLMs) have shown remarkable reasoning capabilities, while their practical applications are limited by severe factual hallucinations due to limitations in the timeliness, accuracy, and comprehensiveness of their parametric knowledge. Meanwhile, enhancing retrieval-augmented generation (RAG) with reasoning remains challenging due to ineffective task decomposition and redundant retrieval, which can introduce noise and degrade response quality. In this paper, we propose DeepRAG, a framework that models retrieval-augmented reasoning as a Markov Decision Process (MDP), enabling reasonable and adaptive retrieval. By iteratively decomposing queries, DeepRAG dynamically determines whether to retrieve external knowledge or rely on parametric reasoning at each step. Experiments show that DeepRAG improves retrieval efficiency and boosts answer accuracy by 25.41%, demonstrating its effectiveness in enhancing retrieval-augmented reasoning.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
将检索增强推理建模为马尔可夫决策过程以实现自适应检索。

### 2. 核心内容
大语言模型受参数知识时效性、准确性与全面性限制，易产生事实性幻觉，而现有检索增强生成存在任务分解低效与冗余检索噪声问题。DeepRAG将检索增强推理建模为马尔可夫决策过程，通过迭代分解查询动态判断是检索外部知识还是依赖参数知识。实验表明该框架实现了合理且自适应的检索，减少噪声并提升回答质量。该工作为推理驱动的检索增强生成提供了可决策的检索策略框架。

### 3. 对应检索需求
retrieval augmentation strategies for language model pipelines。

### 4. 来源与原文
- Source：ICLR-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=VI2YaggHIF](https://openreview.net/forum?id=VI2YaggHIF)
