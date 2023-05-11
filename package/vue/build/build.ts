import path from 'node:path'
import consola from 'consola'
import chalk from 'chalk'
import { build } from 'esbuild'
import GlobalsPlugin from 'esbuild-plugin-globals'
import vue from 'unplugin-vue/esbuild'
import { emptyDir } from 'fs-extra'
import { version } from '../package.json'
import type { BuildOptions, Format } from 'esbuild'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const dir = dirname(fileURLToPath(import.meta.url))

export const pathRoot = resolve(dir, '..')
export const pathSrc = resolve(pathRoot, 'src')
export const pathComponents = resolve(pathSrc, 'components')
export const pathOutput = resolve(pathRoot, 'dist')

const buildBundle = () => {
  const getBuildOptions = (format: Format) => {
    const options: BuildOptions = {
      entryPoints: [
        path.resolve(pathSrc, 'index.ts'),
        path.resolve(pathSrc, 'global.ts'),
      ],
      target: 'es2018',
      platform: 'neutral',
      plugins:[
        vue({
          isProduction: true,
          sourceMap: false,
        }),
      ],
      bundle: true,
      format,
      minifySyntax: true,
      banner: {
        js: `/*! Vue Icons Vue v${version} */\n`,
      },
      outdir: path.resolve(pathOutput,"../dist")
    }
    if (format === 'iife') {
      options.plugins!.push(
        GlobalsPlugin({
          vue: 'Vue',
        })
      )
      options.globalName = 'LghVue'
    } else {
      options.external = ['vue']
    }
    return options
  }
  const doBuild = async (minify: boolean) => {
    await Promise.all([
      build({
        ...getBuildOptions('esm'),
        entryNames: `[name]${minify ? '.min' : ''}`,
        minify,
      }),
      build({
        ...getBuildOptions('iife'),
        entryNames: `[name].iife${minify ? '.min' : ''}`,
        minify,
      }),
      build({
        ...getBuildOptions('cjs'),
        entryNames: `[name]${minify ? '.min' : ''}`,
        outExtension: { '.js': '.cjs' },
        minify,
      }),
    ])
  }

  return Promise.all([doBuild(true), doBuild(false)])
}

consola.info(chalk.blue('cleaning dist...'))
await emptyDir(pathOutput)
consola.info(chalk.blue('building...'))
await buildBundle()
