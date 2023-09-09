import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";

export default defineConfig({
	server: {
		port: 4000,
		host: "localhost",
	},
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
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
