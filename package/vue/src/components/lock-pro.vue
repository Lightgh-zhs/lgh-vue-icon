
<!--
    * Auto generate code
    * Author: lgh
    * Name: LockPro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M512 64c153.173 0 277.333 124.16 277.333 277.333v128a128 128 0 0 1 128 128V832a128 128 0 0 1-128 128H234.667a128 128 0 0 1-128-128V597.333a128 128 0 0 1 128-128v-128C234.667 188.16 358.827 64 512 64z m277.333 469.333H234.667a64 64 0 0 0-63.894 60.246l-0.106 3.754V832a64 64 0 0 0 60.245 63.893l3.755 0.107h554.666a64 64 0 0 0 63.894-60.245l0.106-3.755V597.333a64 64 0 0 0-60.245-63.893l-3.755-0.107zM546.133 640c4.694 0 8.534 3.84 8.534 8.533v110.934a8.533 8.533 0 0 1-8.534 8.533H499.2a8.533 8.533 0 0 1-8.533-8.533V648.533c0-4.693 3.84-8.533 8.533-8.533h46.933zM512 128c-115.84 0-210.09 92.31-213.248 207.36l-0.085 5.973v128h426.666v-128c0-115.84-92.309-210.09-207.36-213.248L512 128z"  /></svg>
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
