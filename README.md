### 文件大小写引起的HMR异常问题

复现方法:

1. 安装依赖，并启动开发环境

```
pnpm install
pnpm run dev
```

访问 http://localhost:8080 查看页面内容，左上角显示`title`字样

2. 修改`src/components/NavBar.jsx`中的`title`文字，保存后，可以看到页面有变化。

3. 再次修改`src/components/NavBar.jsx`中的内容，保存后，则页面没有变化。