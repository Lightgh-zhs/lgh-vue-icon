
<!--
    * Auto generate code
    * Author: lgh
    * Name: TargetPro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M841.28 64a42.667 42.667 0 0 1 41.387 53.077L815.552 384l67.115 266.923A42.667 42.667 0 0 1 841.28 704H192v247.467a8.533 8.533 0 0 1-8.533 8.533h-46.934a8.533 8.533 0 0 1-8.533-8.533V72.533c0-4.693 3.84-8.533 8.533-8.533H841.28z m-27.37 64H192v512h621.91l-64.363-256 64.362-256z"  /></svg>
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
