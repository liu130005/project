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
    name: "项目1 名称",
    description: "这里写项目介绍：做什么、解决什么问题、用了哪些技术、你在其中的角色和成果。2~3 句即可。",
    image: "assets/images/project1.png",
    // video: { src: "assets/videos/project1.mp4", type: "video/mp4" },
    tags: ["Python", "FastAPI", "示例标签"],
    links: {
      github: "https://github.com/你的用户名/项目1",
      site: "https://你的在线地址.com",
      // video: "https://www.bilibili.com/video/xxxxx"
    }
  },
  {
    name: "项目2 名称",
    description: "这里写项目介绍。",
    image: "assets/images/project2.png",
    // video: { src: "assets/videos/project2.mp4", type: "video/mp4" },
    tags: ["标签A", "标签B"],
    links: {
      github: "https://github.com/你的用户名/项目2",
      site: ""
    }
  },
  {
    name: "项目3 名称",
    description: "这里写项目介绍。",
    image: "assets/images/project3.png",
    tags: ["标签A", "标签B"],
    links: {
      github: "https://github.com/你的用户名/项目3"
    }
  },
  {
    name: "项目4 名称",
    description: "这里写项目介绍。",
    image: "assets/images/project4.png",
    tags: ["标签A", "标签B"],
    links: {
      github: "https://github.com/你的用户名/项目4"
    }
  },
  {
    name: "项目5 名称",
    description: "这里写项目介绍。",
    image: "assets/images/project5.png",
    tags: ["标签A", "标签B"],
    links: {
      github: "https://github.com/你的用户名/项目5"
    }
  }
];
