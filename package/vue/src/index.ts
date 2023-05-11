import * as all from './components'
import CustomIcon from './custom-icon.vue'
import type { App } from 'vue'
export function Install(app: App, { prefix = '' }): void {
    Object.values(all).forEach(component => {
        app.component(prefix + component.name, component)
    })
    app.component(prefix+"CustomIcon",CustomIcon)
}
export *  from './components'

