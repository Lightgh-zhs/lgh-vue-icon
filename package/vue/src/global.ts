import * as icons from './components'

import type { App } from 'vue'

export interface InstallOptions {
  /** @default `LghIcon` */
  prefix?: string
}
export default (app: App, { prefix = 'LghIcon' }: InstallOptions = {}) => {
  for (const [key, component] of Object.entries(icons)) {
    app.component(prefix + key, component)
  }
}

export function Install(app: App, { prefix = 'LghIcon' }): void {
  Object.values(icons).forEach(component => {
    app.component(prefix + component.__name, component)
  })
}

export { icons }
export * from './components'
