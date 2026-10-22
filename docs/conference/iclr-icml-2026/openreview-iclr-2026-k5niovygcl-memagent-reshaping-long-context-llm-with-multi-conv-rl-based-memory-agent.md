---
title: "MemAgent: Reshaping Long-Context LLM with Multi-Conv RL-based Memory Agent"
title_zh: MemAgent：以多轮强化学习记忆智能体重塑长上下文LLM
authors: "Hongli Yu, Tinghong Chen, Jiangtao Feng, Jiangjie Chen, Weinan Dai, Qiying Yu, Ya-Qin Zhang, Wei-Ying Ma, Jingjing Liu, Mingxuan Wang, Hao Zhou"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=k5nIOvYGCL"
tags: ["query:agent-memory"]
score: 9.0
evidence: 智能体工作流分段处理文本并通过覆写策略更新记忆
tldr: 在长文本处理中，即便有长度外推和高效注意力等手段，面对无限长文档时性能仍会退化。作者提出MemAgent智能体工作流，将文本分段处理并通过覆写策略持续更新记忆，同时扩展DAPO算法以多轮独立上下文生成端到端优化记忆能力。实验显示MemAgent具有出色的长上下文表现，可从较短训练长度外推到更长文档。该工作说明以智能体方式显式管理记忆是突破长上下文瓶颈的有效途径。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 处理超长文档时，长度外推、高效注意力与记忆模块仍难以避免性能退化。
method: 提出MemAgent工作流，分段处理文本并用覆写策略更新记忆，同时扩展DAPO算法端到端优化记忆能力。
result: 实验表明MemAgent具备出色的长上下文能力，可在远超训练长度时保持性能。
conclusion: 以智能体方式管理记忆是突破超长上下文瓶颈的有效途径。
---

## Abstract
Despite improvements by length extrapolation, efficient attention and memory modules, handling infinitely long documents without performance degradation during extrapolation remains the ultimate challenge in long-text processing. To solve this problem, We introduce a novel agent workflow, \method, which processes text in segments and updates memory through an overwrite strategy, addressing the challenge of long-context task through enhanced memory management. We further extend the DAPO algorithm to directly optimize memory ability in an end-to-end fashion, facilitating training via independent-context multi-conversation generation. Experimental results demonstrate that MemAgent has superb long-context capabilities, being able to extrapolate from an 8K context to a 3.5M QA task with a performance loss of less than 10\% and achieving over 95\% on the 512K NIAH test.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
智能体工作流分段处理文本并通过覆写策略更新记忆。

### 2. 核心内容
在长文本处理中，即便有长度外推和高效注意力等手段，面对无限长文档时性能仍会退化。作者提出MemAgent智能体工作流，将文本分段处理并通过覆写策略持续更新记忆，同时扩展DAPO算法以多轮独立上下文生成端到端优化记忆能力。实验显示MemAgent具有出色的长上下文表现，可从较短训练长度外推到更长文档。该工作说明以智能体方式显式管理记忆是突破长上下文瓶颈的有效途径。

### 3. 对应检索需求
how agents store retrieve and update long term memory。

### 4. 来源与原文
- Source：ICLR-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=k5nIOvYGCL](https://openreview.net/forum?id=k5nIOvYGCL)
