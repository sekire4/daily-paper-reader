---
title: Dynamic Retrieval AugmentedGeneration Based on The Knowledge-Aware of Large Language Models
title_zh: 基于大模型知识感知的动态检索增强生成
authors: "Yongliang Wu, Kang Wang, Zhiqiang Wang"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=Tz0zLXbdyR"
tags: ["query:rag-papers"]
score: 9.0
evidence: 基于知识感知的动态检索增强生成
tldr: 现有RAG过度依赖模型内部置信度来决定是否检索，加之模型易过自信，导致冗余检索；粗粒度文档直接注入还会引入噪声与语义漂移。论文提出DynaRAG动态知识感知框架，依据知识感知更合理地触发检索并处理注入内容。方法在开放域问答中减少无效检索、提升答案质量，为RAG管线优化提供了新思路。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 现有RAG过度依赖模型置信度判断是否检索，易产生冗余检索，粗粒度文档注入还带来噪声和语义漂移。
method: 提出DynaRAG动态知识感知框架，依据知识感知决定检索时机并对注入内容进行更细粒度处理。
result: 方法减少了冗余检索与噪声干扰，提升了开放域问答的答案质量。
conclusion: 为更高效可靠的检索增强生成管线提供了动态控制方案。
---

## Abstract
Retrieval-augmented generation (RAG) has proven effective in enhancing open-domain question answering by supplementing language models with external knowledge. However, current approaches often rely heavily on the model’s internal confidence scores to decide whether retrieval is necessary. This overreliance, coupled with the tendency of language models to show overconfidence, results in excessive and sometimes redundant retrieval operations. Moreover, conventional RAG workflows commonly incorporate coarse-grained retrieved documents directly into the generation process, introducing noise and semantic drift that can compromise answer quality. To address these limitations, we propose DynaRAG, a dynamic knowledge-aware framework built on a three-stage optimisation strategy. First, a hybrid question-knowledge similarity space and a lightweight threshold prediction network are constructed that learns query-adaptive decision boundaries to control retrieval triggering more precisely. Second, we generate multigranularity semantic variants to perform targeted retrieval and rank documents using a newly introduced knowledge importance scoring mechanism, thus improving the relevance and specificity of the retrieved content. Third, a prompt-guided large language model synthesises the final answer based on the refined input of selected knowledge. Extensive experiments demonstrate that DynaRAG achieves average improvements of approximately 11% in EM and 14% in F1 on six representative QA benchmarks. Evaluated against a diverse suite of retrieval-augmented baselines, DynaRAG consistently improves accuracy and efficiency, underscoring its robustness and adaptability in knowledge-intensive tasks.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
基于知识感知的动态检索增强生成。

### 2. 核心内容
现有RAG过度依赖模型内部置信度来决定是否检索，加之模型易过自信，导致冗余检索；粗粒度文档直接注入还会引入噪声与语义漂移。论文提出DynaRAG动态知识感知框架，依据知识感知更合理地触发检索并处理注入内容。方法在开放域问答中减少无效检索、提升答案质量，为RAG管线优化提供了新思路。

### 3. 对应检索需求
research papers on retrieval-augmented generation for large language models。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=Tz0zLXbdyR](https://openreview.net/forum?id=Tz0zLXbdyR)
