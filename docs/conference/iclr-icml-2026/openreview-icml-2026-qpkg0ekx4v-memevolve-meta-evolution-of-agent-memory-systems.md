---
title: "MemEvolve: Meta-Evolution of Agent Memory Systems"
title_zh: MemEvolve：智能体记忆系统的元演化
authors: "Guibin Zhang, Haotian Ren, Chong Zhan, Junhao Wang, He Zhu, Wangchunshu Zhou, Shuicheng YAN"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf/1e41a1afd50901e4fabd439045aa390f5d0448f8.pdf"
tags: ["query:agent-memory"]
score: 9.0
evidence: 智能体记忆架构设计的元演化
tldr: 自演化记忆系统正重塑LLM智能体的进化范式，但以往工作多依赖人工设计的记忆架构来存储轨迹、提炼经验，记忆系统本身无法随任务情境元适应。作者提出MemEvolve，一个元演化框架，联合演化智能体的经验知识与底层记忆架构。该方法使智能体不仅能积累经验，还能自适应地重构其记忆组织方式，在多样任务上取得更好表现，为记忆架构设计开辟了自动化路径。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 人工设计的记忆架构静态固定，无法针对多样任务情境进行元适应。
method: 提出元演化框架，联合演化智能体的经验知识与底层记忆架构。
result: 实验表明联合演化使智能体在多样任务上同时提升经验积累与记忆组织效率。
conclusion: 记忆架构本身可被元演化，为自主智能体记忆系统设计提供自动化范式。
---

## Abstract
Self-evolving memory systems are rapidly reshaping the evolutionary paradigm of large language model (LLM)-based agents. Prior work has predominantly relied on manually engineered memory architectures to store trajectories, distill experience, and synthesize reusable tools, enabling agents to evolve on the fly within environment interactions. However, this paradigm is fundamentally constrained by the \textit{staticity} of the memory system itself: while memory facilitates agent-level evolving, the underlying memory architecture cannot be meta-adapted to diverse task contexts. To address this gap, we propose MemEvolve, a meta-evolutionary framework that jointly evolves agents’ experiential knowledge and their memory architecture, allowing agent systems not only to accumulate experience but also to progressively refine how they learn from it. To ground MemEvolve in prior work and promote openness in future self-evolving systems, we introduce EvolveLab, a unified memory codebase that distills twelve representative memory systems into a modular design space (\textit{encode}, \textit{store}, \textit{retrieve}, \textit{manage}), providing a standardized implementation substrate and a fair experimental arena. Extensive evaluations on four challenging agentic benchmarks show that MemEvolve delivers (i) substantial performance gains, improving frameworks such as SmolAgent and Flash-Searcher by up to $17.06\%$, and (ii) strong cross-task and cross-LLM generalization, yielding memory architectures that transfer effectively across diverse benchmarks and backbones.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
智能体记忆架构设计的元演化。

### 2. 核心内容
自演化记忆系统正重塑LLM智能体的进化范式，但以往工作多依赖人工设计的记忆架构来存储轨迹、提炼经验，记忆系统本身无法随任务情境元适应。作者提出MemEvolve，一个元演化框架，联合演化智能体的经验知识与底层记忆架构。该方法使智能体不仅能积累经验，还能自适应地重构其记忆组织方式，在多样任务上取得更好表现，为记忆架构设计开辟了自动化路径。

### 3. 对应检索需求
memory architecture designs for intelligent agents。

### 4. 来源与原文
- Source：ICML-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=qpkG0eKx4v](https://openreview.net/forum?id=qpkG0eKx4v)
