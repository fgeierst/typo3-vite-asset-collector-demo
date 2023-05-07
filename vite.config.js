import { defineConfig } from 'vite';

export default defineConfig({
    publicDir: false,
    build: {
        manifest: true,
        rollupOptions: {
            input: 'packages/typo3_vite_demo/Resources/Private/JavaScript/Main.js'
        },
        outDir: 'packages/typo3_vite_demo/Resources/Public/Vite/',
    },
    css: {
        devSourcemap: true,
    }
})