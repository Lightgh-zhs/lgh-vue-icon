
<!--
    * Auto generate code
    * Author: lgh
    * Name: BankCardPro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M832 128a128 128 0 0 1 128 128v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V256a128 128 0 0 1 128-128h640z m64 256H128v384a64 64 0 0 0 60.245 63.893L192 832h640a64 64 0 0 0 63.893-60.245L896 768V384zM354.133 682.667c4.694 0 8.534 3.84 8.534 8.533v46.933a8.533 8.533 0 0 1-8.534 8.534H221.867a8.533 8.533 0 0 1-8.534-8.534V691.2c0-4.693 3.84-8.533 8.534-8.533h132.266zM832 192H192a64 64 0 0 0-63.893 60.245L128 256v64h768v-64a64 64 0 0 0-60.245-63.893L832 192z"  /></svg>
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
