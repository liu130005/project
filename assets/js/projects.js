/*
 * ============================================================
 *  项目数据文件：你只需要修改这里的 5 个项目即可。
 *  填完后，index.html 会自动渲染。
 *
 *  每个项目的字段说明：
 *  - name:        项目名称（必填）
 *  - description: 项目介绍，2~3 句，突出技术点和你的贡献（必填）
 *  - image:       截图路径，放在 assets/images/ 下，如 "assets/images/project1.png"
 *                 （可选，没有则显示占位图）
 *  - video:       本地演示视频，放在 assets/videos/ 下
 *                 src = 视频文件路径，type = 视频格式的 MIME 类型
 *                 （可选，有则优先显示视频；没有 video 但有 image 则显示图片）
 *                 MIME 参考：.mp4 -> video/mp4
 *  - tags:        技术栈标签，如 ["Python", "FastAPI"]
 *  - links:       外链，可选
 *                 github: 仓库地址
 *                 site:   在线演示地址
 *                 video:  线上视频链接（如 B站），有线上视频可不必放本地文件
 * ============================================================
 */

const PROJECTS = [
  {
    name: "FlowForge — 企业级 AI 工作流编排平台",
    description: "前后端 + 官网一体化的企业级 AI 平台。支持可视化画布编排、多模型接入、提示词模板管理、AI 测试台（Playground / LLM-as-Judge 自动评分 / 回归测试 / 漂移监控）、智能体配置、知识库向量检索，并配套官方展示网站。采用 Docker 编排部署，含数据库自动备份与灾备。",
    image: "",
    video: "https://player.bilibili.com/player.html?bvid=BV1HG4Z6eEE5&page=1&high_quality=1",
    tags: ["FastAPI", "Vue 3", "TypeScript", "PostgreSQL", "Next.js", "Docker", "Milvus"],
    links: {
      site: "https://www.iflowforge.com/",
      video: "https://www.bilibili.com/video/BV1HG4Z6eEE5/"
    }
  },
  {
    name: "Aide — 智能编程助手（VS Code 扩展）",
    description: "从零开发的 VS Code AI 编程助手，对标 Cline/Copilot。支持智能对话、代码补全/解释/重构、代码审查、Diff 预览，内置完整 Agent 自主执行体系（Plan/Act 双模式、多工具系统、权限分级、多 Agent 并行、浏览器自动化、MCP、代码库索引）。内置 8 种模型供应商（OpenAI/DeepSeek/Gemini/Qwen/Ollama 等），密钥加密存储，Vue 3 前端界面。",
    image: "",
    video: "https://player.bilibili.com/player.html?bvid=BV1pZts6mEaq&page=1&high_quality=1",
    tags: ["TypeScript", "VS Code 扩展", "Agent", "LLM", "Vue 3", "tree-sitter"],
    links: {
      site: "",
      video: "https://www.bilibili.com/video/BV1pZts6mEaq/"
    }
  },
  {
    name: "LuxClaw — AI Agent 桌面应用",
    description: "基于 Electron + React 的 AI Agent 桌面应用，集智能体对话与多媒体 AI 创作于一体。Agent 引擎支持多模型、工具系统、技能（Skills）、记忆、MCP、多级重试与上下文压缩、成本追踪；集成图像/视频/AI 试穿/语音克隆/字幕/翻译等多媒体生成能力与素材库，支持 RPA 一键发布抖音。内置 Playwright 浏览器自动化与 RPA。",
    image: "",
    video: "https://player.bilibili.com/player.html?bvid=BV1XSb56TEpy&page=1&high_quality=1",
    tags: ["Electron", "React", "TypeScript", "Agent", "AI 多媒体", "Playwright", "RPA"],
    links: {
      site: "",
      video: "https://www.bilibili.com/video/BV1XSb56TEpy/"
    }
  },
  {
    name: "项目4 名称",
    description: "这里写项目介绍。",
    // image: "assets/images/project4.png",
    tags: ["标签A", "标签B"],
    links: {
      github: "https://github.com/你的用户名/项目4"
    }
  },
  {
    name: "项目5 名称",
    description: "这里写项目介绍。",
    // image: "assets/images/project5.png",
    tags: ["标签A", "标签B"],
    links: {
      github: "https://github.com/你的用户名/项目5"
    }
  }
];
