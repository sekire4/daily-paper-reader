---
title: "AdaMEM: Test-Time Adaptive Memory for Language Agents"
title_zh: AdaMEM：面向语言智能体的测试时自适应记忆
authors: "Yunxiang Zhang, Yiheng Li, Ali Payani, Lu Wang"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf/60e7619ab7b16364061f0571b8a63f278434cf41.pdf"
tags: ["query:agent-memory"]
score: 10.0
evidence: 面向测试时智能体自适应的长短时混合记忆
tldr: 语言智能体在动态测试时条件下难以利用过往经验，现有记忆机制多仅在回合开始时检索，导致长程任务中静态指导逐渐失配。作者提出自适应记忆智能体AdaMEM，在不更新模型参数的条件下，通过混合记忆架构同时维护离线收集的长程轨迹记忆与在线生成的短期策略记忆，实时指导决策。该机制使智能体在长程任务中持续自适应，为测试时记忆利用提供了新范式。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 现有智能体记忆多仅在回合开始时检索，长程任务中静态指导逐渐失配。
method: 提出AdaMEM混合记忆架构，结合离线长程轨迹记忆与在线短期策略记忆，无需在线更新参数。
result: 智能体在测试时依据动态生成的短期策略持续调整行为，提升长程任务适应性。
conclusion: 为语言智能体的测试时自适应提供了无需参数更新的记忆机制。
---

## Abstract
A central challenge for language agents is utilizing past experience to adapt to dynamic test-time conditions. While recent work demonstrates the promise of agentic memory mechanisms, most systems restrict retrieval to episode initiation. Consequently, agents are forced to rely on static guidance that becomes increasingly misaligned as long-horizon tasks unfold.
To address this rigidity, we propose the Adaptive Memory Agent (AdaMEM), a novel framework for agent test-time adaptation. Without updating model parameters online, AdaMEM adapts agent behavior via a hybrid memory architecture: it maintains a long-term trajectory memory of raw experiences collected offline while generating dynamic short-term strategy memory on-the-fly to guide decision-making.
This mechanism enables the trade-off between token efficiency and adaptability across varying inference-time compute levels. Empirically, AdaMEM significantly outperforms static memory baselines, achieving relative gains of up to 13% on ALFWorld and 11% on WebShop, with consistent leading performance extending to agentic search on HotpotQA.
To further enhance this adaptation, we develop Step-MFT, a Step-wise Memory Fine-Tuning technique that trains the policy to synthesize high-quality strategies from retrieved experiences, yielding additional performance gains. 
Our work establishes a new scaling dimension for agentic memory, supporting continuous reasoning and self-evolution post-deployment in real-world environments. Our code is available at https://github.com/yunx-z/AdaMEM.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向测试时智能体自适应的长短时混合记忆。

### 2. 核心内容
语言智能体在动态测试时条件下难以利用过往经验，现有记忆机制多仅在回合开始时检索，导致长程任务中静态指导逐渐失配。作者提出自适应记忆智能体AdaMEM，在不更新模型参数的条件下，通过混合记忆架构同时维护离线收集的长程轨迹记忆与在线生成的短期策略记忆，实时指导决策。该机制使智能体在长程任务中持续自适应，为测试时记忆利用提供了新范式。

### 3. 对应检索需求
working memory mechanisms for agent reasoning。

### 4. 来源与原文
- Source：ICML-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=RzlmkviaNy](https://openreview.net/forum?id=RzlmkviaNy)
