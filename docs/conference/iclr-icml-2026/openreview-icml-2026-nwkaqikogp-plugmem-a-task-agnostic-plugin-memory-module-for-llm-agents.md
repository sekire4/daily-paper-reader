---
title: "PlugMem: A Task-Agnostic Plugin Memory Module for LLM Agents"
title_zh: PlugMem：面向LLM智能体的任务无关插件式记忆模块
authors: "Ke Yang, Zixi Chen, Xuan He, Jize Jiang, Michel Galley, Chenglong Wang, Jianfeng Gao, Jiawei Han, ChengXiang Zhai"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf/fa49d3fde622c96b3947888aa3f7e985709d9aba.pdf"
tags: ["query:agent-memory"]
score: 10.0
evidence: 面向LLM智能体的任务无关插件式长期记忆模块
tldr: 现有LLM智能体记忆要么任务专用难以迁移，要么任务无关却因原始经验检索导致上下文爆炸。论文提出PlugMem，一种可即插即用的任务无关记忆模块，借鉴认知科学将情节记忆组织为以知识为中心的紧凑记忆图，显式表示命题性与规范性知识。该方法在提升任务相关性的同时抑制上下文膨胀，使任意LLM智能体都能高效利用长期记忆。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 现有智能体记忆或任务专用不可迁移，或任务无关却因原始检索导致上下文爆炸。
method: 提出即插即用的任务无关记忆模块，将情节记忆结构化为以知识为中心的记忆图。
result: 该方法在提高任务相关性的同时缓解上下文膨胀，便于跨任务迁移。
conclusion: 为任意LLM智能体提供可复用的高效长期记忆插件。
---

## Abstract
Long-term memory is essential for large language model (LLM) agents operating in complex environments, yet existing memory designs are either task-specific and non-transferable, or task-agnostic but less effective due to low task-relevance and context explosion from raw memory retrieval. We propose PlugMem, a task-agnostic plugin memory module that can be attached to arbitrary LLM agents without task-specific redesign. Motivated by the fact that decision-relevant information is concentrated as abstract knowledge rather than raw experience, we draw on cognitive science to structure episodic memories into a compact, extensible knowledge-centric memory graph that explicitly represents propositional and prescriptive knowledge. This representation enables efficient memory retrieval and reasoning over task-relevant knowledge, rather than verbose raw trajectories, and departs from other graph-based methods like GraphRAG by treating knowledge as the unit of memory access and organization instead of entities or text chunks. We evaluate PlugMem unchanged across three heterogeneous benchmarks (long-horizon conversational question answering, multi-hop knowledge retrieval, and web agent tasks). 
The results show that PlugMem consistently outperforms task-agnostic baselines and exceeds task-specific memory designs, while also achieving the highest information density under a unified information-theoretic analysis. Code and data are available at https://github.com/TIMAN-group/PlugMem.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向LLM智能体的任务无关插件式长期记忆模块。

### 2. 核心内容
现有LLM智能体记忆要么任务专用难以迁移，要么任务无关却因原始经验检索导致上下文爆炸。论文提出PlugMem，一种可即插即用的任务无关记忆模块，借鉴认知科学将情节记忆组织为以知识为中心的紧凑记忆图，显式表示命题性与规范性知识。该方法在提升任务相关性的同时抑制上下文膨胀，使任意LLM智能体都能高效利用长期记忆。

### 3. 对应检索需求
agents augmented with external and persistent memory。

### 4. 来源与原文
- Source：ICML-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=NWKaQIKoGp](https://openreview.net/forum?id=NWKaQIKoGp)
