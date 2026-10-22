---
title: "MLP Memory: A Retriever-Pretrained Memory for Large Language Models"
title_zh: MLP记忆：面向大语言模型的检索器预训练记忆
authors: "Rubin Wei, Jiaqi Cao, Jiarui Wang, Jushi Kai, Qipeng Guo, Bowen Zhou, Zhouhan Lin"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=1SMdxRtLBp"
tags: ["query:rag-papers"]
score: 8.0
evidence: 以参数化记忆内化检索模式，作为RAG的替代方案
tldr: 现有检索增强生成虽能灵活接入外部知识，却存在推理延迟高、知识融合浅的问题，而参数化微调又易造成灾难性遗忘。作者提出MLP Memory，通过预训练一个轻量MLP来模仿kNN检索器在整个预训练数据上的行为，从而得到一个可微的记忆模块。该方法在无需显式文档访问的情况下内化检索模式，兼顾知识利用效率与通用能力保持，为RAG与参数化记忆的融合提供了新路径。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 非参数化RAG延迟高、融合浅，参数化微调又易灾难性遗忘，需要折中方案。
method: 预训练轻量MLP模仿kNN检索器在全预训练数据上的行为，形成可微记忆模块。
result: 该模块在无需显式文档访问下内化检索模式，提升事实性并降低推理开销。
conclusion: 参数化记忆可作为RAG的高效替代，为知识注入与通用能力的平衡提供思路。
---

## Abstract
Modern approaches to enhancing Large Language Models' factual accuracy and knowledge utilization face a fundamental trade-off: non-parametric retrieval-augmented generation (RAG) provides flexible access to external knowledge but suffers from high inference latency and shallow integration, while parametric fine-tuning methods like LoRA risk catastrophic forgetting and degraded general capabilities. In this work, we propose MLP Memory, a lightweight parametric module that learns to internalize retrieval patterns without explicit document access. By pretraining an MLP to imitate a $k$NN retriever's behavior on the entire pretraining dataset, we create a differentiable memory component that captures the benefits of retrieval-based knowledge access in a fully parametric form. Our architecture integrates this pretrained MLP Memory with Transformer decoders through simple probability interpolation, achieving 12.3\% relative improvement on five question-answering benchmarks and 5.2 points absolute gain across nine general NLP tasks, while reducing hallucinations by up to 10 points on HaluEval. Moreover, MLP Memory delivers 2.5$\times$ faster inference than RAG with superior accuracy. Our findings show that learning retrieval patterns parametrically bridges the gap between efficient inference and effective knowledge access, offering a practical alternative to both RAG and fine-tuning approaches.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
以参数化记忆内化检索模式，作为RAG的替代方案。

### 2. 核心内容
现有检索增强生成虽能灵活接入外部知识，却存在推理延迟高、知识融合浅的问题，而参数化微调又易造成灾难性遗忘。作者提出MLP Memory，通过预训练一个轻量MLP来模仿kNN检索器在整个预训练数据上的行为，从而得到一个可微的记忆模块。该方法在无需显式文档访问的情况下内化检索模式，兼顾知识利用效率与通用能力保持，为RAG与参数化记忆的融合提供了新路径。

### 3. 对应检索需求
research papers on retrieval-augmented generation for large language models。

### 4. 来源与原文
- Source：ICLR-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=1SMdxRtLBp](https://openreview.net/forum?id=1SMdxRtLBp)
