
<!--
    * Auto generate code
    * Author: lgh
    * Name: SelectedPro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M908.245 213.952h65.707a8.533 8.533 0 0 1 6.037 14.57L445.227 763.308a31.787 31.787 0 0 1-42.518 2.176l-2.773-2.56-343.04-343.04a8.533 8.533 0 0 1 6.037-14.571h67.2a8.533 8.533 0 0 1 6.038 2.496l287.338 287.36 478.699-478.72a8.533 8.533 0 0 1 6.037-2.496z"  /></svg>
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
