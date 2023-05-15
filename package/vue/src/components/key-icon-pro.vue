
<!--
    * Auto generate code
    * Author: lgh
    * Name: KeyIconPro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M843.861 176.79c129.131 129.13 129.131 338.495 0 467.626-121.493 121.493-314.026 128.683-443.904 21.547L293.248 772.629l99.584 99.563a8.533 8.533 0 0 1 0 12.075l-33.195 33.194a8.533 8.533 0 0 1-12.053 0L248 817.877l-99.541 99.584a8.533 8.533 0 0 1-12.075 0l-33.195-33.194a8.533 8.533 0 0 1 0-12.075l105.515-105.493a8.704 8.704 0 0 1 0.085-0.086l33.195-33.194 112.704-112.726c-107.136-129.898-99.947-322.41 21.547-443.904 129.13-129.13 338.496-129.13 467.626 0z m-422.378 45.247c-104.128 104.15-104.128 272.982 0 377.131 104.149 104.128 272.981 104.128 377.13 0 104.15-104.15 104.15-272.981 0-377.13-104.149-104.129-272.981-104.129-377.13 0z"  /></svg>
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
