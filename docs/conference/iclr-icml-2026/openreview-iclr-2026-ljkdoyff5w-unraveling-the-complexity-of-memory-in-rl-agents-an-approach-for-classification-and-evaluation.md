---
title: "Unraveling the Complexity of Memory in RL Agents: an Approach for Classification and Evaluation"
title_zh: 解析强化学习智能体中记忆的复杂性：一种分类与评估方法
authors: "Egor Cherepanov, Nikita Kachaev, Artem Zholus, Alexey Kovalev, Aleksandr Panov"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=lJKdOYFF5W"
tags: ["query:agent-memory"]
score: 9.0
evidence: 对智能体记忆类型（长期与短期记忆）进行分类与评估
tldr: 论文针对强化学习中智能体记忆概念模糊、缺乏统一验证方法的问题，提出对智能体记忆类型（如长期与短期记忆、陈述性记忆）的精确界定与评估框架。方法上给出实用的记忆分类定义并配套验证流程，以区分不同记忆能力。研究旨在避免对智能体记忆能力的误判，使不同记忆增强智能体之间可以客观比较，为记忆系统研究提供统一术语与评测基础。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 强化学习中记忆概念宽泛且缺乏统一验证方法，导致对智能体记忆能力的误判。
method: 论文给出智能体记忆类型的精确实用定义，并提出分类与评估框架。
result: 该框架能区分长期与短期等记忆类型，支持记忆增强智能体的客观比较。
conclusion: 研究为智能体记忆研究提供统一术语与可复用的评测方法。
---

## Abstract
The incorporation of memory into agents is essential for numerous tasks within the domain of Reinforcement Learning (RL). In particular, memory is paramount for tasks that require the use of past information, adaptation to novel environments, and improved sample efficiency. However, the term ``memory'' encompasses a wide range of concepts, which, coupled with the lack of a unified methodology for validating an agent's memory, leads to erroneous judgments about agents' memory capabilities and prevents objective comparison with other memory-enhanced agents. This paper aims to streamline the concept of memory in RL by providing practical precise definitions of agent memory types, such as long-term vs. short-term memory and declarative vs. procedural memory, inspired by cognitive science. Using these definitions, we categorize different classes of agent memory, propose a robust experimental methodology for evaluating the memory capabilities of RL agents, and standardize evaluations. Furthermore, we empirically demonstrate the importance of adhering to the proposed methodology when evaluating different types of agent memory by conducting experiments with different RL agents and what its violation leads to.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
对智能体记忆类型（长期与短期记忆）进行分类与评估。

### 2. 核心内容
论文针对强化学习中智能体记忆概念模糊、缺乏统一验证方法的问题，提出对智能体记忆类型（如长期与短期记忆、陈述性记忆）的精确界定与评估框架。方法上给出实用的记忆分类定义并配套验证流程，以区分不同记忆能力。研究旨在避免对智能体记忆能力的误判，使不同记忆增强智能体之间可以客观比较，为记忆系统研究提供统一术语与评测基础。

### 3. 对应检索需求
Papers central to 帮我查找agent memory相关论文, especially work that connects or combines: memory mechanisms and memory systems for autonomous agents; long-term memory storage and retrieval in agent systems; conversational memory for dialogue agents; memory architecture designs for intelligent agents; working memory mechanisms for agent reasoning; agents augmented with external and persistent memory; papers on memory mechanisms for autonomous agents; how agents store retrieve and update long term memory; memory architectures for conversational agents and multi agent systems; methods for memory consolidation and retrieval in agent systems.

### 4. 来源与原文
- Source：ICLR-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=lJKdOYFF5W](https://openreview.net/forum?id=lJKdOYFF5W)
