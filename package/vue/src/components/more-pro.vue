
<!--
    * Auto generate code
    * Author: lgh
    * Name: MorePro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M512 45.91616c-258.35008 0-468.53632 210.18624-468.53632 468.53632s210.18624 468.5312 468.53632 468.5312 468.53632-210.18624 468.53632-468.53632S770.35008 45.91616 512 45.91616z m0 875.62752c-224.47616 0-407.09632-182.62016-407.09632-407.09632S287.52384 107.35616 512 107.35616s407.09632 182.62016 407.09632 407.09632-182.62016 407.0912-407.09632 407.0912z"  /><path fill="currentColor" d="M517.12 294.4m-44.07808 0a44.07808 44.07808 0 1 0 88.15616 0 44.07808 44.07808 0 1 0-88.15616 0Z"  /><path fill="currentColor" d="M517.12 517.38112m-44.07808 0a44.07808 44.07808 0 1 0 88.15616 0 44.07808 44.07808 0 1 0-88.15616 0Z"  /><path fill="currentColor" d="M517.12 740.36736m-44.07808 0a44.07808 44.07808 0 1 0 88.15616 0 44.07808 44.07808 0 1 0-88.15616 0Z"  /></svg>
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
