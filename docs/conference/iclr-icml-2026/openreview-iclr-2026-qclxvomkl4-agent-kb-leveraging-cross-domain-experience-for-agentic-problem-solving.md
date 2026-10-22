---
title: "Agent KB: Leveraging Cross-Domain Experience for Agentic Problem Solving"
title_zh: Agent KB：利用跨领域经验进行智能体问题求解
authors: "Xiangru Tang, Tianrui Qin, Daniel Shao, Ziyang Zhou, Jiapeng Chen, Tianhao Peng, Tingting Du, Peng Xia, Fang Wu, He Zhu, Jiaheng Liu, Xingyao Wang, Sirui Hong, Chenglin Wu, Hao Cheng, Chi Wang, Wangchunshu Zhou"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=QCLXVOMkl4"
tags: ["query:agent-memory"]
score: 9.0
evidence: 面向智能体框架的通用记忆基础设施
tldr: 现有智能体记忆系统局限于单个智能体或特定框架，导致经验无法跨系统迁移。论文提出Agent KB通用记忆基础设施，将轨迹聚合为结构化知识库并通过轻量API供不同框架调用。实验表明该设计可在无需重训的情况下实现跨架构经验共享与复用，为集体智能式记忆提供了可行方案。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 现有智能体记忆系统各自为政，经验被封闭在单一框架内，无法实现跨架构知识迁移。
method: 提出通用记忆基础设施Agent KB，将轨迹聚合为结构化知识库并以轻量API服务多种异构智能体框架。
result: 实验显示Agent KB可在不重新训练的情况下实现跨框架经验共享，减少重复试错。
conclusion: 该工作为跨框架的集体记忆与经验复用提供了通用基础设施。
---

## Abstract
AI agent frameworks operate in isolation, forcing agents to rediscover solutions and repeat mistakes across different systems. Despite valuable problem-solving experiences accumulated by frameworks like smolagents, OpenHands, and OWL, this knowledge remains trapped within individual systems, preventing the emergence of collective intelligence. Current memory systems focus on individual agents or framework-specific demonstrations, failing to enable cross-architecture knowledge transfer. We introduce AGENT KB, a universal memory infrastructure enabling seamless experience sharing across heterogeneous agent frameworks without retraining. AGENT KB aggregates trajectories into a structured knowledge base and serves lightweight APIs. At inference time, hybrid retrieval operates through two stages: planning seeds agents with cross-domain workflows, while feedback applies targeted diagnostic fixes. A disagreement gate ensures retrieved knowledge enhances rather than disrupts reasoning, addressing knowledge interference in cross-framework transfer. We validate AGENT KB across major frameworks on GAIA, Humanity’s Last Exam, GPQA, and SWE-bench. Results show substantial improvements across diverse model families: compared to baseline pass@1, smolagents with AGENT KB achieve up to 18.7pp gains at pass@3 (55.2% → 73.9%), while OpenHands improves 4.0pp on SWE-bench pass@1 (24.3% → 28.3%). Similar improvements are observed across all base model families. Ablations confirm that hybrid retrieval and feedback stages are essential, with automatically generated experiences matching manual curation. This establishes the foundation for collective agent intelligence through shared memory infrastructures.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向智能体框架的通用记忆基础设施。

### 2. 核心内容
现有智能体记忆系统局限于单个智能体或特定框架，导致经验无法跨系统迁移。论文提出Agent KB通用记忆基础设施，将轨迹聚合为结构化知识库并通过轻量API供不同框架调用。实验表明该设计可在无需重训的情况下实现跨架构经验共享与复用，为集体智能式记忆提供了可行方案。

### 3. 对应检索需求
memory mechanisms and memory systems for autonomous agents。

### 4. 来源与原文
- Source：ICLR-2026-Public
- OpenReview：[https://openreview.net/forum?id=QCLXVOMkl4](https://openreview.net/forum?id=QCLXVOMkl4)
