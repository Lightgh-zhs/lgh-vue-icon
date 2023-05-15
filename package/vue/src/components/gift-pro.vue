
<!--
    * Auto generate code
    * Author: lgh
    * Name: GiftPro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M256 960a128 128 0 0 1-128-128V466.645A85.376 85.376 0 0 1 64 384V277.333A85.333 85.333 0 0 1 149.333 192h290.902l-68.63-68.63a8.533 8.533 0 0 1 0-12.074L404.8 78.123a8.533 8.533 0 0 1 12.053 0l84.48 84.48 84.48-84.48a8.533 8.533 0 0 1 12.054 0l33.194 33.173a8.533 8.533 0 0 1 0 12.075l-68.65 68.608 312.256 0.021A85.333 85.333 0 0 1 960 277.333V384a85.376 85.376 0 0 1-64 82.645V832a128 128 0 0 1-128 128H256z m213.333-490.667H192V832a64 64 0 0 0 60.245 63.893L256 896h213.333V469.333z m362.667 0H533.333V896H768a64 64 0 0 0 63.893-60.245L832 832V469.333zM469.333 256h-320a21.333 21.333 0 0 0-21.184 18.837l-0.149 2.496V384a21.333 21.333 0 0 0 18.837 21.184l2.496 0.15h320V256z m405.334 0H533.333v149.333h341.334a21.333 21.333 0 0 0 21.184-18.837L896 384V277.333a21.333 21.333 0 0 0-18.837-21.184l-2.496-0.149z"  /></svg>
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
