---
title: Auto-scaling Continuous Memory for GUI Agent
title_zh: 面向GUI智能体的自动扩展连续记忆
authors: "Wenyi WU, Kun Zhou, Ruoxin Yuan, Vivian Yu, Stephen Wang, Zhiting Hu, Biwei Huang"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=cvAZKWA1HZ"
tags: ["query:agent-memory"]
score: 9.0
evidence: 面向GUI智能体的可扩展连续记忆架构
tldr: 现有GUI智能体将历史轨迹压缩为文本令牌，导致上下文膨胀并丢失关键的视觉线索，如控件尺寸与位置。作者提出一种连续记忆机制，借助视觉语言模型自身作为编码器，将每条轨迹编码为定长连续嵌入并直接接入主干输入层，从而在显著降低上下文开销的同时保留细粒度视觉信息。实验表明随记忆规模与检索深度增加性能单调提升，并引入自动扩展机制以低成本增长记忆。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: GUI智能体把历史轨迹转为文本令牌导致上下文膨胀且丢失关键视觉线索。
method: 用VLM作编码器将轨迹编码为定长连续嵌入并接入主干输入层，配合自动扩展机制增长记忆。
result: 随记忆规模与检索深度增加性能单调提升，克服文本记忆长提示退化的问题。
conclusion: 为GUI智能体提供可扩展、低成本且保留视觉细节的记忆架构。
---

## Abstract
We study how to endow GUI agents with scalable memory that help generalize across unfamiliar interfaces and long-horizon tasks. Prior GUI agents compress past trajectories into text tokens, which balloons context length and misses decisive visual cues (eg. exact widget size and position). We propose a continuous memory that encodes each GUI trajectory into a fixed-length sequence of continuous embeddings using the VLM itself as an encoder; these embeddings are plugged directly into the backbone’s input layer, sharply reducing context cost while preserving fine-grained visual information. As memory size and retrieval depth increase, performance improves monotonically, unlike text memories that degrade with long prompts. To grow memory at low cost, we introduce an auto-scaling data flywheel that (i) discovers new environments via search, (ii) synthesizes tasks with an open-source VLM, (iii) rolls out trajectories with the agent, and (iv) verifies success with the same VLM. Using this pipeline, we collect 10k trajectories for about \$500 and fine-tune only the memory encoder (LoRA on a Q-Former, 1.2\% parameters) with 1,500 samples. On real-world GUI benchmarks, our memory-augmented agent consistently improves success rates under long horizons and distribution shifts. Notably, Qwen-2.5-VL-7B + continuous memory achieves performance comparable to state-of-the-art closed-source models (eg. GPT-4o, Claude-4).
Our data and code will be publicly released.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向GUI智能体的可扩展连续记忆架构。

### 2. 核心内容
现有GUI智能体将历史轨迹压缩为文本令牌，导致上下文膨胀并丢失关键的视觉线索，如控件尺寸与位置。作者提出一种连续记忆机制，借助视觉语言模型自身作为编码器，将每条轨迹编码为定长连续嵌入并直接接入主干输入层，从而在显著降低上下文开销的同时保留细粒度视觉信息。实验表明随记忆规模与检索深度增加性能单调提升，并引入自动扩展机制以低成本增长记忆。

### 3. 对应检索需求
memory architecture designs for intelligent agents。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=cvAZKWA1HZ](https://openreview.net/forum?id=cvAZKWA1HZ)
