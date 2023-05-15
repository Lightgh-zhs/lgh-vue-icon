import * as all from './components/index'
import CustomIcon from './custom-icon.vue'
import type { App } from 'vue'
export function Install(app: App, prefix?: string): void {
    Object.values(all).forEach(component => {
        app.component(prefix ? prefix : "" + (component.__name?.split('-').map((item, index) => {
            return item.slice(0, 1).toUpperCase() + item.slice(1);
        }).join("")), component)
    })
    app.component(prefix ? prefix : "" + "CustomIcon", CustomIcon)
}
export * from './components'

