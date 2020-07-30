参考文档：[**http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html**](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

三个字段：`type`（必需）、`scope`（可选）和 `subject`（必需）。

### **type**

`type` 用于说明 commit 的类别，只允许使用下面的标识。

| 标题   | 说明                                                  |
| ------ | ----------------------------------------------------- |
| feat   | 新功能                                                |
| fix    | 修复缺陷漏洞                                          |
| update | 更新代码（即不是新增功能，也不是修改 bug 的代码变动） |
| ui     | 界面更新（即不是新增功能，也不是修改 bug 的代码变动） |
| style  | 代码格式（不影响代码运行的变动）                      |
| perf   | 提高性能                                              |
| test   | 添加缺失测试或更正现有测试                            |
| docs   | 文档添加或修改                                        |
| build  | 打包的相关工作                                        |
| chore  | 构建过程或辅助工具的变动                              |
| revert | 恢复先前的提交                                        |

如果 `type` 为 `feat`、`fix` 和 `ui` ，则该 commit 将出现在 Change log 之中。

### **scope（可选）**

`scope` 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

### **subject**

`subject` 是 commit 目的的简短描述，不超过 50 个字符。

### **例子**

feat: 登录模版（登录页、登录落地页）

fix: 图表组件属性设置错误

perf: 弹窗模块性能优化
