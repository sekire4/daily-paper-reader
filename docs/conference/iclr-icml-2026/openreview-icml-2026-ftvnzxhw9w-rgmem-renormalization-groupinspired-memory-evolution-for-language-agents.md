---
title: "RGMem: Renormalization Group–inspired Memory Evolution for Language Agents"
title_zh: RGMem：受重整化群启发的语言智能体记忆演化
authors: "Ao Tian, Yunfeng Lu, Xinxin Fan, Changhao Wang, Lanzhi Zhou, Yeyao Zhang, Yanfang Liu"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf/a9944c66058e0655a6bd75242b0d62071a06444d.pdf"
tags: ["query:agent-memory"]
score: 9.0
evidence: 面向对话智能体的长期跨会话对话记忆
tldr: 对话智能体受限于有限上下文窗口与静态参数记忆，难以建模跨会话的长期用户状态，现有RAG与显式记忆多在事实层面运作，难以提炼稳定偏好。作者提出RGMem，借鉴重整化群的多尺度组织思想，将长期对话记忆建模为从情节交互到高层特征的演化过程。该框架可自演化地整合冲突信息并提炼深层用户特质，为个性化持续对话提供了新的记忆架构。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 有限上下文与事实级记忆难以从长期对话中提炼稳定偏好与深层用户特质。
method: 借鉴重整化群思想，将长期对话记忆建模为多尺度自演化的组织与涌现过程。
result: 实验表明该框架能有效整合演化且冲突的对话信息，刻画长期跨会话用户状态。
conclusion: 多尺度记忆演化是构建个性化持续对话智能体的有效架构方向。
---

## Abstract
Personalized and continuous interactions are critical for LLM-based conversational agents, yet finite context windows and static parametric memory hinder the modeling of long-term, cross-session user states. Existing approaches, including retrieval-augmented generation and explicit memory systems, primarily operate at the fact level, making it difficult to distill stable preferences and deep user traits from evolving and potentially conflicting dialogues.To address this challenge, we propose RGMem, a self-evolving memory framework inspired by the renormalization group (RG) perspective on multi-scale organization and emergence. RGMem models long-term conversational memory as a multi-scale evolutionary process: episodic interactions are transformed into semantic facts and user insights, which are then progressively integrated through hierarchical coarse-graining, thresholded updates, and rescaling into a dynamically evolving user profile.By explicitly separating fast-changing evidence from slow-varying traits and enabling non-linear, phase-transition-like dynamics, RGMem enables robust personalization beyond flat retrieval or static summarization. Extensive experiments on the LOCOMO and PersonaMem benchmarks demonstrate that RGMem consistently outperforms SOTA memory systems, achieving stronger cross-session continuity and improved adaptation to evolving user preferences.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向对话智能体的长期跨会话对话记忆。

### 2. 核心内容
对话智能体受限于有限上下文窗口与静态参数记忆，难以建模跨会话的长期用户状态，现有RAG与显式记忆多在事实层面运作，难以提炼稳定偏好。作者提出RGMem，借鉴重整化群的多尺度组织思想，将长期对话记忆建模为从情节交互到高层特征的演化过程。该框架可自演化地整合冲突信息并提炼深层用户特质，为个性化持续对话提供了新的记忆架构。

### 3. 对应检索需求
conversational memory for dialogue agents。

### 4. 来源与原文
- Source：ICML-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=FtvNZxhW9W](https://openreview.net/forum?id=FtvNZxhW9W)
