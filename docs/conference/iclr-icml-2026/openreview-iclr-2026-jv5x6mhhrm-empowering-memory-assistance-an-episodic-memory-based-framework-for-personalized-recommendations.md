---
title: "Empowering Memory Assistance: An Episodic Memory-Based Framework for Personalized Recommendations"
title_zh: 赋能记忆辅助：基于情景记忆的个性化推荐框架
authors: "Shweta Singh, Shraddha Seshadri"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=JV5X6mhhrm"
tags: ["query:agent-memory"]
score: 8.0
evidence: 面向智能体的情景记忆架构
tldr: 动态环境中的智能体需要回忆并情境化过往经验以指导未来行为。作者借鉴人类情景记忆，提出认知驱动的个性化框架，将时间化的动作、地点与交互编码为分层时序图网络，形成多模态动态记忆架构。该架构可区分重叠行为模式并基于长期经验预测未来动作，支持持续记忆更新。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 动态环境中的智能体需要回忆并利用过往经验来指导未来行为。
method: 借鉴人类情景记忆，将时序化经验编码进分层时序图网络，构建多模态动态记忆架构。
result: 该框架能区分重叠行为模式并基于长期经验预测未来动作，支持持续记忆更新。
conclusion: 认知驱动的情景记忆架构为智能体的长期经验建模提供了可行方案。
---

## Abstract
Artificial agents operating in dynamic environments require the ability to recall and contextualize past experiences to inform future behavior. Drawing inspiration from human episodic memory, we propose a cognitively grounded recommendation framework that models time-evolving personal experiences using a dynamic, multimodal memory architecture. Our system encodes temporally structured actions, places, and interactions into a hierarchical temporal graph network (TGN), enabling agents to disambiguate overlapping behavior patterns and anticipate future actions based on long-term experience. Unlike traditional recommendation or forecasting models that rely on static, task-specific patterns, our approach supports continual memory updates without retraining, and generalizes across varied activity sequences. Evaluated on a structured dataset derived from three years of egocentric recordings, our model significantly outperforms state-of-the-art baselines (e.g., AntGPT, DyRep, Palm) on next-activity prediction and sequence alignment metrics. This work introduces a scalable, cognitively inspired memory architecture with broad applications in lifelong learning, assistive robotics, and human-AI collaboration.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向智能体的情景记忆架构。

### 2. 核心内容
动态环境中的智能体需要回忆并情境化过往经验以指导未来行为。作者借鉴人类情景记忆，提出认知驱动的个性化框架，将时间化的动作、地点与交互编码为分层时序图网络，形成多模态动态记忆架构。该架构可区分重叠行为模式并基于长期经验预测未来动作，支持持续记忆更新。

### 3. 对应检索需求
memory mechanisms and memory systems for autonomous agents。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=JV5X6mhhrm](https://openreview.net/forum?id=JV5X6mhhrm)
