
<!--
    * Auto generate code
    * Author: lgh
    * Name: PcPro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M809.71264 121.30304H209.93536c-64.84992 0-117.6064 52.75648-117.6064 117.6064v373.06368c0 64.84992 52.75648 117.6064 117.6064 117.6064h279.36256v123.4688H245.08928a30.72 30.72 0 0 0 0 61.44h570.32704a30.72 30.72 0 0 0 0-61.44h-264.6784v-123.4688h258.97984c64.84992 0 117.6064-52.75648 117.6064-117.6064V238.90432c-0.00512-64.8448-52.7616-117.60128-117.61152-117.60128z m56.1664 490.67008c0 30.97088-25.19552 56.1664-56.1664 56.1664H209.93536c-30.97088 0-56.1664-25.19552-56.1664-56.1664V238.90432c0-30.97088 25.19552-56.1664 56.1664-56.1664h599.7824c30.97088 0 56.1664 25.19552 56.1664 56.1664v373.0688z"  /></svg>
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
