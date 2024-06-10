import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import { peerDependencies } from "./package.json"
import dts from "vite-plugin-dts"
import preserveDirectives from "rollup-preserve-directives"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		preserveDirectives(),
		dts(),
	],
	build: {
		lib: {
			entry: {
				index: "./src/index.ts",
				"no-icons": "./src/no-icons.ts",
			},
			formats: ["es", "cjs"],
		},
		rollupOptions: {
			external: [
				...Object.keys(peerDependencies), 
				"react/jsx-runtime"
			],
		},
		sourcemap: true,
		emptyOutDir: true,
		minify: true,
		cssMinify: "lightningcss",
		target: "esnext",
	},
})
