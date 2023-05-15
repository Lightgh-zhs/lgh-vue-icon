
<!--
    * Auto generate code
    * Author: lgh
    * Name: HomePro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M149.333 960A85.333 85.333 0 0 1 64 874.667V331.22a85.333 85.333 0 0 1 48.64-77.056L475.307 81.472a85.333 85.333 0 0 1 73.386 0L911.36 254.165A85.333 85.333 0 0 1 960 331.221v543.446A85.333 85.333 0 0 1 874.667 960H149.333z m356.054-821.76l-2.56 1.024L140.16 311.957a21.333 21.333 0 0 0-11.99 16.555l-0.17 2.71v543.445a21.333 21.333 0 0 0 18.837 21.184l2.496 0.149h192V661.333A85.333 85.333 0 0 1 426.667 576h170.666a85.333 85.333 0 0 1 85.334 85.333V896h192a21.333 21.333 0 0 0 21.184-18.837l0.149-2.496V331.22a21.333 21.333 0 0 0-9.792-17.941l-2.368-1.323-362.667-172.693a21.333 21.333 0 0 0-15.786-1.024zM597.333 640H426.667a21.333 21.333 0 0 0-21.184 18.837l-0.15 2.496V896h213.334V661.333a21.333 21.333 0 0 0-18.838-21.184l-2.496-0.149z"  /></svg>
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
