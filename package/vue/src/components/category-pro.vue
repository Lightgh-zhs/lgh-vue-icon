
<!--
    * Auto generate code
    * Author: lgh
    * Name: CategoryPro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor" d="M160 682.667a96 96 0 1 1 0 192 96 96 0 0 1 0-192z m0 64a32 32 0 1 0 0 64 32 32 0 0 0 0-64z m791.467 0c4.693 0 8.533 3.84 8.533 8.533v46.933a8.533 8.533 0 0 1-8.533 8.534H328.533a8.533 8.533 0 0 1-8.533-8.534V755.2c0-4.693 3.84-8.533 8.533-8.533h622.934zM160 405.333a96 96 0 1 1 0 192 96 96 0 0 1 0-192z m0 64a32 32 0 1 0 0 64 32 32 0 0 0 0-64z m791.467 0c4.693 0 8.533 3.84 8.533 8.534V524.8a8.533 8.533 0 0 1-8.533 8.533H328.533A8.533 8.533 0 0 1 320 524.8v-46.933c0-4.694 3.84-8.534 8.533-8.534h622.934zM160 128a96 96 0 1 1 0 192 96 96 0 0 1 0-192z m0 64a32 32 0 1 0 0 64 32 32 0 0 0 0-64z m791.467 0c4.693 0 8.533 3.84 8.533 8.533v46.934a8.533 8.533 0 0 1-8.533 8.533H328.533a8.533 8.533 0 0 1-8.533-8.533v-46.934c0-4.693 3.84-8.533 8.533-8.533h622.934z"  /></svg>
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
