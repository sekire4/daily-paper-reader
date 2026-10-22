---
title: "From Experience to Strategy: Empowering LLM Agents with Trainable Graph Memory"
title_zh: 从经验到策略：用可训练图记忆赋能LLM智能体
authors: "Siyu Xia, Zekun Xu, Jiajun Chai, Wentian Fan, Yan Song, Xiaohan Wang, Guojun Yin, Wei Lin, Haifeng Zhang, Jun Wang"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=bvaaydGKYp"
tags: ["query:agent-memory"]
score: 9.0
evidence: 面向LLM智能体的可训练多层图记忆
tldr: LLM智能体在开放环境中依赖经验改进决策，但隐式训练记忆易灾难遗忘、显式提示记忆缺乏适应性。论文提出以智能体为中心的可训练多层图记忆框架，将原始轨迹抽象为结构化图记忆，并结合上下文记忆增强对参数知识的利用。该设计提升了经验复用与可解释性，为智能体记忆架构提供了可训练的新范式。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 隐式训练记忆存在灾难遗忘与可解释性差，显式提示记忆又缺乏适应性，难以有效复用经验。
method: 提出以智能体为中心、可训练的多层图记忆框架，将原始轨迹抽象为结构化图并评估上下文记忆作用。
result: 图记忆增强了LLM利用参数信息与历史经验指导决策的能力。
conclusion: 为智能体记忆架构提供了可训练且可解释的经验复用方案。
---

## Abstract
Large Language Models (LLMs) based agents have demonstrated remarkable potential in autonomous task-solving across complex, open-ended environments. A promising approach for improving the reasoning capabilities of LLM agents is to better utilize prior experiences in guiding current decisions. However, LLMs acquire experience either through implicit memory via training, which suffers from catastrophic forgetting and limited interpretability, or explicit memory via prompting, which lacks adaptability. In this paper, we introduce a novel agent-centric, trainable, multi-layered graph memory framework and evaluate how context memory enhances the ability of LLMs to utilize parametric information. The graph abstracts raw agent trajectories into structured decision paths in a state machine and further distills them into high-level, human-interpretable strategic meta-cognition. In order to make memory adaptable, we propose a reinforcement-based weight optimization procedure that estimates the empirical utility of each meta-cognition based on reward feedback from downstream tasks. These optimized strategies are then dynamically integrated into the LLM agent’s training loop through meta-cognitive prompting. Empirically, the learnable graph memory delivers robust generalization, improves LLM agents' strategic reasoning performance, and provides consistent benefits during Reinforcement Learning (RL) training.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向LLM智能体的可训练多层图记忆。

### 2. 核心内容
LLM智能体在开放环境中依赖经验改进决策，但隐式训练记忆易灾难遗忘、显式提示记忆缺乏适应性。论文提出以智能体为中心的可训练多层图记忆框架，将原始轨迹抽象为结构化图记忆，并结合上下文记忆增强对参数知识的利用。该设计提升了经验复用与可解释性，为智能体记忆架构提供了可训练的新范式。

### 3. 对应检索需求
memory architecture designs for intelligent agents。

### 4. 来源与原文
- Source：ICLR-2026-Public
- OpenReview：[https://openreview.net/forum?id=bvaaydGKYp](https://openreview.net/forum?id=bvaaydGKYp)
