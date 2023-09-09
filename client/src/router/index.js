import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

// creating router instance
const router = createRouter({
	// all routes
	routes,
	// enabling history
	history: createWebHistory(),
});

export default router;
