---
title: "RARE: Retrieval-Aware Robustness Evaluation for Retrieval-Augmented Generation Systems"
title_zh: RARE：面向检索增强生成系统的检索感知鲁棒性评估
authors: "Yixiao Zeng, Tianyu Cao, Danqing Wang, Xinran Zhao, Zimeng Qiu, Morteza Ziyadi, Tongshuang Wu, Lei Li"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=DBqOInhRkG"
tags: ["query:rag-papers"]
score: 9.0
evidence: 评估RAG系统鲁棒性的基准
tldr: 现有RAG评估很少检验系统在真实噪声、内外上下文冲突和快速变化事实下的表现。作者提出RARE统一框架与大规模基准，利用知识图谱驱动的RARE-Get合成管线自动生成单跳与多跳多层问题集。该基准联合扰动查询与文档并覆盖动态时效语料，系统刻画RAG鲁棒性边界，为可靠评估提供可复用工具。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 现有RAG评估难以检验系统在噪声、上下文冲突和时效事实变化下的鲁棒性。
method: 提出RARE统一框架与大规模基准，并用知识图谱驱动的合成管线自动生成多层问题集。
result: 该基准能对查询和文档扰动进行联合压力测试，暴露RAG系统在动态语料下的脆弱性。
conclusion: RARE为RAG系统的鲁棒性提供了系统化、可扩展的评估手段。
---

## Abstract
Retrieval-Augmented Generation (RAG) enhances recency and factuality in answers. However, existing evaluations rarely test how well these systems cope with real-world noise, conflicting between internal and external retrieved contexts, or fast-changing facts. 
We introduce Retrieval-Aware Robustness Evaluation (RARE), a unified framework and large-scale benchmark that jointly stress-tests query and document perturbations over dynamic, time-sensitive corpora. One of the central features of RARE is a knowledge-graph-driven synthesis pipeline (RARE-Get) that automatically extracts single and multi-hop relations from the customized corpus and generates multi-level question sets without manual intervention. Leveraging this pipeline, we construct a dataset (RARE-Set) spanning 527 expert-level time-sensitive finance, economics, and policy documents and 48295 questions whose distribution evolves as the underlying sources change. To quantify resilience, we formalize retrieval-conditioned robustness metrics (RARE-Met) that capture a model’s ability to remain correct or recover when queries, documents, or real-world retrieval results are systematically altered. Our findings reveal that RAG systems are unexpectedly sensitive to perturbations. Moreover, they consistently demonstrate lower robustness on multi-hop queries compared to single-hop queries across all domains.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
评估RAG系统鲁棒性的基准。

### 2. 核心内容
现有RAG评估很少检验系统在真实噪声、内外上下文冲突和快速变化事实下的表现。作者提出RARE统一框架与大规模基准，利用知识图谱驱动的RARE-Get合成管线自动生成单跳与多跳多层问题集。该基准联合扰动查询与文档并覆盖动态时效语料，系统刻画RAG鲁棒性边界，为可靠评估提供可复用工具。

### 3. 对应检索需求
Locate academic papers that evaluate retrieval augmented generation systems.

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=DBqOInhRkG](https://openreview.net/forum?id=DBqOInhRkG)
