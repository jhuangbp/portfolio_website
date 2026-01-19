# Portfolio Website

个人求职网站 - 展示个人简介、项目、经历和技能。

## 功能特性

- ✅ 响应式设计，支持移动端和桌面端
- ✅ 平滑滚动导航
- ✅ 现代化UI设计
- ✅ 自动连接简历PDF下载
- ✅ 包含所有8个核心模块：
  1. 顶部导航栏（Navbar）
  2. Hero首屏
  3. About简介
  4. Featured Projects项目展示
  5. Experience工作经历
  6. Skills技能
  7. Education教育背景
  8. Contact联系方式

## 技术栈

- React 18
- Vite
- CSS3

## 本地开发

### 前置要求

- Node.js 18+ 
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 部署到 Render（Static Site）

1. 将代码推送到 GitHub 仓库
2. 在 [Render](https://render.com) 创建新的 Static Site
3. 连接你的 GitHub 仓库
4. 设置构建和发布目录：
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
5. 选择 Node 环境
6. 点击 Deploy

或使用仓库内的 `render.yaml` 进行自动部署。

## 自定义内容

网站框架已创建完成，你需要在以下文件中填入实际内容：

### 需要修改的文件：

1. **src/components/Hero.jsx** - 更新个人定位、摘要和社交媒体链接
2. **src/components/About.jsx** - 填写自我介绍、当前状态、求职方向
3. **src/components/Projects.jsx** - 添加实际项目数据
4. **src/components/Experience.jsx** - 填写工作经历
5. **src/components/Skills.jsx** - 更新技能列表
6. **src/components/Education.jsx** - 填写教育背景和证照
7. **src/components/Contact.jsx** - 更新联系方式（如果需要）
8. **src/components/Navbar.jsx** - 更新Logo/名字（如需要）

### 静态资源：

简历和头像已在 `docs/` 文件夹中：
- `JyunRu_Huang_Resume.pdf` - 简历PDF
- `JyunRu_Huang_Headshot.jpg` - 个人照片

这些文件直接放在 `docs/` 目录中提供给网站使用。

## 项目结构

```
portfolio_website/
├── docs/               # 静态资源（简历、照片）
├── src/
│   ├── components/     # React组件
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── render.yaml         # Render部署配置
```

## 下一步

1. 填写所有 TODO 标记的内容
2. 根据需要调整样式和颜色
3. 测试所有链接和功能
4. 部署到 Render

祝你求职顺利！🎉
