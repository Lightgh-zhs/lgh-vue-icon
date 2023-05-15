
<!--
    * Auto generate code
    * Author: lgh
    * Name: AddPro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M524.8 64c4.693 0 8.533 3.84 8.533 8.533v418.134h418.134c4.693 0 8.533 3.84 8.533 8.533v46.933a8.533 8.533 0 0 1-8.533 8.534H533.333V972.8a8.533 8.533 0 0 1-8.533 8.533h-46.933a8.533 8.533 0 0 1-8.534-8.533V554.667H51.2a8.533 8.533 0 0 1-8.533-8.534V499.2c0-4.693 3.84-8.533 8.533-8.533h418.133V72.533c0-4.693 3.84-8.533 8.534-8.533H524.8z"  /></svg>
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
