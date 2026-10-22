---
title: "Learn to Memorize: Optimizing LLM-based Agents with Adaptive Memory Framework"
title_zh: 学会记忆：以自适应记忆框架优化LLM智能体
authors: "Zeyu Zhang, Quanyu Dai, Rui Li, Xiaohe Bo, Xu Chen, Zhenhua Dong"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=EQ3TwO84Cs"
tags: ["query:agent-memory"]
score: 9.0
evidence: 为LLM智能体建模记忆循环的自适应数据驱动记忆框架
tldr: 针对LLM智能体记忆机制依赖人工预设、成本高且忽视交互中记忆循环作用的问题，本文提出一种自适应、数据驱动的记忆框架。该方法对记忆循环建模，设计MoE门控函数促进记忆检索，并引入可学习的聚合过程提升记忆利用率。该工作使智能体记忆机制能够针对具体环境自动优化，为记忆系统的自动化设计提供了新思路。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 现有LLM智能体记忆机制多由人工预设，成本高且忽视交互场景中的记忆循环效应。
method: 提出自适应数据驱动记忆框架，建模记忆循环，用MoE门控辅助检索并用可学习聚合提升利用率。
result: 摘要称该框架可针对特定环境优化智能体记忆行为，优于人工预设机制。
conclusion: 该工作推动了智能体记忆机制从手工设计走向可学习优化。
---

## Abstract
LLM-based agents have been extensively applied across various domains, where memory stands out as one of their most essential capabilities. Previous memory mechanisms of LLM-based agents are manually predefined by human experts, leading to higher labor costs and suboptimal performance. In addition, these methods overlook the memory cycle effect in interactive scenarios, which is critical to optimizing LLM-based agents for specific environments. To address these challenges, in this paper, we propose to optimize LLM-based agents with an adaptive and data-driven memory framework by modeling memory cycles. Specifically, we design an MoE gate function to facilitate memory retrieval, propose a learnable aggregation process to improve memory utilization, and develop task-specific reflection to adapt memory storage. Our memory framework empowers LLM-based agents to learn how to memorize information effectively in specific environments, with both off-policy and on-policy optimization. In order to evaluate the effectiveness of our proposed methods, we conduct comprehensive experiments across multiple aspects.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
为LLM智能体建模记忆循环的自适应数据驱动记忆框架。

### 2. 核心内容
针对LLM智能体记忆机制依赖人工预设、成本高且忽视交互中记忆循环作用的问题，本文提出一种自适应、数据驱动的记忆框架。该方法对记忆循环建模，设计MoE门控函数促进记忆检索，并引入可学习的聚合过程提升记忆利用率。该工作使智能体记忆机制能够针对具体环境自动优化，为记忆系统的自动化设计提供了新思路。

### 3. 对应检索需求
memory mechanisms and memory systems for autonomous agents。

### 4. 来源与原文
- Source：ICLR-2026-Public
- OpenReview：[https://openreview.net/forum?id=EQ3TwO84Cs](https://openreview.net/forum?id=EQ3TwO84Cs)
