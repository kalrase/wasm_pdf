/*
 * @Author: liukai 1587680247@qq.com
 * @Date: 2024-06-04 10:10:26
 * @LastEditors: liukai 1587680247@qq.com
 * @LastEditTime: 2024-06-04 10:25:18
 * @FilePath: \H5Audit\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import postcss from './postcss.config.js';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import svgSprite from 'rollup-plugin-stdf-icon';
import wasm from 'vite-plugin-wasm';
// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig({
	base:'./',
	server:{
		host:'0.0.0.0',
		port: 3000,
		open: true,
		cors: true,
		proxy: {
			'/data': {
			  target: 'https://fc-mp-800d1395-26ca-4262-81e1-555eba90651a.next.bspapp.com',
			  changeOrigin: true,
			  rewrite: (path) => path.replace(/^\/api/, ''),
			},
			'/admin': {
				target: 'https://fc-mp-800d1395-26ca-4262-81e1-555eba90651a.next.bspapp.com',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			  },
		  },
	},
	 
	// @ts-ignore
	plugins: [
		svelte({
			onwarn(warning, defaultHandler) {
				if (warning.code.startsWith('a11y-')) {
					return;
				}
				// handle all other warnings normally
				defaultHandler(warning);
			},
		}),
		// 一般来说，一个应用的的 svg 不多时都放在一个文件夹下，合并为一个 symbol 即可。此处演示了不同文件夹下的图标如何合并为不同的 symbol。
		// Generally speaking, when the svg of an application is not much, it is placed in a folder and merged into one symbol. This example shows how the icons in different folders are merged into different symbols.
		svgSprite([
			{ inFile: 'src/assets/Heroicons', outFile: 'public/fonts' },
			{ inFile: 'src/assets/IconPark', outFile: 'public/fonts' },
			{ inFile: 'src/assets/Remix', outFile: 'public/fonts' },
		]),
		wasm(),
	],
	build: {
		rollupOptions: {
		  output: {
			manualChunks(id) {
			  if (id.includes('node_modules/wasm-pdf')) {
				return 'vendor-wasm-pdf';
			  }
			}
		  }
		}
	  },
	// @ts-ignore
	css: { postcss },
});
