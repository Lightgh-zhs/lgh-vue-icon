
<!--
    * Auto generate code
    * Author: lgh
    * Name: CollectionPro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M530.88 79.488a42.667 42.667 0 0 1 19.37 19.37l118.486 240.065 264.96 38.506a42.667 42.667 0 0 1 23.637 72.768l-191.722 186.88 45.269 263.83a42.667 42.667 0 0 1-61.91 44.992L512 821.333 275.03 945.92a42.667 42.667 0 0 1-61.91-45.013l45.27-263.851-191.723-186.88a42.667 42.667 0 0 1 23.658-72.768l264.939-38.507L473.749 98.837a42.667 42.667 0 0 1 57.131-19.37z m95.36 317.93L512 165.91 397.76 397.42 142.293 434.56l184.854 180.181-43.648 254.422L512 749.035 740.48 869.14 696.853 614.72l184.832-180.181-255.445-37.12z"  /></svg>
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
