---
title: Evaluating the Retrieval Robustness of Large Language Models
title_zh: 评估大语言模型的检索鲁棒性
authors: "Shuyang Cao, Karthik Radhakrishnan, David S Rosenberg, Steven Lu, Pengxiang Cheng, Lu Wang, Shiyue Zhang"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=sKhxuDRQTF"
tags: ["query:rag-papers"]
score: 8.0
evidence: 评估RAG系统的鲁棒性
tldr: RAG虽能增强LLM处理知识密集型任务，但检索不完美可能导致性能下降。论文系统评估实际RAG设置下LLM的检索鲁棒性，构建含1500个开放域问题及维基检索文档的基准，并提出三项鲁棒性指标。研究回答了RAG是否总优于非RAG、更多文档是否更好、文档顺序是否影响结果等问题，为RAG系统评测提供了方法与洞见。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: RAG可能因检索不完美和模型利用能力有限而性能下降，但实际场景下的鲁棒性缺乏系统评估。
method: 构建1500个开放域问题及维基检索文档的基准，提出三项鲁棒性指标并围绕三个研究问题展开评测。
result: 实验揭示了RAG并非总是更优、更多文档不一定更好以及文档顺序对结果的影响。
conclusion: 为RAG系统的可靠性评估与部署提供了基准和方法参考。
---

## Abstract
Retrieval-augmented generation (RAG) generally enhances large language models' (LLMs) ability to solve knowledge-intensive tasks. But RAG could also lead to performance degradation due to imperfect retrieval and the model's limited ability to leverage retrieved content.
In this work, we evaluate the robustness of LLMs in practical RAG setups (henceforth retrieval robustness). We focus on three research questions: (1) whether RAG is always better than non-RAG; (2) whether more retrieved documents always lead to better performance; (3) and whether document orders impact results.
To facilitate this study, we establish a benchmark of 1500 open-domain questions, each with retrieved documents from Wikipedia. We introduce three robustness metrics, each corresponds to one research question. 
Our comprehensive experiments, involving 11 LLMs and 3 prompting strategies, reveal that all of these LLMs exhibit surprisingly high retrieval robustness; nonetheless, different degrees of imperfect robustness hinders them from fully utilizing the benefits of RAG.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
评估RAG系统的鲁棒性。

### 2. 核心内容
RAG虽能增强LLM处理知识密集型任务，但检索不完美可能导致性能下降。论文系统评估实际RAG设置下LLM的检索鲁棒性，构建含1500个开放域问题及维基检索文档的基准，并提出三项鲁棒性指标。研究回答了RAG是否总优于非RAG、更多文档是否更好、文档顺序是否影响结果等问题，为RAG系统评测提供了方法与洞见。

### 3. 对应检索需求
Locate academic papers that evaluate retrieval augmented generation systems.

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=sKhxuDRQTF](https://openreview.net/forum?id=sKhxuDRQTF)
