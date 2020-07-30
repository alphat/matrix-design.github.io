## 快速上手

### 安装环境

1、安装 [Node.js](https://nodejs.org/en/)，推荐使用最新的稳定版本（默认自带 npm）

2、打开命令行工具，安装 Vue CLI

```bash
npm install -g @vue/cli
```

### 新建项目

1、使用 Vue CLI 新建项目（new-project 为项目文件夹名）

```bash
vue create -p matrix-uni/preset new-project
```

2、完成

![](https://cdn.cloudpnr.com/miniapp/matrix/teambition/t-2.png)

### 开始开发

1、进入项目文件夹，并启动服务

```bash
cd new-project
npm run serve
```

![](https://cdn.cloudpnr.com/miniapp/matrix/teambition/t-3.png)

打开命令行显示的地址，即可预览项目

2、在 /src/pages 文件夹内的任意 vue 文件中，直接使用 Matrix 组件库标签

```html
<template>
  <mx-button>提交</mx-button>
</template>
```
