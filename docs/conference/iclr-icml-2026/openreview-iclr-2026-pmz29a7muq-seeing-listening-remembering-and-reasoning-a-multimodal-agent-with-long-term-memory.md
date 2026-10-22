---
title: "Seeing, Listening, Remembering, and Reasoning: A Multimodal Agent with Long-Term Memory"
title_zh: 看、听、记与推理：具备长期记忆的多模态智能体
authors: "Lin Long, Yichen He, Wentao Ye, Yiyuan Pan, Yuan Lin, Hang Li, Junbo Zhao, Wei Li"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=PMz29A7Muq"
tags: ["query:agent-memory"]
score: 10.0
evidence: 具备长期情景与语义记忆的多模态自主智能体
tldr: 自主智能体需在长时交互中积累并利用记忆。作者提出M3-Agent多模态智能体框架，能处理实时视觉与听觉输入，构建并更新以实体为中心的情景与语义记忆，逐步积累世界知识，并自主进行多轮推理检索相关记忆完成任务。为评估记忆有效性，作者构建了M3-Bench长视频问答基准。该工作为多模态智能体的长期记忆机制与记忆推理评测提供了新框架。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 自主智能体需处理实时多模态输入并在长时交互中积累与更新记忆。
method: 提出M3-Agent，构建以实体为中心的情景与语义长期记忆并自主检索进行多轮推理。
result: 构建M3-Bench长视频问答基准以评估记忆有效性与基于记忆的推理。
conclusion: 为多模态智能体的长期记忆机制与评测提供了新框架。
---

## Abstract
We introduce M3-Agent, a novel multimodal agent framework equipped with long-term memory. Like humans, M3-Agent can process real-time visual and auditory inputs to build and update episodic and semantic memories, gradually accumulating world knowledge. Its memory is organized in an entity-centric, multimodal manner, enabling deeper and more consistent understanding of the environment. Given an instruction, M3-Agent autonomously performs multi-turn reasoning and retrieves relevant memories to complete tasks. To evaluate memory effectiveness and memory-based reasoning in multimodal agents, we develop M3-Bench, a long-video question answering benchmark comprising 100 newly recorded robot-perspective videos (M3-Bench-robot) and 920 diverse web-sourced videos (M3-Bench-web). We annotate QA pairs designed to test capabilities essential for agent applications, such as person understanding, general knowledge extraction, and cross-modal reasoning. Experimental results show that M3-Agent, trained via reinforcement learning, outperforms the strongest baseline, a prompting agent using Gemini-1.5-pro and GPT-4o, achieving 6.7%, 7.7%, and 5.3% higher accuracy on M3-Bench-robot, M3-Bench-web and VideoMME-long, respectively. Our work advances multimodal agents toward more human-like long-term memory and provides insights for their practical design. Models, datasets and code are available at https://github.com/ByteDance-Seed/m3-agent.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
具备长期情景与语义记忆的多模态自主智能体。

### 2. 核心内容
自主智能体需在长时交互中积累并利用记忆。作者提出M3-Agent多模态智能体框架，能处理实时视觉与听觉输入，构建并更新以实体为中心的情景与语义记忆，逐步积累世界知识，并自主进行多轮推理检索相关记忆完成任务。为评估记忆有效性，作者构建了M3-Bench长视频问答基准。该工作为多模态智能体的长期记忆机制与记忆推理评测提供了新框架。

### 3. 对应检索需求
memory mechanisms and memory systems for autonomous agents。

### 4. 来源与原文
- Source：ICLR-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=PMz29A7Muq](https://openreview.net/forum?id=PMz29A7Muq)
