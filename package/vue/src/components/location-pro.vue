
<!--
    * Auto generate code
    * Author: lgh
    * Name: LocationPro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M512 64c212.075 0 384 170.283 384 380.373 0 93.867-34.347 179.84-91.307 246.187l-6.613 7.616c-43.904 49.877-124.587 130.432-242.07 241.664a64 64 0 0 1-84.863 2.816l-3.158-2.816-36.544-34.752c-103.573-98.901-174.293-170.39-212.117-214.485A376.747 376.747 0 0 1 128 444.373C128 234.283 299.925 64 512 64z m0 64c-176.853 0-320 141.781-320 316.373 0 76.011 27.136 147.755 75.883 204.544l6.357 7.296c39.957 45.355 113.45 119.019 219.67 219.99L512 893.376l52.224-49.75c93.483-89.663 157.675-154.858 191.915-194.751A312.661 312.661 0 0 0 832 444.373C832 269.781 688.853 128 512 128z m0 170.667a149.333 149.333 0 1 1 0 298.666 149.333 149.333 0 0 1 0-298.666z m0 64a85.333 85.333 0 1 0 0 170.666 85.333 85.333 0 0 0 0-170.666z"  /></svg>
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
