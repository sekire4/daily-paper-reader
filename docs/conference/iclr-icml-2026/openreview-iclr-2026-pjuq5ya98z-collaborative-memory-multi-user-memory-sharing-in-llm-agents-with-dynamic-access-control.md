---
title: "Collaborative Memory: Multi-User Memory Sharing in LLM Agents with Dynamic Access Control"
title_zh: 协作记忆：LLM智能体中带动态访问控制的多用户记忆共享
authors: "Alireza Rezazadeh, Yuying Zhao, Zichao Li, Ange Lou, Wei Wei, Yujia Bao"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=pJUQ5YA98Z"
tags: ["query:agent-memory"]
score: 9.0
evidence: 带访问控制的LLM智能体多用户持久记忆共享架构
tldr: 复杂任务日益交给专业化的LLM智能体集群协作完成，持久记忆虽能提升单智能体表现，但多数方法假设单一用户上下文，忽视跨用户知识转移与非对称权限带来的挑战。作者提出Collaborative Memory框架，用二部图编码用户、智能体与资源之间随时间演化的访问控制，并维护私有记忆与共享记忆两个层级。该框架支持多用户多智能体环境下的受控记忆共享与知识迁移。该工作把访问控制引入智能体记忆架构，拓展了协作场景下的记忆能力。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 复杂任务越来越多地交给LLM智能体集群，但持久记忆研究多假设单用户场景，忽视跨用户知识转移与权限差异。
method: 提出Collaborative Memory框架，用二部图编码用户、智能体与资源间非对称、时变访问控制，并维护私有与共享两层记忆。
result: 该框架支持多用户多智能体环境下的受控记忆共享与知识迁移。
conclusion: 引入动态访问控制的多层记忆架构可拓展LLM智能体协作的记忆能力。
---

## Abstract
Complex tasks are increasingly delegated to ensembles of specialized LLM-based agents that reason, communicate, and coordinate actions—both among themselves and through interactions with external tools, APIs, and databases. While persistent memory has been shown to enhance single-agent performance, most approaches assume a monolithic, single-user context—overlooking the benefits and challenges of knowledge transfer across users under dynamic, asymmetric permissions. We introduce Collaborative Memory, a framework for multi-user, multi-agent environments with asymmetric, time-evolving access controls encoded as bipartite graphs linking users, agents, and resources. Our system maintains two memory tiers: (1) private memory—private fragments visible only to their originating user; and (2) shared memory—selectively shared fragments. Each fragment carries immutable provenance attributes (contributing agents, accessed resources, and timestamps) to support retrospective permission checks. Granular read policies enforce current user–agent–resource constraints and project existing memory fragments into filtered transformed views. Write policies determine fragment retention and sharing, applying context-aware transformations to update the memory. Both policies may be designed conditioned on system, agent, and user-level information. Our framework enables safe, efficient, and interpretable cross-user knowledge sharing, with provable adherence to asymmetric, time-varying policies and full auditability of memory operations.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
带访问控制的LLM智能体多用户持久记忆共享架构。

### 2. 核心内容
复杂任务日益交给专业化的LLM智能体集群协作完成，持久记忆虽能提升单智能体表现，但多数方法假设单一用户上下文，忽视跨用户知识转移与非对称权限带来的挑战。作者提出Collaborative Memory框架，用二部图编码用户、智能体与资源之间随时间演化的访问控制，并维护私有记忆与共享记忆两个层级。该框架支持多用户多智能体环境下的受控记忆共享与知识迁移。该工作把访问控制引入智能体记忆架构，拓展了协作场景下的记忆能力。

### 3. 对应检索需求
memory architectures for conversational agents and multi agent systems。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=pJUQ5YA98Z](https://openreview.net/forum?id=pJUQ5YA98Z)
