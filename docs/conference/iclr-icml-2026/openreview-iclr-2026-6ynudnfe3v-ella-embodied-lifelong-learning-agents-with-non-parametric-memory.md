---
title: "Ella: Embodied Lifelong Learning Agents with Non-Parametric Memory"
title_zh: Ella：具备非参数记忆的具身终身学习智能体
authors: "Hongxin Zhang, Zheyuan Zhang, Zeyuan Wang, Zunzhe Zhang, Lixing Fang, Qinhong Zhou, Chuang Gan"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=6YNUdnFe3v"
tags: ["query:agent-memory"]
score: 9.0
evidence: 具备长期多模态记忆系统的具身智能体
tldr: 具身智能体在开放世界中持续接收视觉与语言信息，如何长期积累并有效利用是核心难题。作者提出Ella，一个具身终身学习智能体，其核心是结构化的非参数长期多模态记忆系统，包含以名称为中心的语义记忆和时空情景记忆，可有效存储、更新与检索信息。该工作展示了长期记忆对持续学习的重要支撑。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 具身智能体在开放世界中持续接收信息，需要长期积累并有效利用这些经验。
method: 提出Ella智能体，核心是含语义记忆与时空情景记忆的长期多模态非参数记忆系统。
result: 该系统能有效存储、更新与检索信息，支撑多小时社交交互中的持续学习。
conclusion: 结构化长期记忆系统为具身智能体的终身学习提供了关键支撑。
---

## Abstract
Situated within human society, embodied agents are continuously exposed to diverse streams of information, ranging from visual observations to natural language interactions. A central challenge is enabling them to learn from and effectively leverage this information over extended periods. To address this, we introduce Ella, an embodied lifelong learning agent designed to accumulate experiences and acquire knowledge across hours of social interaction in a 3D open world. At the core of Ella’s capabilities is a structured, non-parametric,  long-term multi-modal memory system that stores, updates, and retrieves information effectively. It consists of a name-centric semantic memory for organizing acquired knowledge and a spatiotemporal episodic memory for capturing multimodal experiences. By integrating foundation models with this non-parametric memory system, Ella retrieves relevant information for decision-making, plans daily activities, builds social relationships, and evolves autonomously while coexisting with other intelligent beings in the open world. We conduct capability-oriented evaluations in a dynamic 3D open world where 15 agents engage in social activities for days and are assessed with a suite of unseen controlled evaluations. Experimental results show that Ella can influence, lead, and cooperate with other agents well to achieve goals, showcasing its ability to learn effectively through observation and social interaction. Our findings highlight the transformative potential of combining non-parametric memory systems with foundation models for advancing embodied intelligence.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
具备长期多模态记忆系统的具身智能体。

### 2. 核心内容
具身智能体在开放世界中持续接收视觉与语言信息，如何长期积累并有效利用是核心难题。作者提出Ella，一个具身终身学习智能体，其核心是结构化的非参数长期多模态记忆系统，包含以名称为中心的语义记忆和时空情景记忆，可有效存储、更新与检索信息。该工作展示了长期记忆对持续学习的重要支撑。

### 3. 对应检索需求
memory mechanisms and memory systems for autonomous agents。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=6YNUdnFe3v](https://openreview.net/forum?id=6YNUdnFe3v)
