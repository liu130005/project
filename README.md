# FlowForge — 企业级 AI 工作流编排平台

> 一个从零开发的**前后端 + 官网一体化企业级 AI 平台**，用于项目展示与面试介绍。

## 🌐 相关链接

- 官网：<https://www.iflowforge.com/>
- 演示视频：[B站观看](https://www.bilibili.com/video/BV1HG4Z6eEE5/)

---

## 📌 项目简介

FlowForge 是一个企业级 AI 工作流编排平台，支持通过**可视化画布**以节点连线方式编排 AI 工作流，覆盖从模型接入、提示词管理、知识库检索，到 AI 测试评估、智能体对话、插件扩展的完整链路。项目包含三个子系统：

| 子系统 | 技术 | 说明 |
|--------|------|------|
| 后端服务 `backend-workflow` | Python 3.12 + FastAPI | 业务逻辑、插件执行、AI 评估、知识库 |
| 前端应用 `frontend-workflow` | Vue 3 + TypeScript | 可视化画布、各功能页面 |
| 官方网站 `website` | Next.js 16 | 产品官网与展示 |

---

## ✨ 核心功能模块

### 1. 可视化工作流编排
- 基于 **Vue Flow** 的画布，拖拽节点、连线编排 AI 工作流。
- 工作流支持**配置版本管理**（`versions.py`）、**定时调度**（`schedule.py`）、**执行监控**（`monitor.py`）。
- 工作流执行可**追溯**（`traces.py`），支持查看每次运行的完整轨迹。

### 2. 模型与提示词管理
- 多模型服务商接入与统一管理（`api_keys.py`、`models.py`），支持密钥集中托管。
- 提示词模板集中管理与版本化（`prompts.py`、`templates.py`、`versions.py`）。
- 场景化提示词配置（`scenes.py`）。

### 3. AI 测试台（重点）
提供完整的 AI 应用质量评估体系（`routers/ai_test/`）：
- **Playground 在线调试**：`AiTestPlayground.vue`，实时调试提示词与模型输出。
- **测试用例管理**（`cases.py`）：用例维护、批量运行。
- **测试数据集**（`datasets.py`）：管理批量测试数据。
- **LLM-as-Judge 自动评分**（`evaluation.py`）：用大模型对输出按 1-5 分打分并生成评语。
- **回归测试**（`TestRunner.vue`、`ExperimentView.vue`）：测试套件批量回归，防止效果回退。
- **漂移监控**（`monitor.py`、`MonitorDashboard.vue`）：监控评分 / 成功率 / 延迟变化趋势。

### 4. 智能体（Agent）
- 智能体配置与编辑（`AgentEditor.vue`、`AgentList.vue`）。
- 智能体对话（`AgentChat.vue`、`ChatView.vue`），支持人工任务（`human.py`、`HumanTaskList.vue`）。

### 5. 知识库（Knowledge Base）
- 知识库全生命周期管理：创建向导、文档管理、分块管理（`KnowledgeBaseCreateWizard.vue`、`doc_crud.py`、`chunk_crud.py`）。
- 向量检索与召回测试（`KnowledgeBaseRetrievalTest.vue`、`KnowledgeRecallTest.vue`）。
- 知识库效果评估（`eval.py`）、流水线测试（`KnowledgeBasePipelineTest.vue`）。

### 6. 插件系统
插件式可扩展架构（`app/plugins/plugin_packages/`），内置多个行业插件包，每包含多个可视化节点：

- **图像处理（image）**：背景移除、批量处理、拼图、色彩匹配、图像对比、压缩、内容审核、去重、缺陷检测、细节增强、画质增强、OCR、预览、文字检测、文字擦除渲染、文字翻译、图像翻译、**AI 试穿**、水印添加/去除 等 20 类节点。
- **视频处理（video_processor）**：视频压缩、水印、字幕等处理节点。
- **电商（ecommerce）**：商品主图/详情图等场景化节点（含标签工具 `label_utils.py`）。
- **音频（audio）**：音频处理节点。
- **RPA**：自动化流程节点。

### 7. 运维与安全
- **Docker Compose 编排部署**：postgres / app / frontend / 定时备份容器。
- 数据库**自动备份与灾备**、资源限制、健康检查、日志轮转。
- **审计日志**（`audit.py`、`AuditLogList.vue`）：关键操作全程留痕。
- **护栏（Guardrails）**（`guardrails.py`、`GuardrailSettings.vue`）：模型输出安全与合规。
- **自定义工具**（`custom_tools.py`、`tools.py`、`ToolManagement.vue`）：扩展模型工具能力。
- 数据看板（`Dashboard.vue`、`dashboard_enhanced.py`）、模型服务商配置、API 密钥管理。

---

## 🛠️ 技术栈详解

| 层 | 技术 | 用途 |
|----|------|------|
| 后端框架 | Python 3.12、FastAPI | 异步 REST API |
| ORM/数据库 | SQLAlchemy (async)、PostgreSQL 15、Alembic | 数据建模、迁移 |
| 向量库 | Milvus | 知识库向量检索 |
| 前端框架 | Vue 3、TypeScript、Vite | 单页应用 |
| 可视化画布 | Vue Flow | 工作流拖拽编排 |
| 状态管理 | Pinia | 前端状态 |
| 图表 | Chart.js | 看板与监控图表 |
| 官网 | Next.js 16、React 19、Tailwind CSS 4、framer-motion | 产品官网 |
| 部署 | Docker、Docker Compose | 容器化编排与灾备 |

---

## 🏗️ 代码结构（后端核心）

```
backend-workflow/app/
├── routers/              # API 路由
│   ├── ai_test/          # AI 测试台（用例/数据集/评估/实验/监控）
│   ├── knowledge_base/   # 知识库（文档/分块/评估）
│   ├── workflows/        # 工作流（增删改查/执行/监控）
│   ├── agents/           # 智能体
│   ├── nodes/            # 节点
│   └── ...               # 提示词/模板/模型/密钥/审计/护栏等
└── plugins/
    └── plugin_packages/  # 插件包
        ├── image/        # 图像处理 20 类节点
        ├── video_processor/ # 视频处理节点
        ├── ecommerce/    # 电商节点
        ├── audio/        # 音频节点
        └── rpa/          # RPA 节点
```

---


