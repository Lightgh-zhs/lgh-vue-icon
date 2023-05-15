<!--
* @description 
* @fileName custom-icon.vue
* @author 杨双印 Y00175537
* @date 2023/05/10 18:28:26
* @version V1.0.0
!-->
<template>
    <component :is="icon" :style="{ fontSize: fontSize.toString().replace('px', '') + 'px' }" :color="color"></component>
</template>


<script lang="ts" setup>
const props = defineProps({
    fontSize: {
        type: [String, Number],
        default: "20px"
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
<style >
.l-icon {
    --color: inherit;
    height: 1em;
    width: 1em;
    line-height: 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    fill: currentColor;
    color: var(--color);
    font-size: inherit
}
</style>