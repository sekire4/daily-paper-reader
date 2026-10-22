---
title: "ReasoningBank: Scaling Agent Self-Evolving with Reasoning Memory"
title_zh: ReasoningBank：以推理记忆扩展智能体自我进化
authors: "Siru Ouyang, Jun Yan, I-Hung Hsu, Yanfei Chen, Ke Jiang, Zifeng Wang, Rujun Han, Long Le, Samira Daruki, Xiangru Tang, Vishy Tirumalashetty, George Lee, Mahsan Rofouei, Hangfei Lin, Jiawei Han, Chen-Yu Lee, Tomas Pfister"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=jL7fwchScm"
tags: ["query:agent-memory"]
score: 10.0
evidence: 让LLM智能体存储、检索与更新经验的推理记忆框架
tldr: 随着大模型智能体承担长期真实任务，它们会持续遇到大量任务流，但现有智能体无法从累积的交互历史中学习，只能丢弃宝贵经验并重复犯错。作者提出ReasoningBank记忆框架，从智能体自评为成功或失败的经验中蒸馏可泛化的推理策略，测试时检索相关记忆辅助决策并将新经验回写。作者进一步提出记忆感知的测试时扩展以加速能力提升。该工作让智能体能够随时间持续自我进化。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: LLM智能体在长期真实任务中无法从交互历史中学习，反复丢弃有价值经验并重复犯错。
method: 提出ReasoningBank记忆框架，从智能体自评的成功与失败经验中蒸馏可泛化的推理策略，并在测试时检索与回写记忆。
result: 实验表明该框架使智能体随时间不断进化，并配合记忆感知的测试时扩展加速能力提升。
conclusion: 将经验蒸馏为推理记忆可让智能体持续自我进化。
---

## Abstract
With the growing adoption of large language model agents in persistent real-world roles, they naturally encounter continuous streams of tasks. A key limitation, however, is their failure to learn from the accumulated interaction history, forcing them to discard valuable insights and repeat past errors. We propose ReasoningBank, a novel memory framework that distills generalizable reasoning strategies from an agent's self-judged successful and failed experiences. At test time, an agent retrieves relevant memories from ReasoningBank to inform its interaction and then integrates new learnings back, enabling it to become more capable over time. Building on this powerful experience learner, we further introduce memory-aware test-time scaling (MaTTS), which accelerates and diversifies this learning process by scaling up the agent's interaction experience. By allocating more compute to each task, the agent generates abundant, diverse experiences that provide rich contrastive signals for synthesizing higher-quality memory. The better memory in turn guides more effective scaling, establishing a powerful synergy between memory and test-time scaling. Across web browsing and software engineering benchmarks, ReasoningBank consistently outperforms existing memory mechanisms that store raw trajectories or only successful task routines, improving both effectiveness and efficiency; MaTTS further amplifies these gains. These findings establish memory-driven experience scaling as a new scaling dimension, enabling agents to self-evolve with emergent behaviors naturally arise. Our code can be found at https://github.com/google-research/reasoning-bank.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
让LLM智能体存储、检索与更新经验的推理记忆框架。

### 2. 核心内容
随着大模型智能体承担长期真实任务，它们会持续遇到大量任务流，但现有智能体无法从累积的交互历史中学习，只能丢弃宝贵经验并重复犯错。作者提出ReasoningBank记忆框架，从智能体自评为成功或失败的经验中蒸馏可泛化的推理策略，测试时检索相关记忆辅助决策并将新经验回写。作者进一步提出记忆感知的测试时扩展以加速能力提升。该工作让智能体能够随时间持续自我进化。

### 3. 对应检索需求
memory mechanisms and memory systems for autonomous agents。

### 4. 来源与原文
- Source：ICLR-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=jL7fwchScm](https://openreview.net/forum?id=jL7fwchScm)
