> 组件代码需遵循 vue.js 官方风格指南：[**https://cn.vuejs.org/v2/style-guide/**](https://cn.vuejs.org/v2/style-guide/)

### 1. 每个组件都需要以**单独文件夹**的形式，存放在 /src/components/ 下。

例：/src/components/button/index.uve

### 2. 组件名为多个单词时，使用 **横线连接 (kebab-case)**。

例：nav-bar

### 3. 和父组件紧密耦合的子组件应该以父组件名作为前缀命名。

例：picker、picker-date、picker-time

### 4. JS/JSX 中的组件名使用 **大驼峰(PascalCase) **

```javascript
import MxInput from './input';

export default {
  name: 'MxInput',
  // ...
};
```

### 5. 使用 matrix 组件时，必须以 mx- 为开头

```html
<mx-form>
  <mx-picker-date />
  <mx-button>提交</mx-button>
</mx-form>
```

### 6. Prop 的定义应该尽量详细，至少需要指定其类型。

```javascript
props: {
  value: {
    type: String,
    default: '提交',
  }
}
```

### 7. 在声明 prop 的时候，其命名应该始终使用 **小驼峰(camelCase)**，而在模板和 JSX 中应该始终使用 **横线连接 (kebab-case)**。

```javascript
props: {
  openType: {
    type: String,
  }
}
```

```html
<mx-button open-type="getUserInfo" />
```

### 8. 在组件上总是必须用 key 配合 v-for，以便维护内部组件及其子树的状态。

```html
<ul>
  <li v-for="item in options" :key="item.id">
    {{ item.label }}
  </li>
</ul>
```

### 9. 永远不要把 `v-if` 和 `v-for` 同时用在同一个元素上

> 当 Vue 处理指令时，`v-for` 比 `v-if` 具有更高的优先级，因此哪怕我们只渲染出一小部分的元素，也得在每次重渲染的时候遍历整个列表

> 请先处理好数据，再使用 v-for

### 10. 指令缩写 (用 `:` 表示 `v-bind:`、用 `@` 表示 `v-on:` 和用 `#` 表示 `v-slot:`)

### 11. **组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。**

```javascript
// 反例
{
  {
    fullName
      .split(' ')
      .map(function (word) {
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(' ');
  }
}
```

应使用以下方式：

```html
<!---- 在模板中 ---->
{{ normalizedFullName }}
```

```javascript
// 复杂表达式已经移入一个计算属性
computed: {
  normalizedFullName: function () {
    return this.fullName.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  }
}
```

### 12. **非空 HTML attribute 值应该始终带引号**

```html
<mx-button :style="{ width: buttunWidth + 'rpx' }" />
```

### 13. 单文件组件的 最外层元素 需要遵循以下顺序：

```text
- template

- script

- style
```

### 14. 开发组件时，options 需要遵循以下顺序

```text
- name

- directives

- filters

- mixins

- props

- data

- computed

- watch

- beforeCreate

- created

- beforeMountmounted

- beforeUpdate

- updated

- activated

- deactivated

- beforeDestroy

- destroyed

- methods
```

### 15. 引用组件时，attribute 需要遵循以下顺序

```text
- is

- v-for

- v-if

- v-else-if

- v-else

- v-show

- v-cloak

- v-pre

- v-once

- id

- ref

- key

- v-model

- v-on

- v-html

- v-text
```
