---
title: Evaluating Memory in LLM Agents via Incremental Multi-Turn Interactions
title_zh: 通过增量多轮交互评估LLM智能体的记忆
authors: "Yuanzhe Hu, Yu Wang, Julian McAuley"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=DT7JyQC3MR"
tags: ["query:agent-memory"]
score: 9.0
evidence: 评估智能体记忆检索更新与长期存储的基准
tldr: 现有LLM智能体基准多关注推理、规划与执行，而对记忆即智能体如何记忆、更新与检索长期信息缺乏评测。作者基于记忆科学与认知科学理论，提出准确检索、测试时学习、长程理解与选择性遗忘四项核心能力，并构建基于增量多轮交互的记忆评测基准。该工作填补了智能体记忆评测的空白，为长期记忆的存储、更新与检索研究提供了统一衡量标准。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 现有智能体基准忽视记忆能力，缺乏对记忆、更新与长期检索的系统评测。
method: 基于记忆科学提出四项记忆能力，构建增量多轮交互的记忆评测基准。
result: 基准覆盖准确检索、测试时学习、长程理解与选择性遗忘等核心记忆能力。
conclusion: 为智能体长期记忆的存储与检索研究提供了统一评测框架。
---

## Abstract
Recent benchmarks for Large Language Model (LLM) agents primarily focus on evaluating reasoning, planning, and execution capabilities, while another critical component—memory, encompassing how agents memorize, update, and retrieve long-term information—is under-evaluated due to the lack of benchmarks. We term agents with memory mechanisms as memory agents.  In this paper, based on classic theories from memory science and cognitive science, we identify four core competencies essential for memory agents: accurate retrieval, test-time learning, long-range understanding, and selective forgetting. Existing benchmarks either rely on limited context lengths or are tailored for static, long-context settings like book-based QA, which do not reflect the interactive, multi-turn nature of memory agents that incrementally accumulate information. Moreover, no existing benchmarks
cover all four competencies.  We introduce MemoryAgentBench, a new benchmark specifically designed for memory agents. Our benchmark transforms existing long-context datasets and incorporates newly constructed datasets into a multi-turn format, effectively simulating the incremental information processing characteristic of memory agents. By carefully selecting and curating datasets, our benchmark provides comprehensive coverage of the four core memory competencies outlined above, thereby offering a systematic and challenging testbed for assessing memory quality. 
We evaluate a diverse set of memory agents, ranging from simple context-based and retrieval-augmented generation (RAG) systems to advanced agents with external memory modules and tool integration. Empirical results reveal that current methods fall short of mastering all four competencies, underscoring the need for further research into comprehensive memory mechanisms for LLM agents.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
评估智能体记忆检索更新与长期存储的基准。

### 2. 核心内容
现有LLM智能体基准多关注推理、规划与执行，而对记忆即智能体如何记忆、更新与检索长期信息缺乏评测。作者基于记忆科学与认知科学理论，提出准确检索、测试时学习、长程理解与选择性遗忘四项核心能力，并构建基于增量多轮交互的记忆评测基准。该工作填补了智能体记忆评测的空白，为长期记忆的存储、更新与检索研究提供了统一衡量标准。

### 3. 对应检索需求
how agents store retrieve and update long term memory。

### 4. 来源与原文
- Source：ICLR-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=DT7JyQC3MR](https://openreview.net/forum?id=DT7JyQC3MR)
