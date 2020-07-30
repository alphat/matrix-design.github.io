# 信息输入

用户信息输入的方式

## 通用原则

原则一：降低用户输入成本

1. 非必要信息不要让用户输入，可选择的信息不要让用户手动输入

2. 帮助用户获取系统中已有的信息，避免重复填写

3. 为用户提供合理的默认选项

原则二：信息清晰直观

1. 输入项名称表意清晰

2. 为用户提供合理的默认选项

原则三：复杂任务归类分解，减少用户心理障碍

## 文本输入

供用户手动输入文本信息的组件，是无界输入组件

## 设计原则

原则一：非常规输入项提供暗提示帮助用户理解

原则二：由于无界输入组件对内容的不可控性，应尽量在输入完成后做到实时验证

原则三：根据输入项内容，不同设备分辨率定义字数限定与截断规则

![](https://cdn.cloudpnr.com/miniapp/matrix/teambition/input-1.png)

## 选择

在固定选项范围内供用户选取的组件，是有界输入组件。

## 设计原则

原则一：有界输入组件应明确告知用户可选择边界

原则二：选项应按规则有序排列，方便用户查找

原则三：根据选项内容，数量，层级使用不同的选择组件

## 单选框

在一组选择中选择一个，选项较少时可直接展示在当前界面中展示，若选项数量过多或可拓展要求较高，可考虑触发浮层或新页面承载。

![](https://cdn.cloudpnr.com/miniapp/matrix/teambition/input-2.png)

## 单选按钮

![](https://cdn.cloudpnr.com/miniapp/matrix/teambition/input-3.png)

## 复选框

在一组选项中选择多个需明确告知用户可选数量限制。

![](https://cdn.cloudpnr.com/miniapp/matrix/teambition/input-4.png)

## 滚轮

滚轮一般通过浮层的形式出现，也可内嵌在页面中，通过滚动选项进行选择，多层级选项应尽量聚合为一个滚轮，

供用户完成系列选择行为，避免拆分操作，由于手机屏幕控件限制，滚轮中同时展示的层级最多不超过 4 个

![](https://cdn.cloudpnr.com/miniapp/matrix/teambition/input-5.png)

## 日期选择器

时间选择器可以让用户滚动来选择某个时间或者时间段，普通情况 2-3 列，特殊情况可以最多有 5 列；选择某个日期后自动带出当天日期的礼数，

选择时间段自动带出礼拜数和天数。

![](https://cdn.cloudpnr.com/miniapp/matrix/teambition/input-6.png)

## 日历选择器

日历常用于展以月为维度的时间，用户可以用日历控件来查看并选择具体时间点或时间段，日历方便用户来查找跨月的时间，日历的

功能可被大致分为展示日历和日期区间选择。

![](https://cdn.cloudpnr.com/miniapp/matrix/teambition/input-7.png)

## 上传

将信息从本地设备传到远程服务器上

## 设计原则

原则一：根据支持的文件格式限定限定范围，用户看到的选项即是正确的选项，若是支持上传多个文件，则选取组件中应支持多选

原则二：上传过程中，显示上传进度

原则三：上传完成后，支持预览，便于用户核对信息

## 图片上传

通过点击，从本地设备上传图片文件

![](https://cdn.cloudpnr.com/miniapp/matrix/teambition/input-8.png)

## 识别

通过 OCR，语音，指纹等识别手段获取信息方式，较为便捷

## 设计原则

原则一：根据用户输入信息的成本判断是否采用识别作为输入方式

原则二：采用识别作为信息输入方式时，需保留文本输入选项，避免因环境或物理限制导致无法识别信息的状况

## 光学字符识别 OCR

optical Character Recognition,正对应刷体字符通过光学识别转化为文本信息

![](https://cdn.cloudpnr.com/miniapp/matrix/teambition/input-9.png)