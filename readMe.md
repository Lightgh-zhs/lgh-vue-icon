- 本项目克隆了[@element-plus/element-plus-icons](https://github.com/element-plus/element-plus-icons)
- 本项目主要是为了便于增加svg图标使用（element-plus有固定的图标库，无法自定义添加）

# 安装

```
npm install lgh-vue-icon
```
or
```
yarn add lgh-vue-icon
```

# 引用图标

##单独引用组件
在组件的上引用`lgh-vue-icon`，并在组件的模板函数中使用:
``` vue
<template>
<Eleme :fontSize="20" color="#98712"/>
</template>
<script lang="ts" setup>
import {Eleme} from 'lgh-vue-icon';
</script>
```
##全局引用组件
在main.ts中引入组件，并全局安装
```typescript
import {install} from 'lgh-vue-icon';
import {createApp} from 'vue';

const app = createApp({});

// Install
install(app); 
// or 
// install(app,"prefix") //添加组件前缀
app.mount('#app');
```
使用方法：
``` vue
<template>
<Eleme :fontSize="30" color="#123456"/>
</template>
```
全局安装后，同时提供了一个自定义组件，可以根据名称显示svg
``` vue
<template>
<custom-icon name="Eleme" :fontSize="20" color="#000000"/>
</template>
```
fontSize支持数字或者字符串，10和10px有相同效果
