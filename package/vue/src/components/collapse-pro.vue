
<!--
    * Auto generate code
    * Author: lgh
    * Name: CollapsePro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M107.29472 201.23648h783.36a30.72 30.72 0 0 0 0-61.44h-783.36a30.72 30.72 0 0 0 0 61.44zM507.41248 362.0352H106.5728c-13.73696 0-24.87296 13.75744-24.87296 30.72s11.136 30.72 24.87296 30.72h400.83968c13.73696 0 24.87296-13.75744 24.87296-30.72s-11.136-30.72-24.87296-30.72zM507.41248 594.51392H106.5728c-13.73696 0-24.87296 13.75744-24.87296 30.72s11.136 30.72 24.87296 30.72h400.83968c13.73696 0 24.87296-13.75744 24.87296-30.72s-11.136-30.72-24.87296-30.72zM895.77472 816.74752h-783.36a30.72 30.72 0 0 0 0 61.44h783.36a30.72 30.72 0 0 0 0-61.44zM889.71264 371.29216c16.1024-9.29792 36.22912 2.32448 36.22912 20.9152v228.63872c0 18.59072-20.12672 30.21312-36.22912 20.9152l-184.70912-106.63936c-16.1024-9.29792-16.1024-32.5376 0-41.83552l184.70912-121.99424z"  /></svg>
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
