---
title: "SGMem: Sentence Graph Memory for Long-Term Conversational Agents"
title_zh: SGMem：面向长期对话智能体的句子图记忆
authors: "Yaxiong Wu, Yongyue Zhang, Sheng Liang, Yong Liu"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=r5BbGRXU77"
tags: ["query:agent-memory"]
score: 10.0
evidence: 面向对话智能体的长期记忆管理与检索
tldr: 长期对话智能体需管理超出上下文窗口的对话历史，现有基于事实抽取或摘要的方法难以跨粒度组织与检索信息。作者提出SGMem句子图记忆，将对话表示为分块内的句子级图，捕捉轮次、回合与会话级关联，并结合原始对话与摘要、事实等生成记忆。在LongMemEval与LoCoMo上的实验显示其能提供连贯相关的上下文，显著提升长期对话表现。该工作为智能体长期记忆的组织与检索提供了新范式。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 长期对话智能体难以在超出上下文窗口时有效组织与检索跨粒度对话记忆。
method: 提出句子图记忆，将对话表示为分块内句子级图，融合原始对话与生成的摘要、事实等记忆。
result: 在LongMemEval与LoCoMo基准上验证其能为生成提供连贯相关的上下文并提升表现。
conclusion: 为长期对话智能体的记忆组织与检索提供了有效的新方法。
---

## Abstract
Long-term conversational agents require effective memory management to handle dialogue histories that exceed the context window of large language models (LLMs). Existing methods based on fact extraction or summarization reduce redundancy but struggle to organize and retrieve relevant information across different granularities of dialogue and generated memory. We introduce SGMem (Sentence Graph Memory), which represents dialogue as sentence-level graphs within chunked units, capturing associations across turn-, round-, and session-level contexts. By combining retrieved raw dialogue with generated memory such as summaries，facts and insights, SGMem supplies LLMs with coherent and relevant context for response generation. Experiments on LongMemEval and LoCoMo show that SGMem consistently improves accuracy and outperforms strong baselines in long-term conversational question answering.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向对话智能体的长期记忆管理与检索。

### 2. 核心内容
长期对话智能体需管理超出上下文窗口的对话历史，现有基于事实抽取或摘要的方法难以跨粒度组织与检索信息。作者提出SGMem句子图记忆，将对话表示为分块内的句子级图，捕捉轮次、回合与会话级关联，并结合原始对话与摘要、事实等生成记忆。在LongMemEval与LoCoMo上的实验显示其能提供连贯相关的上下文，显著提升长期对话表现。该工作为智能体长期记忆的组织与检索提供了新范式。

### 3. 对应检索需求
long-term memory storage and retrieval in agent systems。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=r5BbGRXU77](https://openreview.net/forum?id=r5BbGRXU77)
