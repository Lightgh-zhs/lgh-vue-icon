
<!--
    * Auto generate code
    * Author: lgh
    * Name: WalletPro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M787.584 164.139a85.333 85.333 0 0 1 1.493 15.936v13.653A128.043 128.043 0 0 1 896 320v88.021c36.821 9.494 64 42.88 64 82.646V640a85.376 85.376 0 0 1-64 82.645v88.022a128 128 0 0 1-128 128H192a128 128 0 0 1-128-128V320a128 128 0 0 1 127.744-128v-1.43l496.085-94.357a85.333 85.333 0 0 1 99.776 67.904zM768 256H192a64 64 0 0 0-63.893 60.245L128 320v490.667a64 64 0 0 0 60.245 63.893l3.755 0.107h576a64 64 0 0 0 63.893-60.246l0.107-3.754v-85.334H650.667a160 160 0 0 1 0-320H832V320a64 64 0 0 0-60.245-63.893L768 256z m106.667 213.333h-224a96 96 0 0 0-4.523 191.894l4.523 0.106h224a21.333 21.333 0 0 0 21.184-18.837L896 640V490.667a21.333 21.333 0 0 0-18.837-21.184l-2.496-0.15z m-224 64a32 32 0 1 1 0 64 32 32 0 0 1 0-64z m51.584-374.549l-2.475 0.341-172.95 32.854h198.23v-12.907l-0.341-2.987a21.333 21.333 0 0 0-22.464-17.28z"  /></svg>
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
