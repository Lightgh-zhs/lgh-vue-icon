
<!--
    * Auto generate code
    * Author: lgh
    * Name: PicturePro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M640.47 85.333a64 64 0 0 1 58.815 38.784L728.384 192H832a128 128 0 0 1 128 128v490.667a128 128 0 0 1-128 128H192a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128h103.616l29.099-67.883a64 64 0 0 1 58.816-38.784h256.938z m0 64H383.53L337.814 256H192a64 64 0 0 0-63.893 60.245L128 320v490.667a64 64 0 0 0 60.245 63.893l3.755 0.107h640a64 64 0 0 0 63.893-60.246l0.107-3.754V320a64 64 0 0 0-60.245-63.893L832 256H686.187l-45.718-106.667z m-128.47 192c117.824 0 213.333 95.51 213.333 213.334S629.824 768 512 768s-213.333-95.51-213.333-213.333S394.176 341.333 512 341.333z m0 64A149.333 149.333 0 1 0 512 704a149.333 149.333 0 0 0 0-298.667zM800 320a32 32 0 1 1 0 64 32 32 0 0 1 0-64z"  /></svg>
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
