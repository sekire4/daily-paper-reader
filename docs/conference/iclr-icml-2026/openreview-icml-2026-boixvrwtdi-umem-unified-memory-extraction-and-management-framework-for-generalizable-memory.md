---
title: "UMEM: Unified Memory Extraction and Management Framework for Generalizable Memory"
title_zh: UMEM：面向可泛化记忆的统一记忆提取与管理框架
authors: "Yongshi Ye, Hui Jiang, Feihu Jiang, Tian Lan, Yichao Du, Biao Fu, Xiaodong Shi, Qianghuai Jia, Longyue Wang, Weihua Luo"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf/9bcba03fc57063491f6d3b408af5094d4d663f30.pdf"
tags: ["query:agent-memory"]
score: 10.0
evidence: 联合提取与管理记忆的自演化LLM智能体框架
tldr: 现有自演化记忆方法侧重记忆管理，而将记忆提取视为静态过程，导致智能体积累实例噪声、泛化能力差。作者提出UMEM框架，联合优化大语言模型同时进行记忆提取与记忆库更新，并引入语义邻域建模以缓解对特定实例的过拟合。该工作提升了智能体记忆的泛化性与鲁棒性。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 现有方法只优化记忆管理而忽略提取，导致智能体积累实例噪声、泛化差。
method: 提出UMEM自演化框架，联合优化LLM的记忆提取与管理，并引入语义邻域建模。
result: 该方法减轻了对特定实例的过拟合，获得更鲁棒可泛化的记忆。
conclusion: 表明记忆提取与管理的协同优化是构建可泛化智能体记忆的关键。
---

## Abstract
Self-evolving memory serves as the trainable parameters for Large Language Models (LLMs)-based agents, where extraction (distilling insights from experience) and management (updating the memory bank) must be tightly coordinated. 
Existing methods predominantly optimize memory management while treating memory extraction as a static process, resulting in poor generalization, where agents accumulate instance-specific noise rather than robust memories.
To address this, we propose Unified Memory Extraction and Management (UMEM), a self-evolving agent framework that jointly optimizes a LLM to simultaneously extract and manage memories.
To mitigate overfitting to specific instances, we introduce Semantic Neighborhood Modeling and optimize the model with a neighborhood-level marginal utility reward via GRPO.
This approach ensures memory generalizability by evaluating memory utility across clusters of semantically related queries.
Extensive experiments across five benchmarks demonstrate that UMEM significantly outperforms highly competitive baselines, achieving up to 11.49 points improvement in multi-turn interactive tasks. Furthermore, UMEM maintains a stable improvement trend during continuous evolution.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
联合提取与管理记忆的自演化LLM智能体框架。

### 2. 核心内容
现有自演化记忆方法侧重记忆管理，而将记忆提取视为静态过程，导致智能体积累实例噪声、泛化能力差。作者提出UMEM框架，联合优化大语言模型同时进行记忆提取与记忆库更新，并引入语义邻域建模以缓解对特定实例的过拟合。该工作提升了智能体记忆的泛化性与鲁棒性。

### 3. 对应检索需求
how agents store retrieve and update long term memory。

### 4. 来源与原文
- Source：ICML-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=BoiXvrwtdi](https://openreview.net/forum?id=BoiXvrwtdi)
