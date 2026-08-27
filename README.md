# 我的项目作品集

> 这是我的个人项目展示仓库，用于面试和求职展示。

## 🌐 在线展示页

- 访问地址：**[https://你的用户名.github.io/仓库名](https://你的用户名.github.io/仓库名)**（用 GitHub Pages 部署后生效）

---

## 📂 项目列表

| # | 项目 | 简介 | 在线地址 | 视频 |
|---|------|------|----------|------|
| 1 | **FlowForge — 企业级 AI 工作流编排平台** | 前后端 + 官网一体化的 AI 平台 | [iflowforge.com](https://www.iflowforge.com/) | [B站演示](https://www.bilibili.com/video/BV1HG4Z6eEE5/) |
| 2 | 项目2 名称 | 一句话简介 | — | — |
| 3 | 项目3 名称 | 一句话简介 | — | — |
| 4 | 项目4 名称 | 一句话简介 | — | — |
| 5 | 项目5 名称 | 一句话简介 | — | — |

---

## ⭐ 重点项目：FlowForge — 企业级 AI 工作流编排平台

企业级 AI 工作流编排平台，覆盖**后端服务、前端画布、官方展示网站**一体化开发。

### 功能特性

- **可视化工作流画布**：拖拽编排 AI 工作流，节点连线式配置。
- **提示词模板管理**：集中管理与版本化提示词。
- **AI 测试台**：Playground 调试、LLM-as-Judge 自动评分、回归测试、漂移监控。
- **智能体配置**：可配置的智能体执行器。
- **知识库向量检索**：基于 Milvus 的向量检索能力。
- **插件系统**：可扩展的插件式架构。
- **Docker 编排部署**：含数据库自动备份与灾备、资源限制、健康检查、日志轮转。

### 技术栈

| 层 | 技术 |
|----|------|
| 后端 | Python 3.12、FastAPI、SQLAlchemy (async)、PostgreSQL 15、Alembic、Milvus |
| 前端 | Vue 3、TypeScript、Vite、Vue Flow、Pinia、Chart.js |
| 官网 | Next.js 16、React 19、Tailwind CSS 4、framer-motion |
| 部署 | Docker Compose（postgres / app / frontend / 定时备份） |

### 相关链接

- 官网：<https://www.iflowforge.com/>
- 演示视频：[B站](https://www.bilibili.com/video/BV1HG4Z6eEE5/)

---

## 🛠️ 技术栈汇总

- Python / FastAPI / SQLAlchemy / PostgreSQL / Milvus
- Vue 3 / TypeScript / Vite / Vue Flow
- Next.js / React / Tailwind CSS
- Docker / Docker Compose

---

## 📄 使用说明

1. **填写项目信息**：编辑 `assets/js/projects.js`，把各项目的名称、介绍、截图、视频、外链填好。
2. **放素材**：
   - 截图放入 `assets/images/`
   - 本地视频放入 `assets/videos/`（注意 GitHub 单文件 < 100MB）
3. **本地预览**：直接用浏览器打开 `index.html`，或运行 `python -m http.server` 后访问。
4. **部署到 GitHub Pages**（见下文）。

---

## 🚀 部署到 GitHub Pages（免费在线访问）

1. 在 GitHub 新建一个仓库（公开），比如 `my-portfolio`。
2. 把本目录所有文件推上去：

```bash
git init
git add .
git commit -m "init: 项目作品集"
git remote add origin https://github.com/你的用户名/my-portfolio.git
git push -u origin main
```

3. 仓库页面 → **Settings** → **Pages** → Source 选 `main` 分支 + 根目录（`/(root)`）→ Save。
4. 等 1~2 分钟，访问 `https://你的用户名.github.io/my-portfolio/` 即可。

> 小技巧：把仓库名命名为 `你的用户名.github.io`，则访问地址就是 `https://你的用户名.github.io/`，更简洁。

---

## ⚠️ 视频与文件大小注意

- GitHub 单文件上限 **100MB**，单仓库建议低于 1~2GB。
- 视频优先放 B站等线上平台，在 `projects.js` 用外链/嵌入，避免撑爆仓库。
- 若用本地视频，请先用 ffmpeg 压缩，例如：`ffmpeg -i 原视频 -crf 28 -preset slow 输出.mp4`。

---

## 📬 联系我

- 邮箱：你的邮箱
- GitHub：[你的 GitHub 主页](https://github.com/你的用户名)
