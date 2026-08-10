# 李立廷在线作品集

基于 React + Vite 制作的个人作品展示网站。

## 本地预览

```powershell
pnpm install
pnpm dev
```

浏览器访问终端显示的本地地址。

## 生产构建

```powershell
pnpm build
pnpm preview
```

构建产物位于 `dist/`。Vercel 使用 `pnpm build`，输出目录填写 `dist`；GitHub Pages 可直接发布 `dist/` 内容。项目使用相对资源路径，可部署在根目录或仓库子路径。
