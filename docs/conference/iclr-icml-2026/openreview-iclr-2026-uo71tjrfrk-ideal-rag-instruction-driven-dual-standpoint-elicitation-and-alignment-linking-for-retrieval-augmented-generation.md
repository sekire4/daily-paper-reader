---
title: "IDEAL-RAG: Instruction-driven Dual-standpoint Elicitation and Alignment Linking for Retrieval Augmented Generation"
title_zh: IDEAL-RAG：指令驱动的双视角激发与对齐链接检索增强生成
authors: "Ssu-Cheng Wang, Hung-Yu Kao"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=Uo71tJRfrk"
tags: ["query:rag-papers"]
score: 9.0
evidence: 平衡内部记忆与检索文本以抑制幻觉
tldr: 检索增强生成虽为大语言模型引入外部证据，但微小的检索噪声或对抗性改写即可覆盖参数知识并诱发幻觉，而现有方法多聚焦上下文去噪，鲜有显式平衡内部记忆与检索文本。IDEAL-RAG提出三阶段、指令驱动的框架：先激发潜在知识，再由内部记忆与检索段落形成独立视角，最后交叉核验并生成可追溯的推理依据。在标准开放域问答设置下，该方法在干净检索条件下与强基线持平，并在噪声条件下展现鲁棒性。该工作无需修改检索器或额外标注，为平衡参数知识与外部证据提供了通用方案。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 检索噪声或对抗改写易覆盖模型参数知识并诱发幻觉，已有方法多只做上下文去噪，缺少内部记忆与检索文本的平衡。
method: 提出三阶段指令驱动框架：激发潜在知识、由内部记忆与检索段落形成独立视角并交叉核验，生成可追溯依据。
result: 在标准开放域问答中于干净检索条件下与强基线持平，并在噪声与对抗条件下保持鲁棒。
conclusion: 无需修改检索器或额外标注即可平衡参数知识与外部证据，提升检索增强生成的可靠性与可解释性。
---

## Abstract
Retrieval-augmented generation (RAG) equips large language models (LLMs) with external evidence, yet even minor retrieval noise or adversarial edits can override parametric knowledge and trigger hallucinations. Prior work mainly denoises contexts; far fewer methods explicitly balance internal memory with retrieved text. We present IDEAL-RAG, a three-stage, instruction-driven framework that (i) elicits latent knowledge, (ii) forms independent standpoints from internal memory and retrieved passages, and (iii) cross-checks them to produce a traceable rationale—without modifying retrievers or requiring additional labels. Across standard open-domain QA settings, IDEAL-RAG matches strong baselines on clean retrieval and, under adversarial counterfactual contexts, improves exact-match by up to +22.8\% while roughly halving accuracy loss. Mechanistic analyses explain the gains: a Counterfactual Sensitivity Score (CSS) shows smaller confidence swings, and a layer-wise Parametric Knowledge Score (PKS) reveals steadier reliance on internal memory; ablations further identify parametric-knowledge elicitation as the primary driver of robustness. These results indicate that deliberate negotiation between what an LLM knows and what it reads yields more dependable RAG systems.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
平衡内部记忆与检索文本以抑制幻觉。

### 2. 核心内容
检索增强生成虽为大语言模型引入外部证据，但微小的检索噪声或对抗性改写即可覆盖参数知识并诱发幻觉，而现有方法多聚焦上下文去噪，鲜有显式平衡内部记忆与检索文本。IDEAL-RAG提出三阶段、指令驱动的框架：先激发潜在知识，再由内部记忆与检索段落形成独立视角，最后交叉核验并生成可追溯的推理依据。在标准开放域问答设置下，该方法在干净检索条件下与强基线持平，并在噪声条件下展现鲁棒性。该工作无需修改检索器或额外标注，为平衡参数知识与外部证据提供了通用方案。

### 3. 对应检索需求
hallucination mitigation using retrieved external knowledge。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=Uo71tJRfrk](https://openreview.net/forum?id=Uo71tJRfrk)
