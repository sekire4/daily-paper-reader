---
title: "Memory-T1: Reinforcement Learning for Temporal Reasoning in Multi-session Agents"
title_zh: Memory-T1：面向多会话智能体时序推理的强化学习方法
authors: "Yiming Du, Baojun Wang, Yifan Xiang, Zhaowei Wang, Wenyu Huang, Boyang XUE, Bin Liang, Xingshan Zeng, Fei Mi, Haoli Bai, Lifeng Shang, Jeff Z. Pan, Yuxin Jiang, Kam-Fai Wong"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=vQf2YR2Kpd"
tags: ["query:agent-memory"]
score: 9.0
evidence: 面向多会话对话智能体的时间感知记忆选择
tldr: 多会话长对话历史不断增长且累积噪声，现有长上下文模型难以准确定位时间相关信息。本文提出Memory-T1框架，用强化学习训练时间感知的记忆选择策略，先经时间与检索过滤剪枝候选，再由智能体选出精确证据。多级奖励兼顾准确性与证据接地，实验显示其显著提升了对话智能体的时序推理表现。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 多会话长对话累积噪声，长上下文模型难以定位时间相关证据进行推理。
method: 提出Memory-T1，用强化学习学习时间感知记忆选择策略，先粗筛后精选证据。
result: 多级奖励训练下显著提升多会话对话智能体的时序推理与证据接地表现。
conclusion: 为对话智能体的记忆选择与时序推理提供了可学习的策略框架。
---

## Abstract
Temporal reasoning over long, multi-session dialogues is a critical capability for conversational agents. As dialogue histories grow in length and accumulate noise, existing long-context models struggle to accurately identify temporally pertinent information, significantly impairing reasoning performance. To address this, we introduce **Memory-T1**, a framework that learns a time-aware memory selection policy using reinforcement learning (RL). It employs a coarse-to-fine strategy, first pruning the dialogue history into a candidate set with temporal and retriever filters, followed by an RL agent that selects the precise evidence. The RL training is guided by a multi-level reward function optimizing (i) accuracy, (ii) evidence grounding, and (iii) temporal consistency. This temporal consistency reward provides a dense signal by evaluating alignment at both the session-level (range proximity) and the utterance-level (evidence density), enabling the agent to resolve subtle chronological ambiguities. On the Time-Dialog benchmark, Memory-T1 boosts a 7B model to an overall score of 67.0\%, establishing a new state-of-the-art performance for open-source models and outperforming a 14B baseline by 10.2\%. Ablation studies show temporal consistency and evidence grounding rewards jointly contributing to a 15.0\% performance gain.Moreover, Memory-T1 maintains robustness up to 128k tokens, where baseline models collapse, proving effectiveness against noise in extensive dialogue histories.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向多会话对话智能体的时间感知记忆选择。

### 2. 核心内容
多会话长对话历史不断增长且累积噪声，现有长上下文模型难以准确定位时间相关信息。本文提出Memory-T1框架，用强化学习训练时间感知的记忆选择策略，先经时间与检索过滤剪枝候选，再由智能体选出精确证据。多级奖励兼顾准确性与证据接地，实验显示其显著提升了对话智能体的时序推理表现。

### 3. 对应检索需求
conversational memory for dialogue agents。

### 4. 来源与原文
- Source：ICLR-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=vQf2YR2Kpd](https://openreview.net/forum?id=vQf2YR2Kpd)
