
<!--
    * Auto generate code
    * Author: lgh
    * Name: ArrowDownBold
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/></svg>
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
