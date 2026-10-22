---
title: "Less is More: Denoising Knowledge Graphs For Retrieval Augmented Generation"
title_zh: 少即是多：面向检索增强生成的知识图谱去噪
authors: "Yilun Zheng, Dan Yang, Jie Li, Lin Shang, Lihui Chen, Jiahao Xu, Sitao Luan"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=y1EQ5EH5zF"
tags: ["query:rag-papers"]
score: 9.0
evidence: 对知识图谱去噪以提升检索增强生成效果
tldr: 检索增强生成让大模型即时获取外部知识以缓解幻觉与知识过时，而图RAG进一步利用知识图谱的结构化关系。但多数图RAG依赖大模型自动构图，产生含冗余实体和不可靠关系的噪声图谱，拖累检索与生成并增加开销。作者提出对知识图谱进行去噪的框架，以更精简可靠的图谱支撑检索。实验显示去噪后检索与生成质量提升且计算成本下降。该工作表明高质量图谱比规模更重要。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 基于知识图谱的RAG依赖大模型自动构图，常产生含冗余实体与不可靠关系的噪声图谱，损害检索与生成并增加开销。
method: 论文提出对知识图谱进行去噪的方法，以精简结构、提升图谱RAG的检索精度与推理质量。
result: 实验表明去噪后的图谱在降低计算成本的同时提升了检索与生成表现。
conclusion: 少而精的知识图谱比规模庞大但噪声多的图谱更有利于RAG系统。
---

## Abstract
Retrieval-Augmented Generation (RAG) systems enable large language models (LLMs) instant access to relevant information for the generative process, demonstrating their superior performance in addressing common LLM challenges such as hallucination, factual inaccuracy, and the knowledge cutoff. Graph-based RAG further extends this paradigm by incorporating knowledge graphs (KGs) to leverage rich, structured connections for more precise and inferential responses. A critical challenge, however, is that most Graph-based RAG systems rely on LLMs for automated KG construction, often yielding noisy KGs with redundant entities and unreliable relationships. This noise degrades retrieval and generation performance while also increasing computational cost. Crucially, current research does not comprehensively address the denoising problem for LLM-generated KGs. In this paper, we introduce DEnoised knowledge Graphs for Retrieval Augmented Generation (DEG-RAG), a framework that addresses these challenges through: (1) entity resolution, which eliminates redundant entities, and (2) triple reflection, which removes erroneous relations. Together, these techniques yield more compact, higher-quality KGs that significantly outperform their unprocessed counterparts. Beyond the methods, we conduct a systematic evaluation of entity resolution for LLM-generated KGs, examining different blocking strategies, embedding choices, similarity metrics, and entity merging techniques. To the best of our knowledge, this is the first comprehensive exploration of entity resolution in LLM-generated KGs. Our experiments demonstrate that this straightforward approach not only drastically reduces graph size but also consistently improves question answering performance across diverse popular Graph-based RAG variants.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
对知识图谱去噪以提升检索增强生成效果。

### 2. 核心内容
检索增强生成让大模型即时获取外部知识以缓解幻觉与知识过时，而图RAG进一步利用知识图谱的结构化关系。但多数图RAG依赖大模型自动构图，产生含冗余实体和不可靠关系的噪声图谱，拖累检索与生成并增加开销。作者提出对知识图谱进行去噪的框架，以更精简可靠的图谱支撑检索。实验显示去噪后检索与生成质量提升且计算成本下降。该工作表明高质量图谱比规模更重要。

### 3. 对应检索需求
research papers on retrieval-augmented generation for large language models。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=y1EQ5EH5zF](https://openreview.net/forum?id=y1EQ5EH5zF)
