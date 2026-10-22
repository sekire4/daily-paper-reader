---
title: Predictive Prefetching for Retrieval-Augmented Generation
title_zh: 面向检索增强生成的预测式预取
authors: "Wuyang Zhang, Shichao Pei"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf/217561cfa66910399ceba4aa9c26940805fbb858.pdf"
tags: ["query:rag-papers"]
score: 8.0
evidence: 面向RAG流程的异步预测式预取策略
tldr: 检索增强生成因同步检索而延迟显著，现有异步方案依赖启发式协调并假设解码过程中信息需求稳定，在复杂多领域场景下常失效。作者提出一种先进的异步检索框架，通过检索预测器、上下文监控器与查询生成器三部分，显式预测何时触发检索以及应检索何种信息，实现与信息需求演化对齐的预测式预取。该策略在降低延迟的同时保持事实性，为RAG流水线优化提供了可复用方法。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 同步检索导致RAG延迟高，启发式异步方法假设信息需求稳定而难以适用。
method: 用检索预测器、上下文监控器与查询生成器实现对齐信息需求的预测式预取。
result: 该框架在复杂多领域场景下有效降低检索延迟并维持生成的事实性。
conclusion: 预测式异步检索是提升RAG流水线效率与实用性的有效策略。
---

## Abstract
Retrieval-Augmented Generation (RAG) improves factual grounding in large language models but suffers from substantial latency due to synchronous retrieval. While recent work explores asynchronous retrieval, existing approaches rely on heuristic coordination between retrieval and generation and assume stable information demands during decoding that often break in complex, multi-domain settings. In this paper, we propose an advanced asynchronous retrieval framework that enables predictive prefetching aligned with evolving information needs. The framework explicitly predicts when retrieval should be triggered and what information should be retrieved using three components, a retrieval predictor, a context monitor, and a query generator, by exploiting semantic precursors in generation dynamics that emerge several tokens before uncertainty becomes critical. Experiments on multiple benchmarks demonstrate up to 43.5% end-to-end latency reduction and 62.4% improvement in time-to-first-token, while maintaining answer quality comparable to synchronous RAG baselines.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向RAG流程的异步预测式预取策略。

### 2. 核心内容
检索增强生成因同步检索而延迟显著，现有异步方案依赖启发式协调并假设解码过程中信息需求稳定，在复杂多领域场景下常失效。作者提出一种先进的异步检索框架，通过检索预测器、上下文监控器与查询生成器三部分，显式预测何时触发检索以及应检索何种信息，实现与信息需求演化对齐的预测式预取。该策略在降低延迟的同时保持事实性，为RAG流水线优化提供了可复用方法。

### 3. 对应检索需求
retrieval augmentation strategies for language model pipelines。

### 4. 来源与原文
- Source：ICML-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=5a321ueqgs](https://openreview.net/forum?id=5a321ueqgs)
