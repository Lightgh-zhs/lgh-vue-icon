
<!--
    * Auto generate code
    * Author: lgh
    * Name: CompassPro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M512 42.667C771.2 42.667 981.333 252.8 981.333 512S771.2 981.333 512 981.333 42.667 771.2 42.667 512 252.8 42.667 512 42.667z m0 64c-223.85 0-405.333 181.482-405.333 405.333S288.149 917.333 512 917.333 917.333 735.851 917.333 512 735.851 106.667 512 106.667z m195.03 235.818a42.667 42.667 0 0 1 0 29.163L631.21 580.16a85.333 85.333 0 0 1-51.05 51.05l-208.512 75.82a42.667 42.667 0 0 1-54.677-54.678l75.818-208.512a85.333 85.333 0 0 1 51.051-51.05l208.512-75.82a42.667 42.667 0 0 1 54.677 25.515z m-75.777 50.262l-165.546 60.202a21.333 21.333 0 0 0-11.691 10.283l-1.067 2.475-60.202 165.546 165.546-60.202a21.333 21.333 0 0 0 11.691-10.283l1.067-2.475 60.202-165.546z"  /></svg>
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
