<!--
* @description 
* @fileName custom-icon.vue
* @author 杨双印 Y00175537
* @date 2023/05/10 18:28:26
* @version V1.0.0
!-->
<template>
    <i class="l-icon"
        :style="{ width: width.toString().replace(/px/gi, '').toString + 'px', height: height.toString().replace(/px/gi, '').toString + '', color: color }">
        <component :is="icon"></component>
    </i>
</template>


<script lang="ts" setup>
const props = defineProps({
    width: {
        type: String || Number,
        default: "10px"
    },
    height: {
        type: String || Number,
        default: "10px"
    },
    color: {
        type: String,
        default: ""
    },
    icon: {
        type: String,
        default: "Apple"
    }
})
</script>

<style lang="scss" scoped>
.l-icon {
    height: 1em;
    width: 1em;
    line-height: 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    fill: currentColor;
    font-size: inherit
}
</style>