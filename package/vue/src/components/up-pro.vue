
<!--
    * Auto generate code
    * Author: lgh
    * Name: UpPro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M936.17 669.952L534.614 268.395a32 32 0 0 0-42.986-2.07l-2.283 2.07L87.829 669.952a8.533 8.533 0 0 0-2.496 6.037v66.347a8.533 8.533 0 0 0 14.571 6.059l412.075-412.096 412.117 412.096a8.533 8.533 0 0 0 14.57-6.038v-66.346a8.533 8.533 0 0 0-2.495-6.059z"  /></svg>
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
