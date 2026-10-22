---
title: Memory-Augmented Large Language Model-Based Agent with Cross-Task Experience Learning
title_zh: 具备跨任务经验学习能力的记忆增强大语言模型智能体
authors: "Sijia Wang, Gengzhi Zhang, Xuefeng Chen, Liang Feng"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=0GMt2OWeCb"
tags: ["query:agent-memory"]
score: 9.0
evidence: 记忆增强的LLM智能体跨任务存储并复用经验
tldr: 针对现有记忆增强LLM智能体数据效率低、经验复用策略静态且难以迁移的问题，提出具备跨任务经验学习能力的记忆增强智能体。它通过记忆模块存储并复用历史交互经验，支持利用相关任务的可迁移知识。实验表明该方法提升了知识保持与上下文适应性，并改善了数据效率。为智能体长期记忆与经验复用提供了有效方案。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 现有记忆增强智能体需大量交互数据且依赖静态自生成经验复用，难以迁移相关知识。
method: 提出带记忆模块的LLM智能体，通过跨任务经验学习存储与复用历史交互经验以增强适应能力。
result: 方法提升了知识保持与上下文适应性，并改善数据效率。
conclusion: 为记忆增强智能体的经验迁移与复用提供了有效方案。
---

## Abstract
Large Language Model (LLM)-based agents have demonstrated impressive capabilities in complex decision-making and multi-turn instruction-following tasks. To enhance knowledge retention and contextual adaptability, recent work has equipped these agents with memory modules that store and reuse historical interaction experiences. However, existing memory-augmented approaches face two key limitations: they often require large amounts of interaction data during early training to reach competitive performance, resulting in low data efficiency; and they rely on static, self-derived experience reuse strategies, limiting their ability to adapt when prior learning is insufficient and preventing the use of transferable knowledge from related tasks. Building on these observations, in this paper, we propose a memory-augmented LLM agent with cross-task experience learning, designed to improve data efficiency and adaptability. Our method augments the conventional task-specific memory with an additional source experience memory that retains transferable knowledge from related but distinct tasks. We further introduce a dynamic memory retrieval mechanism that adaptively draws from both task and source memories, allowing the agent to balance prior task-specific experiences with cross-task knowledge according to the current context and progression. We validate the proposed method on the WebShop benchmark, which comprises diverse, multi-turn instruction-following tasks across product domains with varying semantic complexity. Experimental results show that our approach consistently outperforms state-of-the-art memory-augmented LLM agents in task success rate and generalization, demonstrating the effectiveness of the proposed memory architecture and retrieval mechanism.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
记忆增强的LLM智能体跨任务存储并复用经验。

### 2. 核心内容
针对现有记忆增强LLM智能体数据效率低、经验复用策略静态且难以迁移的问题，提出具备跨任务经验学习能力的记忆增强智能体。它通过记忆模块存储并复用历史交互经验，支持利用相关任务的可迁移知识。实验表明该方法提升了知识保持与上下文适应性，并改善了数据效率。为智能体长期记忆与经验复用提供了有效方案。

### 3. 对应检索需求
agents augmented with external and persistent memory。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=0GMt2OWeCb](https://openreview.net/forum?id=0GMt2OWeCb)
