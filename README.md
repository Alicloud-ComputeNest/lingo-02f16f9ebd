# NFT 艺术品创作平台

一个前卫炫酷的NFT艺术品创作平台工作界面，包含数字画布、特效工具和发布管理功能。

## 项目结构

```
.
├── index.html                 # HTML入口文件
├── package.json               # 项目依赖和脚本配置
├── postcss.config.js          # PostCSS配置
├── tailwind.config.js         # Tailwind CSS配置
├── tsconfig.json              # TypeScript配置
├── tsconfig.node.json         # Node.js TypeScript配置
├── vite.config.ts             # Vite配置
├── src/
│   ├── index.css              # 全局样式文件
│   ├── main.tsx               # React应用入口
│   ├── App.tsx                # 主应用组件
│   ├── mock.json              # 模拟数据
│   └── components/
│       ├── DigitalCanvas/     # 数字画布组件
│       │   └── index.tsx
│       ├── EffectTools/       # 特效工具组件
│       │   └── index.tsx
│       └── PublishManager/    # 发布管理组件
│           └── index.tsx
└── README.md                  # 项目说明文档
```

## 功能特性

1. **数字画布**：
   - 基于Fabric.js的交互式画布
   - 支持形状绘制（矩形、圆形、三角形）
   - 画笔工具和图层管理
   - 网格背景辅助创作

2. **特效工具**：
   - 多种视觉效果（辉光、模糊、像素化等）
   - 可调节效果强度
   - 调色板功能

3. **发布管理**：
   - 作品信息发布表单
   - 已发布作品管理面板
   - 区块链发布模拟

## 设计亮点

- **前卫炫酷的UI设计**：深色主题配合霓虹色彩
- **响应式布局**：适配不同屏幕尺寸
- **流畅动画效果**：使用Tailwind CSS动画类
- **玻璃拟态设计**：半透明面板和毛玻璃效果
- **直观的用户界面**：清晰的功能分区和导航

## 技术栈

- React 18 with TypeScript
- Tailwind CSS for styling
- Fabric.js for canvas manipulation
- Lucide React for icons
- Vite for build tooling

## 安装与运行

```bash
pnpm install
pnpm run dev
```

访问 http://localhost:3000 查看应用。