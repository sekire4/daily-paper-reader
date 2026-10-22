---
title: "Embodied Agents Meet Personalization: Investigating Challenges and Solutions Through the Lens of Memory Utilization"
title_zh: 具身智能体走向个性化：从记忆利用视角探讨挑战与解决方案
authors: "Taeyoon Kwon, Dongwook Choi, Hyojun Kim, Sunghwan Kim, Seungjun Moon, Beong-woo Kwak, Kuan-Hao Huang, Jinyoung Yeo"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=E5L43l5EIu"
tags: ["query:agent-memory"]
score: 8.0
evidence: 具身LLM智能体的记忆利用与个性化辅助
tldr: LLM驱动的具身智能体在常规物体重排任务上表现良好，但利用历史交互中的用户特定知识提供个性化服务仍面临挑战。作者从物体语义与用户行为模式两个维度考察智能体的记忆利用能力，并构建Memento两阶段评测框架，包含单记忆与联合记忆任务。实验显示现有智能体能回忆简单物体语义，却难以应用序列化行为记忆，为具身智能体记忆机制设计指明了改进方向。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 具身智能体难以利用历史交互中的用户特定知识提供个性化辅助。
method: 从物体语义与用户行为模式两维度出发，构建Memento两阶段记忆评测框架。
result: 实验表明智能体能回忆简单物体语义，但难以应用序列化的行为记忆。
conclusion: 记忆利用是具身个性化服务的关键瓶颈，需针对性设计记忆机制。
---

## Abstract
LLM-powered embodied agents have shown success on conventional object-rearrangement tasks, but providing personalized assistance that leverages user-specific knowledge from past interactions presents new challenges. We investigate these challenges through the lens of agents' memory utilization along two critical dimensions: object semantics (identifying objects based on personal meaning) and user patterns (recalling sequences from behavioral routines). To assess these capabilities, we construct Memento, an end-to-end two-stage evaluation framework comprising single-memory and joint-memory tasks. Our experiments reveal that current agents can recall simple object semantics but struggle to apply sequential user patterns to planning. Through in-depth analysis, we identify two critical bottlenecks: information overload and coordination failures when handling multiple memories. Based on these findings, we explore memory architectural approaches to address these challenges. Given our observation that episodic memory provides both personalized knowledge and in-context learning benefits, we design a hierarchical knowledge graph-based user-profile memory module that separately manages personalized knowledge, achieving substantial improvements on both single and joint-memory tasks.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
具身LLM智能体的记忆利用与个性化辅助。

### 2. 核心内容
LLM驱动的具身智能体在常规物体重排任务上表现良好，但利用历史交互中的用户特定知识提供个性化服务仍面临挑战。作者从物体语义与用户行为模式两个维度考察智能体的记忆利用能力，并构建Memento两阶段评测框架，包含单记忆与联合记忆任务。实验显示现有智能体能回忆简单物体语义，却难以应用序列化行为记忆，为具身智能体记忆机制设计指明了改进方向。

### 3. 对应检索需求
memory mechanisms and memory systems for autonomous agents。

### 4. 来源与原文
- Source：ICLR-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=E5L43l5EIu](https://openreview.net/forum?id=E5L43l5EIu)
