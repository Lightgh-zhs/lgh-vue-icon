
<!--
    * Auto generate code
    * Author: lgh
    * Name: EditPencilPro
!-->

<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path fill="currentColor"
        d="M816.277 165.056a128 128 0 0 1 0 181.013L309.653 852.693a21.333 21.333 0 0 1-15.082 6.23H165.056a42.667 42.667 0 0 1-42.667-42.667V686.763a21.333 21.333 0 0 1 6.23-15.104l506.688-506.603a128 128 0 0 1 180.992 0z m-45.226 45.227a64 64 0 0 0-87.787-2.56l-2.752 2.56L188.885 701.93a8.533 8.533 0 0 0-2.496 6.037v78.464a8.531 8.531 0 0 0 8.534 8.533h78.421a8.533 8.533 0 0 0 6.037-2.517L771.03 300.843a64 64 0 0 0 2.582-87.787l-2.56-2.73z" />
    <path fill="currentColor"
        d="M590.016 210.304l181.013 181.013-45.248 45.248-181.013-181.013zM499.2 795.733h345.6q8.533 0 8.533 8.534V851.2q0 8.533-8.533 8.533H499.2q-8.533 0-8.533-8.533v-46.933q0-8.534 8.533-8.534zM669.867 667.733H844.8q8.533 0 8.533 8.534V723.2q0 8.533-8.533 8.533H669.867q-8.534 0-8.534-8.533v-46.933q0-8.534 8.534-8.534z" />
</svg>
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
