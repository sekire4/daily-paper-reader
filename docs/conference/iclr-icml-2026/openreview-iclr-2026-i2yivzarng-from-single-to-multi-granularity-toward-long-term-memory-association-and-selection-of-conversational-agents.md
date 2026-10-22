---
title: "From Single to Multi-Granularity: Toward Long-Term Memory Association and Selection of Conversational Agents"
title_zh: 从单一到多粒度：面向对话智能体长期记忆的关联与选择
authors: "Derong Xu, Yi Wen, Pengyue Jia, Yingyi Zhang, Wenlin Zhang, Yichao Wang, Huifeng Guo, Ruiming Tang, Xiangyu Zhao, Enhong Chen, Tong Xu"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=i2yIvZARnG"
tags: ["query:agent-memory"]
score: 10.0
evidence: 面向对话智能体的长期记忆关联与选择
tldr: 对话智能体在长程交互中积累大量对话记录，受限于上下文窗口难以维持连贯的长期记忆并给出个性化回复。现有检索增强记忆系统多依赖单一粒度的记忆切分与检索，难以捕捉深层记忆关联。作者提出MemGAS，实现多粒度记忆关联与选择，减少信息漏检与噪声，提升了对话记忆表现。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 单粒度记忆切分与检索难以捕捉深层关联，导致信息漏检或噪声过多。
method: 提出MemGAS，对对话记忆进行多粒度的关联建模与选择检索。
result: 多粒度记忆机制提升了长期对话记忆的连贯性与个性化回复质量。
conclusion: 为对话智能体长期记忆系统设计提供了多粒度新思路。
---

## Abstract
Large Language Models (LLMs) have recently been widely adopted in conversational agents. However, the increasingly long interactions between users and agents accumulate extensive dialogue records, making it difficult for LLMs with limited context windows to maintain a coherent long-term dialogue memory and deliver personalized responses. While retrieval-augmented memory systems have emerged to address this issue, existing methods often depend on single-granularity memory segmentation and retrieval. This approach falls short in capturing deep memory connections, leading to partial retrieval of useful information or substantial noise, resulting in suboptimal performance. To tackle these limits, we propose MemGAS, a framework that enhances memory consolidation by constructing multi-granularity association, adaptive selection, and retrieval. MemGAS is based on multi-granularity memory units and employs Gaussian Mixture Models to cluster and associate new memories with historical ones. An entropy-based router adaptively selects optimal granularity by evaluating query relevance distributions and balancing information completeness and noise. Retrieved memories are further refined via LLM-based filtering. Experiments on four long-term memory benchmarks demonstrate that MemGAS outperforms state-of-the-art methods on both question answer and retrieval tasks, achieving superior performance across different query types and top-K settings\footnote{https://github.com/Applied-Machine-Learning-Lab/ICLR2026\_MemGAS}.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向对话智能体的长期记忆关联与选择。

### 2. 核心内容
对话智能体在长程交互中积累大量对话记录，受限于上下文窗口难以维持连贯的长期记忆并给出个性化回复。现有检索增强记忆系统多依赖单一粒度的记忆切分与检索，难以捕捉深层记忆关联。作者提出MemGAS，实现多粒度记忆关联与选择，减少信息漏检与噪声，提升了对话记忆表现。

### 3. 对应检索需求
conversational memory for dialogue agents。

### 4. 来源与原文
- Source：ICLR-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=i2yIvZARnG](https://openreview.net/forum?id=i2yIvZARnG)
