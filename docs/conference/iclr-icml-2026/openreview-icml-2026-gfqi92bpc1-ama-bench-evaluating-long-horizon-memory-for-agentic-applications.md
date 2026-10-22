---
title: "AMA-Bench: Evaluating Long-Horizon Memory for Agentic Applications"
title_zh: AMA-Bench：评估智能体应用的长程记忆
authors: "Yujie Zhao, Boqin Yuan, Junbo Huang, Haocheng Yuan, Zhongming Yu, Haozhou Xu, Lanxiang Hu, Abhilash Shankarampeta, Zimeng Huang, Wentao Ni, Yuandong Tian, Jishen Zhao"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf/7ed1b741cbaf7f73630f6eb88e2ab8f95b67d86d.pdf"
tags: ["query:agent-memory"]
score: 9.0
evidence: 面向真实智能体场景的长程记忆评测基准
tldr: 针对现有记忆基准偏重对话、忽视真实智能体连续交互轨迹的问题，提出AMA-Bench长程记忆评测基准。它融合真实应用中的智能体轨迹与专家问答，并构造可扩展至任意长度的合成轨迹与规则问答。研究显示现有方法在真实智能体记忆场景下存在明显不足。该基准为智能体长程记忆系统提供了更贴近实际应用的评估工具。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 现有记忆基准多以对话为中心，而真实智能体记忆是包含状态、动作、观察与工具输出的连续交互轨迹。
method: 提出AMA-Bench基准，结合真实智能体轨迹与专家标注问答，并用可扩展到任意长度的合成轨迹与规则问答进行评测。
result: 研究揭示现有方法在真实长程智能体记忆场景下表现不足。
conclusion: 为智能体长程记忆提供了更贴近真实应用的评测框架，推动相关记忆系统发展。
---

## Abstract
Large Language Models (LLMs) are increasingly used as autonomous agents in complex, long-horizon applications, where effective memory is critical for sustained performance. Yet existing memory benchmarks are largely dialogue-centric, while real agent memory consists of continuous agent-environment interaction trajectories composed of states, actions, observations, and tool outputs. To address this gap, we introduce **AMA-Bench** (**A**gent **M**emory with **A**ny length), a benchmark for evaluating long-horizon memory in realistic agentic settings. AMA-Bench combines real-world agent trajectories from representative applications with expert-curated QA, as well as synthetic trajectories that scale to arbitrary horizons with rule-based QA. Our study shows that existing memory systems underperform because they fail to capture causal and objective information and rely heavily on lossy similarity-based retrieval. We further propose **AMA-Agent**, a memory system based on causality-graph construction and tool-augmented retrieval. AMA-Agent achieves **57.22%** accuracy on AMA-Bench, outperforming the strongest baseline by **11.16%**. Resources are available at: [https://ama-bench.github.io/](https://ama-bench.github.io/).

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向真实智能体场景的长程记忆评测基准。

### 2. 核心内容
针对现有记忆基准偏重对话、忽视真实智能体连续交互轨迹的问题，提出AMA-Bench长程记忆评测基准。它融合真实应用中的智能体轨迹与专家问答，并构造可扩展至任意长度的合成轨迹与规则问答。研究显示现有方法在真实智能体记忆场景下存在明显不足。该基准为智能体长程记忆系统提供了更贴近实际应用的评估工具。

### 3. 对应检索需求
long-term memory storage and retrieval in agent systems。

### 4. 来源与原文
- Source：ICML-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=GfQI92bpC1](https://openreview.net/forum?id=GfQI92bpC1)
