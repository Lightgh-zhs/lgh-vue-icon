
<!--
    * Auto generate code
    * Author: lgh
    * Name: AngerPro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M512 42.667C771.2 42.667 981.333 252.8 981.333 512S771.2 981.333 512 981.333 42.667 771.2 42.667 512 252.8 42.667 512 42.667z m0 64c-223.85 0-405.333 181.482-405.333 405.333S288.149 917.333 512 917.333 917.333 735.851 917.333 512 735.851 106.667 512 106.667z m0 448a425.067 425.067 0 0 1 187.243 43.2 8.533 8.533 0 0 1 4.778 7.68v60.501a4.267 4.267 0 0 1-6.464 3.67 416.136 416.136 0 0 0-11.136-6.465A361.045 361.045 0 0 0 512 618.667a361.024 361.024 0 0 0-185.557 51.029 4.267 4.267 0 0 1-6.464-3.648v-60.544a8.533 8.533 0 0 1 4.8-7.659A425.045 425.045 0 0 1 512 554.667zM362.667 384a42.667 42.667 0 1 1 0 85.333 42.667 42.667 0 0 1 0-85.333z m298.666 0a42.667 42.667 0 1 1 0 85.333 42.667 42.667 0 0 1 0-85.333z"  /></svg>
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
