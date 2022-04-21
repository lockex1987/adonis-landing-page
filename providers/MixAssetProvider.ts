/*
 * https://github.com/wahyubucil/adonis-mix-asset/blob/master/providers/MixAssetProvider.ts
 */

import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import { existsSync, readFileSync } from 'fs'

export default class MixAssetProvider {
    constructor(protected app: ApplicationContract) {}

    public boot() {
        const View = this.app.container.resolveBinding('Adonis/Core/View')
        const manifestPath = this.app.publicPath('mix-manifest.json')
        if (existsSync(manifestPath)) {
            View.global('mix', (path: string) => this.mixAsset(this.app, this.getManifestContents(manifestPath), path))
        }
    }

    /**
     * Returns the manifest file contents.
     * During development, we make use of the `readFileSync` method to read the fresh contents on every call.
     * @param {string} manifestPath Đường dẫn file mix-manifest.json
     * @return {Record<string, string>} Map các file
     */
    private getManifestContents(manifestPath: string): Record<string, string> {
        if (this.app.inProduction) {
            return require(manifestPath)
        }

        return JSON.parse(readFileSync(manifestPath, 'utf-8'))
    }

    // Reference: https://github.com/laravel/framework/blob/990e0e7/src/Illuminate/Foundation/Mix.php
    private mixAsset(
        application: ApplicationContract,
        manifest: Record<string, string>,
        path: string,
    ) {
        if (!path) {
            return
        }

        if (!path.startsWith('/')) {
            path = '/' + path
        }

        if (!application.inProduction && existsSync(application.publicPath('hot'))) {
            const url = readFileSync(application.publicPath('hot'), 'utf-8').trim()

            if (url.startsWith('http://') || url.startsWith('https://')) {
                return url.substring(url.indexOf(':') + 1) + path
            }

            return '//localhost:8080' + path
        }

        if (!manifest[path]) {
            throw new Error(`Unable to locate Mix file: ${path}.`)
        }

        return manifest[path]
    }
}
