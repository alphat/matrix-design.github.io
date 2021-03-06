## 导航

导航栏对全局状态，负责向用户传达其当前位置，可以前往的位置，以及部分当前可执行的操作，汇付一般选用导航栏，分段控件，标签栏及其对应变化来应对需求。

### 通用原则

原则一：给用户清晰的导航指示，避免重复多重导航，以免给用户造成困扰。

原则二：需要展示多个标签或操作时，可以适当折叠收起，需注意对用户的信息的提示和视觉整合。

## 导航栏

基本导航栏，位于状态栏下，为用户标明当前页位置，可进行的全局操作以及导航操作

导航区：一般显示返回操作或者触发菜单栏，当前页层级过多是可以同时显示“返回”与“关闭”操作，返回时返回该流程其实页。

标题区：标题由开发者自定义，一般是作为向用户显示当前位置，需设定最长显示字段，超过字符会被省略。

操作区：操作区可以定义“分享”，“更多”等操作，一般不会同时显示两个操作。点击更多，底部弹出列表

### 基础样式

![](https://cdn.cloudpnr.com/miniapp/matrix/teambition/nav-1.png)

## 分段导航标签

可以作为长页面的分段锚点标签，或作为内容分类切换标签，帮助用户在不同内容快速定位，切换。

### 设计原则

原则一：根据不同需求，一般选项数为 2-5 个不等，超过 5 个小时可滑动，需要注意名称右边的预留边距，能让用户意识到有更多选项，如，第 5 项贴边显示。

原则二：当前标签选项需要高亮显示，提示用户当前位置。

原则三：标签栏位置可以固定在页面顶部，也可以安排在页面中，并在滑动到顶部的时候吸顶显示。

原则四：不建议同时显示双层标签。

### 案例展示

![](https://cdn.cloudpnr.com/miniapp/matrix/teambition/nav-2.png)

## 标签栏

底部标签栏一般作为全局导航控件，能让用户在几大类内容间快速切换，标签栏的图标与文字可以由开发者自定义设计样式。

### 设计原则

原则一：建议同时使用图标与文字命名标签，不建议只使用图标说明。用绿色标准色以及灰色搭配；

原则二：通常作为应用菜单分类，根据不同需要包含 3~5 个标签不等。超过 5 个标签时，在第五个使用“更多”涵盖

### 顶部标签栏

![](https://cdn.cloudpnr.com/miniapp/matrix/teambition/nav-3.png)
