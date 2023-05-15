
<!--
    * Auto generate code
    * Author: lgh
    * Name: MailPro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M789.333 128A170.667 170.667 0 0 1 960 298.667v426.666A170.667 170.667 0 0 1 789.333 896H234.667A170.667 170.667 0 0 1 64 725.333V298.667A170.667 170.667 0 0 1 234.667 128h554.666zM896 371.797L585.387 519.723a170.667 170.667 0 0 1-146.774 0L128 371.797v353.536a106.667 106.667 0 0 0 102.037 106.56l4.63 0.107h554.666a106.667 106.667 0 0 0 106.56-102.037l0.107-4.63V371.797zM789.333 192H234.667a106.667 106.667 0 0 0-106.56 102.037l-0.107 6.891 338.133 161.024a106.667 106.667 0 0 0 86.55 2.283l5.184-2.283L896 300.907v-2.24a106.667 106.667 0 0 0-102.037-106.56l-4.63-0.107z"  /></svg>
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
