
<!--
    * Auto generate code
    * Author: lgh
    * Name: FolderPro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M810.667 85.333A85.333 85.333 0 0 1 896 170.667v152.021c36.821 9.493 64 42.88 64 82.645v405.334a128 128 0 0 1-128 128H192a128 128 0 0 1-128-128v-512a85.376 85.376 0 0 1 64-82.646v-45.354a85.333 85.333 0 0 1 85.333-85.334h597.334zM128.149 296.171l-0.149 2.496v512a64 64 0 0 0 60.245 63.893l3.755 0.107h640a64 64 0 0 0 63.893-60.246l0.107-3.754V405.333a21.333 21.333 0 0 0-18.837-21.184l-2.496-0.149H638.165L516.096 282.283a21.333 21.333 0 0 0-10.688-4.736l-2.987-0.214H149.333a21.333 21.333 0 0 0-21.184 18.838z m407.04-82.838L663.168 320H832V170.667a21.333 21.333 0 0 0-18.837-21.184l-2.496-0.15H213.333a21.333 21.333 0 0 0-21.184 18.838l-0.149 2.496v42.666h343.168z"  /></svg>
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
