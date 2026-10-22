---
title: "LUMINA: Detecting Hallucinations in RAG System with Context–Knowledge Signals"
title_zh: LUMINA：利用上下文-知识信号检测RAG系统幻觉
authors: "Samuel Yeh, Sharon Li, Tanwi Mallick"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=oJgNNBNEJM"
tags: ["query:rag-papers"]
score: 8.0
evidence: 利用上下文-知识信号检测RAG幻觉
tldr: RAG虽以检索文档为答案提供依据，但在上下文正确充分时仍会幻觉，根源在于外部上下文与内部知识使用失衡。作者提出LUMINA，通过分布距离等上下文-知识信号量化外部上下文的利用程度来检测幻觉。该方法无需大量超参数调优，提升了检测的可泛化性，为RAG可靠性提供保障。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: RAG即使上下文正确充分仍会幻觉，现有检测方法需大量超参数调优。
method: 提出LUMINA，用分布距离等上下文-知识信号量化外部上下文利用以检测幻觉。
result: 该方法无需大量调参即可检测RAG幻觉，具备更好的泛化性。
conclusion: 上下文-知识信号为RAG幻觉检测提供了可泛化的新框架。
---

## Abstract
Retrieval-Augmented Generation (RAG) aims to mitigate hallucinations in large language models (LLMs) by grounding responses in retrieved documents. Yet, RAG-based LLMs still hallucinate even when provided with correct and sufficient context. A growing line of work suggests that this stems from an imbalance between how models use external context and their internal knowledge, and several approaches have attempted to quantify these signals for hallucination detection. However, existing methods require extensive hyperparameter tuning, limiting their generalizability. We propose LUMINA, a novel framework that detects hallucinations in RAG systems through context--knowledge signals: external context utilization is quantified via distributional distance, while internal knowledge utilization is measured by tracking how predicted tokens evolve across transformer layers. We further introduce a framework for statistically validating these measurements. Experiments on common RAG hallucination benchmarks and four open-source LLMs show that LUMINA achieves consistently high AUROC and AUPRC scores, outperforming prior utilization-based methods by up to +13% AUROC on HalluRAG. Moreover, LUMINA remains robust under relaxed assumptions about retrieval quality and model matching, offering both effectiveness and practicality.

LUMINA: https://github.com/deeplearning-wisc/LUMINA

---

## 论文详细总结（自动生成）

### 1. 检索相关性
利用上下文-知识信号检测RAG幻觉。

### 2. 核心内容
RAG虽以检索文档为答案提供依据，但在上下文正确充分时仍会幻觉，根源在于外部上下文与内部知识使用失衡。作者提出LUMINA，通过分布距离等上下文-知识信号量化外部上下文的利用程度来检测幻觉。该方法无需大量超参数调优，提升了检测的可泛化性，为RAG可靠性提供保障。

### 3. 对应检索需求
hallucination mitigation using retrieved external knowledge。

### 4. 来源与原文
- Source：ICLR-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=oJgNNBNEJM](https://openreview.net/forum?id=oJgNNBNEJM)
