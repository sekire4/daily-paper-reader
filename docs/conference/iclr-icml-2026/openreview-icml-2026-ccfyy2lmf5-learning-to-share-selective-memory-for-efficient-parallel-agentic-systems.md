---
title: "Learning to Share: Selective Memory for Efficient Parallel Agentic Systems"
title_zh: 学会共享：并行智能体系统中的选择性记忆
authors: "Joseph Fioresi, Parth Parag Kulkarni, Ashmal Vayani, Song Wang, Mubarak Shah"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf/36afa45a025ea9f91750ce099712175131a4547b.pdf"
tags: ["query:agent-memory"]
score: 8.0
evidence: 面向并行多智能体系统的选择性共享记忆机制
tldr: 多智能体系统通过协调多个智能体迭代推理、调用工具并交换中间结果来求解复杂任务，但并行团队常重复执行相似子问题，造成大量重叠计算。作者提出Learning to Share，一种面向并行智能体框架的可学习共享记忆机制，支持跨团队的选择性信息复用并控制上下文增长。该机制在提升鲁棒性与解质量的同时降低并行执行的计算开销，为多智能体记忆架构设计提供了新思路。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 并行多智能体团队常重复处理相似子问题，造成大量重叠计算与资源浪费。
method: 提出可学习的共享记忆机制LTS，实现跨团队选择性信息复用并控制上下文增长。
result: 机制在保持解质量与鲁棒性的同时减少并行执行中的重复计算。
conclusion: 为多智能体系统的共享记忆架构提供了高效复用方案。
---

## Abstract
Agentic systems solve complex tasks by coordinating multiple agents that iteratively reason, invoke tools, and exchange intermediate results. To improve robustness and solution quality, recent approaches deploy multiple agent teams running in parallel to explore diverse reasoning trajectories. However, parallel execution comes at a significant computational cost: when different teams independently reason about similar sub-problems or execute analogous steps, they repeatedly perform substantial overlapping computation. To address these limitations, in this paper, we propose Learning to Share (LTS), a learned shared-memory mechanism for parallel agentic frameworks that enables selective cross-team information reuse while controlling context growth. LTS introduces a global memory bank accessible to all teams and a lightweight controller that decides whether intermediate agent steps should be added to memory or not. The controller is trained using stepwise reinforcement learning with usage-aware credit assignment, allowing it to identify information that is globally useful across parallel executions. Experiments on the AssistantBench and GAIA benchmarks show that LTS significantly reduces overall runtime while matching or improving task performance compared to memory-free parallel baselines, demonstrating that learned memory admission is an effective strategy for improving the efficiency of parallel agentic systems.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向并行多智能体系统的选择性共享记忆机制。

### 2. 核心内容
多智能体系统通过协调多个智能体迭代推理、调用工具并交换中间结果来求解复杂任务，但并行团队常重复执行相似子问题，造成大量重叠计算。作者提出Learning to Share，一种面向并行智能体框架的可学习共享记忆机制，支持跨团队的选择性信息复用并控制上下文增长。该机制在提升鲁棒性与解质量的同时降低并行执行的计算开销，为多智能体记忆架构设计提供了新思路。

### 3. 对应检索需求
memory architectures for conversational agents and multi agent systems。

### 4. 来源与原文
- Source：ICML-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=cCFyY2LmF5](https://openreview.net/forum?id=cCFyY2LmF5)
