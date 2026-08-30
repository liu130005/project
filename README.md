# 我的项目作品集

> 个人项目展示仓库。

## 📂 项目总览

| # | 项目 | 一句话简介 | 链接 |
|---|------|-----------|------|
| 1 | [FlowForge](#一flowforge--企业级-ai-工作流编排平台) | 企业级 AI 工作流编排平台（前后端+官网） | [官网](https://www.iflowforge.com/) · [B站演示](https://www.bilibili.com/video/BV1HG4Z6eEE5/) |
| 2 | [Aide](#二aide--智能编程助手vs-code-扩展) | 从零开发的 VS Code AI 编程助手 | [B站演示](https://www.bilibili.com/video/BV1pZts6mEaq/) |
| 3 | [Agent落地场景](#三agent落地场景) | Agent 业务场景全景图（6 大分类 20+ 场景） | [查看页面](agent落地.html) |

---

# 一、FlowForge — 企业级 AI 工作流编排平台

> 一个从零开发的**前后端 + 官网一体化企业级 AI 平台**。

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

# 二、Aide — 智能编程助手（VS Code 扩展）

> 从零开发的 VS Code AI 编程助手，对标 Cline / GitHub Copilot 类产品。

## 🌐 相关链接

- 演示视频：[B站观看](https://www.bilibili.com/video/BV1pZts6mEaq/)

## 📌 项目简介

一个**从零开发的 VS Code AI 编程助手扩展**，核心能力包括智能对话、代码补全、代码解释、重构、Diff 预览、代码审查，以及一套完整的 **Agent 自主执行体系**。

## 1. 多模型接入（provider 架构）

内置 8 种模型供应商，统一通过 OpenAI 兼容协议封装：

| Provider | 默认模型 | 说明 |
|----------|----------|------|
| OpenAI | gpt-4o | 支持自定义代理 baseUrl |
| DeepSeek | deepseek-chat | 默认模型 |
| Gemini | gemini-2.0-flash | Google |
| Qwen | qwen-plus | 通义千问 DashScope |
| Ollama | codellama | 本地模型 |
| OpenRouter | openai/gpt-4o | 聚合平台 |
| OpenAI 兼容 | gpt-4o | 自定义 baseUrl，可接任意服务 |
| VS Code LM | — | 由 VS Code 提供 |

工程亮点：
- **密钥安全**：API Key 默认写入 VS Code 加密的 Secret Storage，支持自动迁移，废弃明文存储。
- **provider 标识归一化**：统一连字符/驼峰/下划线拼写，用 enum 单一数据源杜绝拼写漂移。
- **参数体系**：per-model 参数覆盖、模型降级回退、速率限制（RPM）、流式响应 + function calling。

## 2. Agent 自主执行体系（`src/agent/`，24 个模块）

- **Plan / Act 双模式**：规划只读，执行落盘。
- **工具系统**：文件读写、编辑器替换/插入、终端命令、补丁应用、AST 上下文增强、命令输出智能截断。
- **权限管理**：`auto / acceptEdits / default` 三档权限，只读自动放行、写/命令弹卡确认。
- **多 Agent 协作**：真实并行派发只读研究子代理，含并发上限与超时，仅允许查询不落盘。
- **上下文管理**：128k 上下文窗口、自动压缩、增量压缩 continuation。
- **代码库理解**：代码库索引 + AST 语义搜索。
- **浏览器自动化**（Puppeteer）、**MCP 客户端**（自定义 MCP Server）、**网络搜索**（多后端 + 兜底）。
- **工程化机制**：Checkpoint、死循环守护、生命周期 Hooks、项目规则、技能系统、token 计数、终端管理。
- **安全防护**：路径校验、危险命令检查、工作区 hooks 默认关闭防供应链攻击。

## 3. 功能命令（40+ 命令）

覆盖开发全流程：对话、解释代码、生成代码、代码审查、生成测试、重构、生成注释、Diff 对比、内联对话、Agent 规划/执行/停止、Checkpoint、Token 用量、费用仪表盘、Git 集成（commit / PR 描述 / 建分支）、提示词模板库、Linter 修复、运行测试、多 Agent 分解任务、自定义指令、Hooks、任务历史等。

## 4. 前端界面（`webview/`，Vue 3）

45 个 `.vue` 组件，技术栈：Vue 3 + TypeScript + Vite + naive-ui + markdown-it + TipTap。含对话面板、Agent 步骤视图、Diff 编辑器、费用看板、上下文窗口监控，支持右键菜单与快捷键（`Ctrl+Shift+A`）。

## 5. 工程与质量

- 测试：`src/test/` 26 个测试文件，用 Vitest（含 coverage、UI 模式）。
- 技术栈：TypeScript、tree-sitter（语法解析）、ESLint。

## 🎯 项目亮点

1. **全栈自研 AI 编程助手**：从多模型接入到 Agent 自主执行、从工具系统到 Vue3 webview 界面，闭环完整。
2. **工程化深度**：加密密钥、权限分级、上下文压缩、多 Agent 并行、死循环守护、供应链安全防护。
3. **开放扩展**：MCP 支持、浏览器自动化、多搜索后端、Hooks 生命周期，架构灵活。

---

# 三、Agent落地场景

> 一个独立的可视化展示页：把分散的 AI 工具组合成可执行、可复用的数字员工能力。

本页是一张 **Agent 业务场景全景图**，将 AI Agent 按业务场景分类展示，共 **6 大分类、20+ 个 Agent 场景**，每个场景标注了具体的 Skill 能力项。

## 🌐 相关链接

- 查看页面：**[agent落地.html](agent落地.html)**（双击或起本地服务器打开）

## 📂 六大分类

| 分类 | 代表 Agent | Skill 能力示例 |
|------|-----------|----------------|
| **A. 电商与内容营销** | 电商运营、小红书分析、直播运营、IP种草带货、商务专员 | 商品标题优化、详情页生成、竞品分析、热点挖掘、直播脚本、达人合作 |
| **B. 跨境电商** | 选品、达人合作、内容研究、KOL 自动化运营 | TikTok/亚马逊选品、达人筛选、本地化文案、自动批量建联 |
| **C. 市场增长与产品创新** | 市场调研、产品创新、新品概念验证、市场营销 | 行业报告解读、需求文档、概念测试、营销方案 |
| **D. 客服与财务风控** | 售后客服、财务审批复核 | 客诉分类、智能工单、发票真伪查验、预算监控 |
| **E. 经营管理与办公提效** | 负责人助理、周报月报、个人助理、调研、办公协同、文档处理 | 会议纪要、工作数据汇总、信息检索、多格式转换 |
| **F. 视觉设计与内容生产** | 品牌 VI 规范、视觉美化、HTML 视觉设计大师 | 品牌视觉规范、海报设计、PPT 美化、H5 活动页 |

## 🎯 价值点

- 体现对 **AI Agent 业务落地**的理解：把技术能力映射到真实业务场景。
- 每个 Agent 都拆解为**具体的 Skill 能力**，展示工程化、场景化的产品设计思维。

---

# 四、如何查看本作品集

本仓库的**在线展示页**是 `index.html`，包含各项目的可视化卡片（内嵌 B站演示视频 + 官网链接），另有独立的 `agent落地.html` 场景全景图。

## 本地预览

用浏览器直接打开根目录下的 **`index.html`** 即可查看：

```bash
# 方式一：直接双击项目根目录的 index.html
# 或在项目根目录打开命令行执行：

# 方式二：本地起一个静态服务器（推荐，B站 iframe 更稳定）
python -m http.server 8000
# 然后浏览器访问 http://localhost:8000
```

> 说明：因为页面内嵌了 B站视频（iframe），通过 `file://` 直接双击打开也基本可用；但如果嵌入受限或显示异常，建议用方式二起本地服务器访问。


