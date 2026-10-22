---
title: "ElicitR: Unlocking Latent Reasoning in Dense Retrievers via Generative Regularization"
title_zh: ElicitR：通过生成式正则释放稠密检索器的潜在推理
authors: "Fengyu Cai, Iryna Gurevych, Heinz Koeppl"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf/a941965ed540f293ff74c4fbc5f0fe0243dce0db.pdf"
tags: ["query:rag-papers"]
score: 7.0
evidence: 面向推理密集型检索的稠密检索器框架
tldr: 推理密集型检索需要超越词面重叠与粗粒度语义匹配的能力。作者认为推理能力已潜藏于检索器中却被对比学习过拟合所压制，因而提出ElicitR，通过在查询-正负样本批次上联合训练小模型并加入生成式正则来激发潜在推理。该方法能更细致地刻画查询与文档关系，提升检索质量。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 推理密集型检索需超越词面与粗语义匹配，而现有检索器推理能力被压制。
method: 提出ElicitR检索器-语言模型框架，用生成式正则在查询-正负样本上激发潜在推理。
result: 该方法能更细致刻画查询与文档关系，优于仅依赖二值相关性的检索。
conclusion: 生成式正则为提升稠密检索的推理能力提供了有效手段。
---

## Abstract
Reasoning-intensive retrieval is increasingly important for downstream applications, requiring more than lexical overlap or coarse semantic matching. While prior work mainly relies on Language Models (LMs) to synthesize reasoning-oriented supervision, we posit that it is already latent in LM-based retrievers but suppressed by contrastive overfitting. To elicit this latent reasoning, we introduce ElicitR, a retriever–LM framework with generative regularization that captures nuanced relationships among a query and its candidate documents beyond binary relevance. Concretely, alongside contrastive learning, we regularize the retriever by co-training a small LM on query–positive–negative batches. Next token prediction (NTP) for each text is conditioned on its prefix and the other in-batch texts, with cross-text conditioning weighted by retriever-computed similarities. Using MS MARCO as the only paired query-document supervision and a 135M LM for generative regularization with unlabeled raw-text initialization, ElicitR consistently improves BRIGHT by 16-29% relative across 0.1B–3B retriever scales while maintaining performance on BEIR. At 3B, ElicitR reaches an nDCG@10 of 23.1, substantially outperforming larger models trained with far more curated pairs and proprietary APIs. Further analyses show that ElicitR prevents overfitting, improves retrieval calibration, and remains robust to batch sizes, supporting its practicality.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
面向推理密集型检索的稠密检索器框架。

### 2. 核心内容
推理密集型检索需要超越词面重叠与粗粒度语义匹配的能力。作者认为推理能力已潜藏于检索器中却被对比学习过拟合所压制，因而提出ElicitR，通过在查询-正负样本批次上联合训练小模型并加入生成式正则来激发潜在推理。该方法能更细致地刻画查询与文档关系，提升检索质量。

### 3. 对应检索需求
Search for papers on retrieval methods and evidence grounding in language model question answering.

### 4. 来源与原文
- Source：ICML-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=xWHzF6WRGE](https://openreview.net/forum?id=xWHzF6WRGE)
