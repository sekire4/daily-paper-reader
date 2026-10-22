---
title: "AssoMem: Scalable Memory QA with Multi-Signal Associative Retrieval"
title_zh: AssoMem：基于多信号联想检索的可扩展记忆问答
authors: "Kai Zhang, Xinyuan Zhang, Ejaz Ahmed, Hongda Jiang, Caleb Kumar, Kai Sun, Zhaojiang Lin, Sanat Sharma, Shereen Oraby, AARON COLAK, Ahmed A Aly, Anuj Kumar, Xiaozhong Liu, Xin Luna Dong"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=ZCjWUBwCwE"
tags: ["query:agent-memory"]
score: 9.0
evidence: 面向对话问答的联想记忆检索
tldr: 记忆增强助手在大规模记忆中准确召回信息仍是难题，尤其在相似度密集场景下仅靠语义距离检索效果有限。本文提出AssoMem框架，将对话话语锚定到自动抽取的线索构建联想记忆图，并融合相关性、重要性与时间对齐等多维信号进行排序。实验表明该方法提升了对话记忆问答的召回准确性，为对话智能体记忆检索提供了新方案。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 记忆增强助手在大规模相似度密集记忆中的准确召回仍是核心难题。
method: 提出AssoMem，构建联想记忆图并用互信息驱动的多信号融合进行排序检索。
result: 实验显示融合相关性、重要性与时间信号提升了对话记忆问答的召回效果。
conclusion: 为对话智能体的长期记忆组织与检索提供了联想式多信号框架。
---

## Abstract
Accurate recall from large-scale memories remains a core challenge for memory-augmented AI assistants performing question answering (QA), especially in similarity-dense scenarios where existing methods mainly rely on semantic distance to the query for retrieval. Inspired by how humans link information associatively, we propose AssoMem, a novel framework constructing an associative memory graph that anchors dialogue utterances to automatically extracted clues. This structure provides a rich organizational view of the conversational context and facilitates importance-aware ranking. Further, AssoMem integrates multi-dimensional retrieval signals—relevance, importance, and temporal alignment—using an adaptive mutual information (MI)-driven fusion strategy. Extensive experiments across three benchmarks and a newly introduced dataset, MeetingQA, demonstrate that AssoMem consistently outperforms state-of-the-art baselines, verifying its superiority in context-aware memory recall.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向对话问答的联想记忆检索。

### 2. 核心内容
记忆增强助手在大规模记忆中准确召回信息仍是难题，尤其在相似度密集场景下仅靠语义距离检索效果有限。本文提出AssoMem框架，将对话话语锚定到自动抽取的线索构建联想记忆图，并融合相关性、重要性与时间对齐等多维信号进行排序。实验表明该方法提升了对话记忆问答的召回准确性，为对话智能体记忆检索提供了新方案。

### 3. 对应检索需求
conversational memory for dialogue agents。

### 4. 来源与原文
- Source：ICLR-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=ZCjWUBwCwE](https://openreview.net/forum?id=ZCjWUBwCwE)
