
<!--
    * Auto generate code
    * Author: lgh
    * Name: FinishPro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M515.08736 40.40704c-258.35008 0-468.53632 210.18624-468.53632 468.53632s210.18624 468.53632 468.53632 468.53632 468.53632-210.18624 468.53632-468.53632-210.18624-468.53632-468.53632-468.53632z m0 875.63264c-224.47616 0-407.09632-182.62016-407.09632-407.09632s182.62016-407.09632 407.09632-407.09632 407.09632 182.62016 407.09632 407.09632-182.62016 407.09632-407.09632 407.09632z"  /><path fill="currentColor" d="M678.24128 363.22816l-226.25792 226.26304-100.06016-100.05504a30.70464 30.70464 0 0 0-43.43808 0 30.70464 30.70464 0 0 0 0 43.43808l121.7792 121.7792a30.69952 30.69952 0 0 0 43.4432 0l247.98208-247.99232a30.70976 30.70976 0 0 0 0-43.4432 30.73024 30.73024 0 0 0-43.44832 0.01024z"  /></svg>
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
