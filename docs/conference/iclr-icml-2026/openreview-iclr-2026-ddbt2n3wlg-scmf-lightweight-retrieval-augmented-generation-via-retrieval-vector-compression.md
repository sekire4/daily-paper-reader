---
title: "SCMF: Lightweight Retrieval-Augmented Generation via Retrieval Vector Compression"
title_zh: SCMF：基于检索向量压缩的轻量检索增强生成
authors: "Jiaquan Zhang, Chaoning Zhang, Qigan Sun, Yibei Liu, Xudong Wang, Pengcheng Zheng, Chenghao Li, Sihan Cao, Caiyan Qin, Jiwei Wei, Yang Yang"
date: 2026
publication_date: 2026
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
pdf: "https://openreview.net/pdf?id=dDBT2N3wLG"
tags: ["query:rag-papers"]
score: 8.0
evidence: 通过检索向量压缩与索引实现轻量RAG
tldr: RAG在知识密集型任务中普及，但存储与检索大规模高维嵌入带来显著存储与计算开销。作者提出语义压缩记忆框架SCMF，将文档嵌入投影到低维语义空间并用残差向量量化离散为语义记忆单元，通过语义倒排索引链接原始知识单元。实验表明该索引范式可显著降低存储与检索成本并保持高效。该工作为大规模RAG提供了轻量可追溯的索引方案。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 大规模RAG存储与检索高维嵌入成本高，存在明显效率瓶颈。
method: 提出语义压缩记忆框架，将嵌入投影降维并量化离散为语义记忆单元，配合倒排索引检索。
result: 实验表明该范式可降低存储与检索成本并保持高效可追溯。
conclusion: 为大规模RAG提供了轻量且可追溯的索引范式。
---

## Abstract
With the widespread adoption of Retrieval-Augmented Generation (RAG) in knowledge-intensive tasks, efficiency bottlenecks become increasingly evident: storing and retrieving large-scale high-dimensional embeddings incur substantial storage and computation costs. To address this challenge, we propose the Semantic Compressed Memory Framework (SCMF), a lightweight and traceable indexing paradigm tailored for large-scale RAG. SCMF first projects document embeddings into a low-dimensional semantic space, and then discretizes them into compact Semantic Memory Units (SMUs) via Residual Vector Quantization (RVQ). Each SMU is explicitly linked to its corresponding Raw Knowledge Unit (RKU) through a semantic inverted index, which enables efficient CRUD operations while preserving the traceability of retrieval results. During retrieval, SCMF performs Approximate Nearest Neighbor (ANN) search in the SMU space, followed by a two-stage re-ranking strategy that combines sparse retrieval (BM25) and dense retrieval, thereby achieving efficient and accurate evidence localization. Experimental results demonstrate that SCMF substantially reduces storage costs and retrieval latency while preserving explicit traceability to the original knowledge units, significantly outperforming mainstream vector indexing methods.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
通过检索向量压缩与索引实现轻量RAG。

### 2. 核心内容
RAG在知识密集型任务中普及，但存储与检索大规模高维嵌入带来显著存储与计算开销。作者提出语义压缩记忆框架SCMF，将文档嵌入投影到低维语义空间并用残差向量量化离散为语义记忆单元，通过语义倒排索引链接原始知识单元。实验表明该索引范式可显著降低存储与检索成本并保持高效。该工作为大规模RAG提供了轻量可追溯的索引方案。

### 3. 对应检索需求
retrieval augmentation strategies for language model pipelines。

### 4. 来源与原文
- Source：ICLR-2026-Public
- OpenReview：[https://openreview.net/forum?id=dDBT2N3wLG](https://openreview.net/forum?id=dDBT2N3wLG)
