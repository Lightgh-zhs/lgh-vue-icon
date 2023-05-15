/**
 * @file build icon
 */

import * as fs from 'node:fs'
import path from 'node:path'
import IconInterface from '.'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
// icons list
interface IconList {
    [key: string]: IconInterface[]
}

// icon source
const dir = dirname(fileURLToPath(import.meta.url))
const sourcePath = path.resolve(dir, "../../svg")

const headerComment = (name: string | undefined) => {
    return `
<!--
    * Auto generate code
    * Author: lgh
    * Name: ${name}
!-->
`
}
// 正文
const contentComment = (content: string | undefined) => {
    return `
<template>
    <i class="l-icon" :style="{fontSize:fontSize.toString().replace(/px/gi, '') + 'px',color:color}">
        ${content}
    </i>
</template>
`
}

// setup
const exportComponent = (name: string) => {
    return `
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
`
}

let exportFunction = ""

// build code
const buildCode = (file: string, componentName: string, content: string) => {
    let vueContent = ""
    vueContent += headerComment(componentName)
    vueContent += contentComment(content)
    vueContent += exportComponent(componentName)
    fs.writeFileSync(path.resolve(dir, '../src/components/') + "/" + file + '.vue', vueContent, 'utf8')
    exportFunction += `
export { default as ${componentName} } from './${file}.vue'`
}

// read svg source
fs.readdirSync(path.resolve(sourcePath)).forEach((file) => {
    const filename = file.replace('.svg', '')
    const componentName = file.replace(/.svg/gi, '').split('-').map((item, index) => {
        return item.slice(0, 1).toUpperCase() + item.slice(1);
    }).join("")
    buildCode(filename, componentName, fs.readFileSync(sourcePath + "/" + file, 'utf8'))
})

fs.writeFileSync(path.resolve(dir, '../src/components') + "/index.ts", exportFunction, 'utf8')





