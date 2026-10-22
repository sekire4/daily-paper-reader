---
title: "SimpleMem: Efficient Lifelong Memory for LLM Agents"
title_zh: SimpleMem：面向LLM智能体的高效终身记忆
authors: "Jiaqi Liu, Yaofeng Su, Peng Xia, Siwei Han, Zeyu Zheng, Cihang Xie, Mingyu Ding, Huaxiu Yao"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf/af171ffc96696a3f1b46bc14d3e93f5a6ea2126c.pdf"
tags: ["query:agent-memory"]
score: 9.0
evidence: 面向LLM智能体的高效终身记忆
tldr: LLM智能体在长期交互中需要管理历史经验，但全量保留上下文冗余大、迭代过滤噪声又耗费token。论文提出SimpleMem记忆框架，基于语义无损压缩设计三阶段流程，将交互蒸馏为多视图索引记忆单元并在线整合。方法在提升信息密度与token利用率的同时支持长期记忆存储与检索，为高效终身记忆提供了新思路。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 长期交互的LLM智能体需要记忆历史经验，但被动扩展上下文冗余严重，迭代过滤又代价高昂。
method: 提出基于语义无损压缩的SimpleMem框架，用语义结构化压缩与在线语义综合三阶段管线构建多视图索引记忆单元。
result: 该方法提升了信息密度与token利用率，在长期记忆中减少冗余并保持有效检索。
conclusion: 为LLM智能体的高效终身记忆存储与检索提供了可扩展方案。
---

## Abstract
To support long-term interaction in complex environments, LLM agents require memory systems that manage historical experiences. Existing approaches either retain full interaction histories via passive context extension, leading to substantial redundancy, or rely on iterative reasoning to filter noise, incurring high token costs. To address this challenge, we introduce SimpleMem, an efficient memory framework based on semantic lossless compression. We propose a three-stage pipeline designed to maximize information density and token utilization: (1) Semantic Structured Compression, which distills unstructured interactions into compact, multi-view indexed memory units; (2) Online Semantic Synthesis, an intra-session process that instantly integrates related context into unified abstract representations to eliminate redundancy; and (3) Intent-Aware Retrieval Planning, which infers search intent to dynamically determine retrieval scope and construct precise context efficiently. Experiments on benchmark datasets show that our method consistently outperforms baseline approaches in accuracy, retrieval efficiency, and inference cost, achieving an average F1 improvement of 26.4% in LoCoMo while reducing inference-time token consumption by up to 30×, demonstrating a superior balance between performance and efficiency. Code is available at https://github.com/aiming-lab/SimpleMem.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向LLM智能体的高效终身记忆。

### 2. 核心内容
LLM智能体在长期交互中需要管理历史经验，但全量保留上下文冗余大、迭代过滤噪声又耗费token。论文提出SimpleMem记忆框架，基于语义无损压缩设计三阶段流程，将交互蒸馏为多视图索引记忆单元并在线整合。方法在提升信息密度与token利用率的同时支持长期记忆存储与检索，为高效终身记忆提供了新思路。

### 3. 对应检索需求
long-term memory storage and retrieval in agent systems。

### 4. 来源与原文
- Source：ICML-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=oBgLvd5YC6](https://openreview.net/forum?id=oBgLvd5YC6)
