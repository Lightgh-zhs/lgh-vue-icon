
<!--
    * Auto generate code
    * Author: lgh
    * Name: GoodPro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M192 938.667a128 128 0 0 1-128-128V469.333a128 128 0 0 1 128-128h83.797l45.76-183.338A85.333 85.333 0 0 1 424.341 95.7l32.15 7.744a128 128 0 0 1 98.005 124.736l-0.128 49.152h200.17A170.667 170.667 0 0 1 924.716 460.95L903.38 741.504a213.333 213.333 0 0 1-212.736 197.163H192z m85.29-533.334H192a64 64 0 0 0-63.893 60.246l-0.107 3.754v341.334a64 64 0 0 0 60.245 63.893l3.755 0.107h85.312l-0.021-469.334z m107.094-234.197l-0.747 2.347-42.304 169.472v531.712h349.312a149.333 149.333 0 0 0 148.438-132.843l0.469-5.163 21.333-280.576A106.667 106.667 0 0 0 759.147 341.44l-4.587-0.107H490.24l0.277-113.28a64 64 0 0 0-45.312-61.376l-3.69-1.002-32.15-7.744a21.333 21.333 0 0 0-24.96 13.205z"  /></svg>
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
