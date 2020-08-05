let n=document.createElement("style");n.innerHTML="",document.head.appendChild(n);export default"## 快速上手\n\n### 安装环境\n\n1、安装 [Node.js](https://nodejs.org/en/)，推荐使用最新的稳定版本（默认自带 npm）\n\n2、打开命令行工具，安装 Vue CLI\n\n```bash\nnpm install -g @vue/cli\n```\n\n### 新建项目\n\n1、使用 Vue CLI 新建项目（new-project 为项目文件夹名）\n\n```bash\nvue create -p matrix-uni/preset new-project\n```\n\n2、完成\n\n![](https://cdn.cloudpnr.com/miniapp/matrix/teambition/t-2.png)\n\n### 开始开发\n\n1、进入项目文件夹，并启动服务\n\n```bash\ncd new-project\nnpm run serve\n```\n\n![](https://cdn.cloudpnr.com/miniapp/matrix/teambition/t-3.png)\n\n打开命令行显示的地址，即可预览项目\n\n2、在 /src/pages 文件夹内的任意 vue 文件中，直接使用 Matrix 组件库标签\n\n```html\n<template>\n  <mx-button>提交</mx-button>\n</template>\n```\n";