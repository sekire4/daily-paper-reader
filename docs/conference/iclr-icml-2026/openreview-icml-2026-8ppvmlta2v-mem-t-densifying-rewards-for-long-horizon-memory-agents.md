---
title: "Mem-T: Densifying Rewards for Long-Horizon Memory Agents"
title_zh: Mem-T：为长程记忆智能体稠密化奖励
authors: "Yanwei Yue, Guibin Zhang, Boci Peng, Xuanbo Fan, Jiaxin Guo, Qiankun Li, Yan Zhang"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf/50453717a0322909321c24d35a41152273110a8c.pdf"
tags: ["query:agent-memory"]
score: 9.0
evidence: 面向长程记忆智能体存储与检索的奖励稠密化
tldr: 记忆智能体自主管理记忆的处理、存储与检索，但现有训练范式需在长程记忆操作序列后获得稀疏且延迟的奖励，难以端到端优化记忆管理策略。作者提出Mem-T，一种对接轻量分层记忆数据库的自主记忆智能体，可在流式输入上动态更新并多轮检索，并提出MoT-GRPO以稠密化奖励信号。该工作有效提升了长程记忆管理能力的训练效果，为记忆巩固与检索提供了可训练框架。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 现有记忆智能体训练面临长程操作后奖励稀疏延迟的问题，难以端到端优化记忆策略。
method: 提出Mem-T自主记忆智能体对接分层记忆库，并用MoT-GRPO稠密化奖励训练长程记忆管理。
result: 智能体可在流式输入上动态更新与多轮检索，并借稠密奖励改善长程记忆管理训练。
conclusion: 为记忆智能体的记忆巩固与检索提供了可端到端训练的框架。
---

## Abstract
Memory agents, which depart from predefined memory-processing pipelines by endogenously managing the processing, storage, and retrieval of memories, have garnered increasing attention for their autonomy and adaptability. However, existing training paradigms remain constrained: agents often traverse long-horizon sequences of memory operations before receiving sparse and delayed rewards, which hinders truly end-to-end optimization of memory management policies. To address this limitation, we introduce Mem-T, an autonomous memory agent that interfaces with a lightweight hierarchical memory database to perform dynamic updates and multi-turn retrieval over streaming inputs. To effectively train long-horizon memory management capabilities, we further propose MoT-GRPO, a tree-guided reinforcement learning framework that transforms sparse terminal feedback into dense, step-wise supervision via memory operation tree backpropagation and hindsight credit assignment, thereby enabling the joint optimization of memory construction and retrieval.
Extensive experiments demonstrate that Mem-T is **(1) high-performing**, surpassing frameworks such as A-Mem and Mem0 by up to $14.94\\%$, and **(2) economical**, operating on a favorable accuracy-efficiency Pareto frontier and reducing inference tokens per query by $\sim24.45\\%$ relative to GAM without sacrificing performance.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向长程记忆智能体存储与检索的奖励稠密化。

### 2. 核心内容
记忆智能体自主管理记忆的处理、存储与检索，但现有训练范式需在长程记忆操作序列后获得稀疏且延迟的奖励，难以端到端优化记忆管理策略。作者提出Mem-T，一种对接轻量分层记忆数据库的自主记忆智能体，可在流式输入上动态更新并多轮检索，并提出MoT-GRPO以稠密化奖励信号。该工作有效提升了长程记忆管理能力的训练效果，为记忆巩固与检索提供了可训练框架。

### 3. 对应检索需求
methods for memory consolidation and retrieval in agent systems。

### 4. 来源与原文
- Source：ICML-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=8ppVmLtA2V](https://openreview.net/forum?id=8ppVmLtA2V)
