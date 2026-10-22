---
title: "Adaptive Friend Agent: Personalized Multi-User Memory for Conversational AI"
title_zh: 自适应朋友智能体：面向对话AI的个性化多用户记忆
authors: "Mohammad Al-Ratrout, Pavan Uttej Ravva, Aditya Raikwar, Roghayeh Leila Barmaki"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=wKTwm7ZzDK"
tags: ["query:agent-memory"]
score: 9.0
evidence: 面向对话智能体的个性化多用户会话记忆
tldr: 现有对话AI多面向单用户设计，难以应对真实的多用户长期交互场景。作者提出自适应朋友智能体AFA，融合说话人识别以区分用户，从按用户划分的向量数据库中检索相关会话记忆，并由大模型生成个性化回复。为训练与评测，构建了含5.8万余轮对话的合成数据集PAT，模拟基于人设的人机交流，为多用户会话记忆研究提供了框架与基准。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 现有对话AI多为单用户设计，难以支持真实场景下的多用户长期交互。
method: 融合说话人识别、按用户划分的向量库会话记忆检索与大模型生成，并构建PAT合成数据集。
result: 系统可区分多用户并检索各自的会话记忆以生成个性化回复，并在5.8万余轮数据上验证。
conclusion: 为多用户对话智能体的长期个性化记忆提供了完整框架与评测基准。
---

## Abstract
Most conversational AI systems today are designed to engage a single user, which limits their effectiveness in real-world, multi-user settings. This work presents the Adaptive Friend Agent (AFA), a personalized conversational agent framework that supports long-term, user-specific interaction across multiple individuals. AFA integrates off-the-shelf speaker recognition to distinguish users by voice, retrieves relevant conversational memory from a per-user vector database, and generates personalized responses using a large language model (LLM). To train and evaluate the system, Personalized Agent chaT (PAT) is introduced, a large-scale synthetic dataset simulating human-AI persona-grounded conversations. PAT includes over 58,000 dialogue turns covering diverse scenarios and user profiles. Experimental results show that AFA, when fine-tuned using PAT with the LLaMA-70B model, outperforms strong commercial and ablated baselines on BLEU and ROGUE metrics. Ablation studies confirm the critical role of the memory module and speaker identification in supporting coherent and personalized dialogue. AFA represents a practical step toward scalable conversational agents capable of adapting to individual users in shared environments.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向对话智能体的个性化多用户会话记忆。

### 2. 核心内容
现有对话AI多面向单用户设计，难以应对真实的多用户长期交互场景。作者提出自适应朋友智能体AFA，融合说话人识别以区分用户，从按用户划分的向量数据库中检索相关会话记忆，并由大模型生成个性化回复。为训练与评测，构建了含5.8万余轮对话的合成数据集PAT，模拟基于人设的人机交流，为多用户会话记忆研究提供了框架与基准。

### 3. 对应检索需求
conversational memory for dialogue agents。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=wKTwm7ZzDK](https://openreview.net/forum?id=wKTwm7ZzDK)
