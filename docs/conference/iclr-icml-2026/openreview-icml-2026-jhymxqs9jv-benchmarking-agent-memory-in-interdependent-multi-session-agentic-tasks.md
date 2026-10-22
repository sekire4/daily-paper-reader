---
title: Benchmarking Agent Memory in Interdependent Multi-Session Agentic Tasks
title_zh: 在多会话相互依赖的智能体任务中评测智能体记忆
authors: "Zexue He, Yu Wang, Churan Zhi, Yuanzhe Hu, Tzu-Ping Chen, Lang Yin, Ze Chen, Tong Arthur Wu, Siru Ouyang, Zihan Wang, Jiaxin Pei, Julian McAuley, Yejin Choi, Alex Pentland"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf/76c2c4e7ec8f3e47d153e7f82d46e02885c63b47.pdf"
tags: ["query:agent-memory"]
score: 8.0
evidence: 面向多会话智能体任务中长期记忆存储与使用的评测基准
tldr: 现有智能体记忆评测往往将记忆与行动割裂，或只测单会话任务，无法反映记忆如何指导后续决策。作者提出MemoryArena，一个统一的多会话记忆—智能体—环境循环评测平台，包含人工构造的相互依赖任务。该基准要求智能体在交互中形成长期记忆并在后续任务中加以利用，从而系统刻画记忆的存储、检索与更新能力，为智能体记忆研究提供标准化评估手段。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 现有评测将记忆与行动分离，无法衡量长期记忆如何指导后续决策。
method: 构建MemoryArena多会话记忆—智能体—环境循环评测平台及相互依赖任务集。
result: 该基准揭示智能体在跨会话复用记忆解决后续任务方面仍存在明显不足。
conclusion: 记忆与行动应联合评测，该平台为智能体长期记忆研究提供标准基准。
---

## Abstract
Existing evaluations of agents with memory typically assess **memorization** and **action** in isolation. One class of benchmarks evaluates memorization by testing recall of past conversations or text but fails to capture how memory is used to guide future decisions. Another class focuses on agents acting in single-session tasks without the need for long-term memory. However, in realistic settings, memorization and action are tightly coupled: agents acquire memory while interacting with the environment, and subsequently rely on that memory to solve future tasks. To capture this setting, we introduce MemoryArena, a unified evaluation gym for benchmarking agent memory in multi-session Memory-Agent-Environment loops. The benchmark consists of human-crafted agentic tasks with explicitly interdependent subtasks, where agents must learn from earlier actions and feedback by distilling experiences into memory, and subsequently use that memory to guide later actions to solve the overall task. MEMORYARENA supports evaluation across web navigation, preference-constrained planning, progressive information search, and sequential formal reasoning, and reveals that agents with near-saturated performance on existing long-context memory benchmarks like LoCoMo perform poorly in our agentic setting, exposing a gap in current evaluations for agents with memory.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向多会话智能体任务中长期记忆存储与使用的评测基准。

### 2. 核心内容
现有智能体记忆评测往往将记忆与行动割裂，或只测单会话任务，无法反映记忆如何指导后续决策。作者提出MemoryArena，一个统一的多会话记忆—智能体—环境循环评测平台，包含人工构造的相互依赖任务。该基准要求智能体在交互中形成长期记忆并在后续任务中加以利用，从而系统刻画记忆的存储、检索与更新能力，为智能体记忆研究提供标准化评估手段。

### 3. 对应检索需求
how agents store retrieve and update long term memory。

### 4. 来源与原文
- Source：ICML-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=JHYmxqS9Jv](https://openreview.net/forum?id=JHYmxqS9Jv)
