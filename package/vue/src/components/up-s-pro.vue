
<!--
    * Auto generate code
    * Author: lgh
    * Name: UpSPro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M512 42.667C771.2 42.667 981.333 252.8 981.333 512S771.2 981.333 512 981.333 42.667 771.2 42.667 512 252.8 42.667 512 42.667z m0 64c-223.85 0-405.333 181.482-405.333 405.333S288.149 917.333 512 917.333 917.333 735.851 917.333 512 735.851 106.667 512 106.667z m1.259 254.506c4.202 0.256 8.32 1.75 11.818 4.459l2.006 1.77L680.17 520.492a8.533 8.533 0 0 1 2.496 6.016v66.368a8.533 8.533 0 0 1-14.571 6.037L512 442.837 355.925 598.912a8.533 8.533 0 0 1-14.592-6.059v-66.389a8.533 8.533 0 0 1 2.496-6.016l153.088-153.067a21.248 21.248 0 0 1 13.824-6.208h2.518z"  /></svg>
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
