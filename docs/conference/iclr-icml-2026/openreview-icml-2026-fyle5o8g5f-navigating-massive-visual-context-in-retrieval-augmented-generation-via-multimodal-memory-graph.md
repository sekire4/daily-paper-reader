---
title: Navigating Massive Visual Context in Retrieval-Augmented Generation via Multimodal Memory Graph
title_zh: 用多模态记忆图驾驭检索增强生成中的海量视觉上下文
authors: "Qiuchen Wang, Shihang Wang, Yu Zeng, Qiang Zhang, Fanrui Zhang, Zhuoning Guo, Bosi Zhang, Wenxuan Huang, Lin Chen, Zehui Chen, Pengjun Xie, Ruixue Ding"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf/15bcadd889fea39eb43c9100ff8bf6e8f045eccf.pdf"
tags: ["query:rag-papers"]
score: 8.0
evidence: 基于结构化记忆图的多模态检索增强推理
tldr: 传统RAG依赖线性交互历史，难以应对信息稀疏但token密集的视觉数据长上下文推理。论文提出VimRAG多模态检索增强推理框架，将推理过程建模为动态有向无环图，结构化组织智能体状态与检索到的多模态证据。基于该结构化记忆，方法提升了跨文本、图像、视频的检索与推理能力，为多模态RAG提供了新范式。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 线性交互历史难以处理信息稀疏却token密集的视觉数据，限制了多模态长上下文推理。
method: 提出VimRAG框架，将推理过程建模为动态有向无环图，结构化组织智能体状态与多模态检索证据。
result: 基于该结构化记忆图，方法在文本、图像、视频的检索增强推理中表现更优。
conclusion: 为多模态检索增强生成提供了结构化记忆驱动的新框架。
---

## Abstract
Effectively retrieving, reasoning, and understanding multimodal information remains a critical challenge for agentic systems. Traditional Retrieval-augmented Generation (RAG) methods rely on linear interaction histories, which struggle to handle long-context tasks, especially those involving information-sparse yet token-heavy visual data in iterative reasoning scenarios. To bridge this gap, we introduce VimRAG, a framework tailored for multimodal Retrieval-augmented Reasoning across text, images, and videos. Inspired by our systematic study, we model the reasoning process as a dynamic directed acyclic graph that structures the agent states and retrieved multimodal evidence. Building upon this structured memory, we introduce a Graph-Modulated Visual Memory Encoding mechanism, with which the significance of memory nodes is evaluated via their topological position, allowing the model to dynamically allocate high-resolution tokens to pivotal evidence while compressing or discarding trivial clues. To implement this paradigm, we propose a Graph-Guided Policy Optimization strategy. This strategy disentangles step-wise validity from trajectory-level rewards by pruning memory nodes associated with redundant actions, thereby facilitating fine-grained credit assignment. Extensive experiments demonstrate that VimRAG consistently achieves state-of-the-art performance on diverse multimodal RAG benchmarks.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
基于结构化记忆图的多模态检索增强推理。

### 2. 核心内容
传统RAG依赖线性交互历史，难以应对信息稀疏但token密集的视觉数据长上下文推理。论文提出VimRAG多模态检索增强推理框架，将推理过程建模为动态有向无环图，结构化组织智能体状态与检索到的多模态证据。基于该结构化记忆，方法提升了跨文本、图像、视频的检索与推理能力，为多模态RAG提供了新范式。

### 3. 对应检索需求
research papers on retrieval-augmented generation for large language models。

### 4. 来源与原文
- Source：ICML-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=fylE5O8g5F](https://openreview.net/forum?id=fylE5O8g5F)
