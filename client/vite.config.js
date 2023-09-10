import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import * as path from "path";

export default defineConfig({
	server: {
		port: 4000,
		host: "localhost",
	},
	resolve: {
		alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
	},
	plugins: [vue()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "./src/assets/index.scss";',
			},
		},
	},
});
