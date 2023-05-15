
<!--
    * Auto generate code
    * Author: lgh
    * Name: SearchPro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M743.232 210.837c144.896 144.896 149.781 376.79 14.656 527.574l160.32 160.298a8.533 8.533 0 0 1 0 12.075l-33.173 33.173a8.533 8.533 0 0 1-12.075 0L711.403 782.4C560.64 903.147 339.925 893.653 200.17 753.899c-149.974-149.974-149.974-393.11 0-543.062 149.973-149.973 393.088-149.973 543.061 0z m-497.813 45.248c-124.971 124.971-124.971 327.595 0 452.566 124.97 124.949 327.594 124.949 452.565 0 124.95-124.971 124.95-327.595 0-452.566-124.97-124.97-327.595-124.97-452.565 0z"  /></svg>
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
