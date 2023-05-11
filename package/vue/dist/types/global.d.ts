import * as icons from './components';
import type { App } from 'vue';
export interface InstallOptions {
    /** @default `LghIcon` */
    prefix?: string;
}
declare const _default: (app: App, { prefix }?: InstallOptions) => void;
export default _default;
export declare function Install(app: App, { prefix }: {
    prefix?: string | undefined;
}): void;
export { icons };
export * from './components';
