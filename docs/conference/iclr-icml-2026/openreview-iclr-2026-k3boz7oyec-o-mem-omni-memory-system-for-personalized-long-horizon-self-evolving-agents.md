---
title: "O-Mem: Omni Memory System for Personalized, Long Horizon, Self-Evolving Agents"
title_zh: O-Mem：面向个性化、长程、自演化智能体的全方位记忆系统
authors: "WANG PIAOHONG, Motong Tian, Jiaxian Li, Yuan Liang, Yuqing Wang, Qianben Chen, Tiannan Wang, Zhicong Lu, Jiawei Ma, Yuchen Eleanor Jiang, Wangchunshu Zhou"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=K3bOz7oYec"
tags: ["query:agent-memory"]
score: 10.0
evidence: 面向长程智能体的分层检索全方位记忆系统
tldr: 大模型智能体在复杂环境中维持长期交互时面临上下文一致性与动态个性化不足的问题，现有记忆系统依赖语义分组检索，易忽略语义无关却关键的用户信息并引入检索噪声。作者提出O-Mem，一种基于主动用户画像的记忆框架，动态抽取并更新用户特征与事件记录，并支持分层检索以精准获取相关信息。该工作提升了长程自演化智能体的个性化记忆能力。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 现有智能体记忆系统依赖语义分组检索，易忽略关键用户信息并引入检索噪声。
method: 提出基于主动用户画像的O-Mem框架，动态抽取更新用户特征与事件记录并支持分层检索。
result: 框架缓解检索噪声并提升长期交互中的上下文一致性与个性化能力。
conclusion: 为长程自演化智能体提供了更精准的个性化记忆架构。
---

## Abstract
Recent advancements in LLM-powered agents have demonstrated significant potential in generating human-like responses; however, they continue to face challenges in maintaining long-term interactions within complex environments, primarily due to limitations in contextual consistency and dynamic personalization. Existing memory systems often depend on semantic grouping and the retrieval of past interaction groupings, which can overlook semantically irrelevant yet critical user information and introduce retrieval noise. To address these issues, we propose O-Mem, a novel memory framework based on active user profiling that dynamically extracts and updates user characteristics and event records from interactions. O-Mem supports hierarchical retrieval of persona attributes and topic-related context, enabling more adaptive and coherent personalized responses. Additionally, we introduce a new dataset designed to evaluate personalized long-text generation in memory-augmented agents. Experiments across three personalized tasks demonstrate that O-Mem consistently improves long-term human–AI interaction by scaling memory-time within interactions.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向长程智能体的分层检索全方位记忆系统。

### 2. 核心内容
大模型智能体在复杂环境中维持长期交互时面临上下文一致性与动态个性化不足的问题，现有记忆系统依赖语义分组检索，易忽略语义无关却关键的用户信息并引入检索噪声。作者提出O-Mem，一种基于主动用户画像的记忆框架，动态抽取并更新用户特征与事件记录，并支持分层检索以精准获取相关信息。该工作提升了长程自演化智能体的个性化记忆能力。

### 3. 对应检索需求
memory architecture designs for intelligent agents。

### 4. 来源与原文
- Source：ICLR-2026-Public
- OpenReview：[https://openreview.net/forum?id=K3bOz7oYec](https://openreview.net/forum?id=K3bOz7oYec)
