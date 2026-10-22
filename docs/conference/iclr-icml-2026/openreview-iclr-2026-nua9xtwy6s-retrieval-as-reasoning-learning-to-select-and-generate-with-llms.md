---
title: "Retrieval as Reasoning: Learning to Select and Generate with LLMs"
title_zh: 检索即推理：让大模型学习选择与生成
authors: "Qiwei Di, Yuhang He, Qi Chen, Quanquan Gu, Peng CHENG, Jing Bai"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=NuA9XtWY6s"
tags: ["query:rag-papers"]
score: 9.0
evidence: 通过文档选择与生成缓解幻觉的RAG框架
tldr: 现有RAG存在检索目标与生成任务错位、拼接大量文档导致位置偏差等问题。作者提出统一框架，让大模型端到端地学习文档选择与答案生成，仿照人类推理组织文档。该方法缓解了无关文档带来的幻觉与长提示压力，提升了RAG生成质量。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 现有RAG检索目标与生成任务错位，且拼接大量文档带来位置偏差与性能下降。
method: 提出统一框架，让大模型端到端学习文档选择与答案生成，仿人类推理组织文档。
result: 该方法减少无关文档引发的幻觉与长提示负担，改善了生成表现。
conclusion: 端到端的选择与生成统一为缓解RAG幻觉提供了新路径。
---

## Abstract
Retrieval-Augmented Generation (RAG) (Lewis et al., 2020) has become a practical solution for addressing hallucination in large language models (LLMs) by conditioning responses on retrieved documents. However, existing RAG systems face two major limitations: (1) retrieval objectives are often misaligned with the downstream generation task, leading to irrelevant documents harmful to the generation; (2) concatenating many retrieved documents into long prompts strains model capacity and introduces positional biases that degrade performance. To overcome these issues, we propose a unified framework where the LLM itself learns to perform document selection and answer generation in an end-to-end manner. Inspired by human reasoning, our model organizes documents via hierarchical semantic IDs and selects relevant content through a self-reflection mechanism composed of query-specific attention and an additional feed-forward MLP layer. This architecture enables the model to promote helpful documents directly during generation, eliminating the need for separate retrievers or rerankers. Through joint training, the model learns to select the most informative 2-3 documents. We conduct experiments to validate the effectiveness of our design.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
通过文档选择与生成缓解幻觉的RAG框架。

### 2. 核心内容
现有RAG存在检索目标与生成任务错位、拼接大量文档导致位置偏差等问题。作者提出统一框架，让大模型端到端地学习文档选择与答案生成，仿照人类推理组织文档。该方法缓解了无关文档带来的幻觉与长提示压力，提升了RAG生成质量。

### 3. 对应检索需求
hallucination mitigation using retrieved external knowledge。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=NuA9XtWY6s](https://openreview.net/forum?id=NuA9XtWY6s)
