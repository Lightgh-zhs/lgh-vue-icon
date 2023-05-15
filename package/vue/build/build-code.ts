import fs from 'node:fs'
import path from 'node:path'
import IconInterface from '.'

// 顶部注释
const headerComment = (name: string | undefined) => {
    return `<!--
    * Auto generate code
    * Author: lgh
    * Name: ${name}
!-->
`
}

// 引入组件
const importComment = (component: string, path: string) => {
    return `import ${component} from ${path}`
}

// 剔除非svg内容
const fliterHtml = (content:string) =>{
    // const regexp = new RegExp()
}

// 正文
const contentComment = (content: string | undefined) => {
    content += `
    <svg color="">
    `
    
    return `<template>
    ${content}
</template>`
}


const exportComponent = (name:string) =>{
  return `
  <script lang="ts">
  import type { DefineComponent } from 'vue'
  export default ({
    name: "${name}",
  }) as DefineComponent
  </script>
`
}
const buildCode = (icon: IconInterface) => {
    let content = ""
    // 创建注释
    content += headerComment(icon.name)

    // 创建模板
    content += contentComment(icon.svg)

    // 导出
    content += exportComponent(icon.name)

    return content
}




let icons: string = ""
icons = fs.readFileSync(path.resolve(__dirname, "../source/icons.json"), 'utf8')
let iconsJson = JSON.parse(icons)
for (let key in iconsJson) {
    if (Array.isArray(iconsJson[key])) {
        if (iconsJson[key].length > 0) {
            iconsJson[key].forEach(async (icon: IconInterface) => {
                // const content = buildCode(icon)
                if (fs.existsSync(path.resolve(__dirname, "../package/lgh-vue-icon/package/components"))) {
                    // 创建文件
                    const content = buildCode(icon)
                    fs.writeFileSync(path.resolve(__dirname, "../package/lgh-vue-icon/package/components/",  icon.name + '.vue',), content, 'utf8')
                } else {
                    // 创建文件夹
                    fs.mkdirSync(path.resolve(__dirname, "../package/lgh-vue-icon/package/components"))
                }
            })
        }
    }
}

