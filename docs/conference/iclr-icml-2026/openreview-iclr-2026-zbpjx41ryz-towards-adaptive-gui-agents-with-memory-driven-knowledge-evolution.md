---
title: Towards Adaptive GUI Agents with Memory-Driven Knowledge Evolution
title_zh: 面向记忆驱动知识演化的自适应GUI智能体
authors: "Libo Sun, Jiwen Zhang, zhongyu wei"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=ZbPjx41RYz"
tags: ["query:agent-memory"]
score: 9.0
evidence: 具备双层固定与程序记忆的记忆驱动自适应GUI智能体
tldr: 移动应用智能体在界面频繁更新和工作流变更时面临元素识别失败与任务逻辑漂移问题。作者提出记忆驱动的自适应智能体框架，设计由固定记忆与程序记忆构成的双层记忆结构以实现知识演化。该设计提升了智能体在动态移动生态中的可靠性与长期可用性，为智能体记忆架构设计提供了实例。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 移动应用频繁更新导致UI元素识别失败与任务逻辑漂移。
method: 提出记忆驱动自适应框架，构建固定记忆与程序记忆组成的双层记忆。
result: 该双层记忆提升了智能体在动态环境中的识别与任务稳定性。
conclusion: 为智能体记忆架构设计在GUI场景中的应用提供了范例。
---

## Abstract
Mobile App Agents powered by large foundation models represent a transformative approach to human-computer interaction, enabling autonomous task execution within dynamic mobile applications. However, the volatile nature of mobile ecosystems characterized by frequent application updates poses challenges to agent reliability and long-term viability. We identify two critical problems: UI element identification failure when visual or structural changes occur, and task logic drift when fundamental workflows are altered. To address these challenges, we propose \textbf{\modelname}, a \textbf{M}emory-driven \textbf{A}daptive a\textbf{GENT} framework, equipped with a novel dual-level memory consisting of stationary memory and procedural memory. The stationary memory maintains rich multimodal representations of UI elements, enabling robust action grounding despite interface modifications, while the procedural memory captures and adapts structured task workflows to handle logical changes in operations. This framework effectively bridges the update gap that has limited the practical deployment of mobile agents. 
Comprehensive experiments demonstrate that \modelname achieves robust generalization across various in-domain scenarios and strong adaptability to novel task domains.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
具备双层固定与程序记忆的记忆驱动自适应GUI智能体。

### 2. 核心内容
移动应用智能体在界面频繁更新和工作流变更时面临元素识别失败与任务逻辑漂移问题。作者提出记忆驱动的自适应智能体框架，设计由固定记忆与程序记忆构成的双层记忆结构以实现知识演化。该设计提升了智能体在动态移动生态中的可靠性与长期可用性，为智能体记忆架构设计提供了实例。

### 3. 对应检索需求
memory architecture designs for intelligent agents。

### 4. 来源与原文
- Source：ICLR-2026-Public
- OpenReview：[https://openreview.net/forum?id=ZbPjx41RYz](https://openreview.net/forum?id=ZbPjx41RYz)
