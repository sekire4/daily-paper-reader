---
title: Latent Collaboration in Multi-Agent Systems
title_zh: 多智能体系统中的潜在协作
authors: "Jiaru Zou, Ruizhong Qiu, Gaotang Li, Xiyuan Yang, Katherine Tieu, Pan Lu, Ke Shen, Hanghang Tong, Yejin Choi, Jingrui He, James Zou, Mengdi Wang, Ling Yang"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf/15bee174811cf963d2bb355c7908653b26d4a7ff.pdf"
tags: ["query:agent-memory"]
score: 8.0
evidence: 共享潜在工作记忆保存并传递智能体内部表示
tldr: 现有多智能体系统依赖文本中介进行推理与通信，存在信息损失与开销。论文提出LatentMAS，一种端到端免训练框架，让智能体在连续潜在空间中直接协作：各智能体通过末层隐藏嵌入进行自回归潜在思维生成，并借助共享潜在工作记忆保存与传递内部表示，实现无需重编码的无损信息交换，为多智能体工作记忆机制提供了新思路。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 现有多智能体系统依赖文本中介通信，存在信息损失与效率问题。
method: 提出LatentMAS免训练框架，用共享潜在工作记忆实现智能体间无损信息交换。
result: 该方法支持纯潜在协作与无损表示传递，提升多智能体协同推理。
conclusion: 为多智能体系统提供了基于工作记忆的潜在协作范式。
---

## Abstract
Multi-agent systems (MAS) extend large language models (LLMs) from independent single-model reasoning to coordinative system-level intelligence. While existing LLM agents depend on text-based mediation for reasoning and communication, we take a step forward by enabling models to collaborate directly within the continuous latent space. We introduce LatentMAS, an end-to-end training-free framework that enables pure latent collaboration among LLM agents. In LatentMAS, each agent first performs auto-regressive latent thoughts generation through last-layer hidden embeddings instead of text. Then, a shared latent working memory preserves and transfers each agent's internal representations and latent thoughts, ensuring lossless information exchange without re-encoding. We provide detailed theoretical analyses showing that LatentMAS achieves higher expressiveness and lossless information preservation with lower overall complexity than standard text-based MAS. In addition, empirical evaluations across 9 comprehensive benchmarks spanning math and science reasoning, commonsense understanding, and code generation show that LatentMAS outperforms advanced single agents and text-based MAS baselines, achieving up to 14.6\% higher accuracy, reducing output token usage by 70.8\%-83.7\%, and providing 4$\times$-4.3$\times$ faster end-to-end inference.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
共享潜在工作记忆保存并传递智能体内部表示。

### 2. 核心内容
现有多智能体系统依赖文本中介进行推理与通信，存在信息损失与开销。论文提出LatentMAS，一种端到端免训练框架，让智能体在连续潜在空间中直接协作：各智能体通过末层隐藏嵌入进行自回归潜在思维生成，并借助共享潜在工作记忆保存与传递内部表示，实现无需重编码的无损信息交换，为多智能体工作记忆机制提供了新思路。

### 3. 对应检索需求
working memory mechanisms for agent reasoning。

### 4. 来源与原文
- Source：ICML-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=syG9I9ofd8](https://openreview.net/forum?id=syG9I9ofd8)
