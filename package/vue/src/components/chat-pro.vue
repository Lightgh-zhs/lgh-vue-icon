
<!--
    * Auto generate code
    * Author: lgh
    * Name: ChatPro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M512 64c259.2 0 469.333 200.576 469.333 448S771.2 960 512 960a484.48 484.48 0 0 1-232.725-58.88L162.88 951.765a42.667 42.667 0 0 1-58.517-49.002l29.76-125.014C76.629 703.403 42.667 611.477 42.667 512 42.667 264.576 252.8 64 512 64z m0 64c-224.512 0-405.333 172.587-405.333 384 0 79.573 25.557 155.435 72.554 219.285l5.526 7.318 18.709 24.192-26.965 113.237 105.984-46.08 27.477 15.019C370.859 878.229 439.979 896 512 896c224.512 0 405.333-172.587 405.333-384S736.512 128 512 128zM354.304 469.333a42.667 42.667 0 1 1 0 85.334 42.667 42.667 0 0 1 0-85.334z m159.019 0a42.667 42.667 0 1 1 0 85.334 42.667 42.667 0 0 1 0-85.334z m158.997 0a42.667 42.667 0 1 1 0 85.334 42.667 42.667 0 0 1 0-85.334z"  /></svg>
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
