# 我的项目作品集

> 这是我的个人项目展示仓库，用于面试和求职展示。

## 🌐 在线展示页

- 访问地址：**[https://你的用户名.github.io/仓库名](https://你的用户名.github.io/仓库名)**（用 GitHub Pages 部署后生效）
- 仓库源码说明见下文。

---

## 📂 项目列表

| # | 项目 | 简介 | 仓库 | 在线地址 | 视频 |
|---|------|------|------|----------|------|
| 1 | 项目1 名称 | 一句话简介 | [GitHub](https://github.com/你的用户名/项目1) | [链接](你的在线地址) | [视频](你的视频链接) |
| 2 | 项目2 名称 | 一句话简介 | [GitHub](https://github.com/你的用户名/项目2) | — | — |
| 3 | 项目3 名称 | 一句话简介 | [GitHub](https://github.com/你的用户名/项目3) | — | — |
| 4 | 项目4 名称 | 一句话简介 | [GitHub](https://github.com/你的用户名/项目4) | — | — |
| 5 | 项目5 名称 | 一句话简介 | [GitHub](https://github.com/你的用户名/项目5) | — | — |

> 详细项目卡片请查看 **[在线展示页](https://你的用户名.github.io/仓库名)**。

---

## 🛠️ 技术栈（按实际修改）

- Python / FastAPI / Django
- Vue / React / JavaScript / TypeScript
- ...

## 📄 使用说明

1. **填写项目信息**：编辑 `assets/js/projects.js`，把 5 个项目的名称、介绍、截图、视频路径、外链填好。
2. **放素材**：
   - 截图放入 `assets/images/`
   - 本地视频放入 `assets/videos/`
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
- 视频建议压缩：用 `ffmpeg -i 原视频 -crf 28 -preset slow 输出.mp4` 或上传到 B站/网盘后在外链放链接，避免撑爆仓库。
- 若不想把视频放进 Git，可在 `projects.js` 的 `links.video` 放线上链接，并删除本地 `video` 字段。

---

## 📬 联系我

- 邮箱：你的邮箱
- GitHub：[你的 GitHub 主页](https://github.com/你的用户名)
