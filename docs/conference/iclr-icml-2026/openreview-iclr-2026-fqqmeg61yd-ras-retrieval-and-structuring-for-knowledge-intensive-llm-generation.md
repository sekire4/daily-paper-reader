---
title: "RAS: Retrieval-And-Structuring for Knowledge-Intensive LLM Generation"
title_zh: RAS：面向知识密集型大模型生成的检索与结构化
authors: "Pengcheng Jiang, Lang Cao, Ruike Zhu, Minhao Jiang, Yunyi Zhang, Jiaming Shen, Jimeng Sun, Jiawei Han"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=fqqmeg61yd"
tags: ["query:rag-papers"]
score: 8.0
evidence: 面向知识密集型大模型生成的检索与结构化
tldr: 大模型在知识密集型任务上因检索上下文缺乏组织而难以进行多步推理。本文提出Retrieval-And-Structuring框架，通过迭代检索与结构化知识构建，动态生成针对问题的知识图谱。该方法将检索与证据组织交织进行，实验表明其改善了多步推理的鲁棒性与知识接地效果，为RAG的上下文组织提供了新思路。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 检索增强生成所得段落缺乏显式组织，导致多步推理路径脆弱。
method: 提出RAS框架，通过迭代检索与结构化构建问题特定知识图谱。
result: 实验表明结构化检索上下文提升了知识密集型任务的多步推理表现。
conclusion: 将检索与知识结构化结合，为RAG的推理鲁棒性提供了改进方向。
---

## Abstract
Large language models (LLMs) have achieved impressive performance on knowledge-intensive tasks, yet they often struggle with multi-step reasoning due to the unstructured nature of retrieved context. While retrieval-augmented generation (RAG) methods provide external information, the lack of explicit organization among retrieved passages limits their effectiveness, leading to brittle reasoning pathways. Recent interpretability studies highlighting the importance of structured intermediate reasoning further align with this perspective. 
We propose Retrieval-And-Structuring (RAS), a framework that dynamically constructs question-specific knowledge graphs through iterative retrieval and structured knowledge building. RAS interleaves targeted retrieval planning with incremental graph construction, enabling models to assemble and reason over evolving knowledge structures tailored to each query. On seven knowledge-intensive benchmarks, RAS consistently outperforms strong baselines, achieving up to 8.7\% and 7.0\% gains with proprietary and open-source LLMs, respectively. Our results demonstrate that dynamic, question-specific knowledge structuring offers a robust path to improving reasoning accuracy and robustness in language model generation.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向知识密集型大模型生成的检索与结构化。

### 2. 核心内容
大模型在知识密集型任务上因检索上下文缺乏组织而难以进行多步推理。本文提出Retrieval-And-Structuring框架，通过迭代检索与结构化知识构建，动态生成针对问题的知识图谱。该方法将检索与证据组织交织进行，实验表明其改善了多步推理的鲁棒性与知识接地效果，为RAG的上下文组织提供了新思路。

### 3. 对应检索需求
Search for papers on retrieval methods and evidence grounding in language model question answering.

### 4. 来源与原文
- Source：ICLR-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=fqqmeg61yd](https://openreview.net/forum?id=fqqmeg61yd)
