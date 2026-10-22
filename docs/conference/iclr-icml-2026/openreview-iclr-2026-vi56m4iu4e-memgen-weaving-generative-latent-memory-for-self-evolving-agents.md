---
title: "MemGen: Weaving Generative Latent Memory for Self-Evolving Agents"
title_zh: MemGen：为自演化智能体编织生成式潜在记忆
authors: "Guibin Zhang, Muxin Fu, Shuicheng YAN"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=vI56m4Iu4e"
tags: ["query:agent-memory"]
score: 9.0
evidence: 面向自演化LLM智能体的生成式潜在记忆框架
tldr: 针对参数化记忆与检索式记忆均无法刻画推理与记忆交融的问题，提出生成式动态记忆框架MemGen。它由监测推理状态并决定是否调用记忆的触发器，以及以当前状态为刺激生成记忆的记忆编织器组成。该方法让智能体在环境交互中动态编织记忆并自我演化。为LLM智能体的记忆机制提供了更接近人类认知的新范式。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 现有参数化记忆与检索式记忆都无法刻画人类认知中推理与记忆的交织。
method: 提出MemGen生成式动态记忆框架，包含监测推理状态以决定记忆调用的触发器，以及将当前状态作为刺激的记忆编织器。
result: 使智能体在环境交互中动态生成与调用记忆，提升自我演化能力。
conclusion: 为智能体记忆提供更接近人类认知的生成式建模范式。
---

## Abstract
Agent memory shapes how Large Language Model (LLM)-powered agents, akin to the human brain, progressively refine themselves through environment interactions. Existing paradigms remain constrained: parametric memory forcibly adjusts model parameters, and retrieval-based memory externalizes experience into structured databases, yet neither captures the fluid interweaving of reasoning and memory that underlies human cognition. To address this gap, we propose MemGen, a dynamic generative memory framework that equips agents with a human-esque cognitive faculty. It consists of a \textit{memory trigger}, which monitors the agent’s reasoning state to decide explicit memory invocation, and a \textit{memory weaver}, which takes the agent's current state as stimulus to construct a latent token sequence as machine-native memory to enrich its reasoning. In this way, MemGen enables agents to recall and augment latent memory throughout reasoning, producing a tightly interwoven cycle of memory and cognition. Extensive experiments across eight benchmarks show that MemGen surpasses leading external memory systems such as ExpeL and AWM by up to $38.22\\%$, exceeds GRPO by up to $13.44\\%$, and exhibits strong cross-domain generalization ability. More importantly, we find that without explicit supervision, MemGen spontaneously evolves distinct human-like memory faculties, including planning memory, procedural memory, and working memory, suggesting an emergent trajectory toward more naturalistic forms of machine cognition.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向自演化LLM智能体的生成式潜在记忆框架。

### 2. 核心内容
针对参数化记忆与检索式记忆均无法刻画推理与记忆交融的问题，提出生成式动态记忆框架MemGen。它由监测推理状态并决定是否调用记忆的触发器，以及以当前状态为刺激生成记忆的记忆编织器组成。该方法让智能体在环境交互中动态编织记忆并自我演化。为LLM智能体的记忆机制提供了更接近人类认知的新范式。

### 3. 对应检索需求
memory mechanisms and memory systems for autonomous agents。

### 4. 来源与原文
- Source：ICLR-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=vI56m4Iu4e](https://openreview.net/forum?id=vI56m4Iu4e)
