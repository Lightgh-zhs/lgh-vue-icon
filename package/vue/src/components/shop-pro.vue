
<!--
    * Auto generate code
    * Author: lgh
    * Name: ShopPro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M938.667 832a128 128 0 0 1-128 128H213.333a128 128 0 0 1-128-128V192a128 128 0 0 1 128-128h597.334a128 128 0 0 1 128 128v640z m-64-64H149.333v64a64 64 0 0 0 60.246 63.893l3.754 0.107h597.334a64 64 0 0 0 63.893-60.245l0.107-3.755v-64z m-64-640H213.333a64 64 0 0 0-63.893 60.245l-0.107 3.755v512h725.334V192a64 64 0 0 0-60.246-63.893l-3.754-0.107z m-405.334 93.867v55.466a106.667 106.667 0 0 0 102.038 106.56L512 384a106.667 106.667 0 0 0 106.56-102.037l0.107-4.63v-55.466c0-4.694 3.84-8.534 8.533-8.534h46.933c4.694 0 8.534 3.84 8.534 8.534v55.466a170.667 170.667 0 1 1-341.334 0v-55.466c0-4.694 3.84-8.534 8.534-8.534H396.8c4.693 0 8.533 3.84 8.533 8.534z"  /></svg>
    </i>
</template>

<script lang="ts" setup>
const props = defineProps({
    fontSize: {
        type: [String ,Number],
        default: "20px"
    },
    color: {
        type: String,
        default: "#000000"
    },
    icon: {
        type: String,
        default: "Apple"
    }
})
</script>
