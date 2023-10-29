import { INDEX_ROUTE_NAMES, INDEX_ROUTE_ALIAS, INDEX_ROUTE_PATHS } from "./indexConstants.js";
import aboutRoute from "./About/aboutRoute.js";

// all routes in one variable
const routes = [
	// default route
	{
		path: INDEX_ROUTE_PATHS._,
		component: async () => await import("@/components/Greetings/GreetingsComp.vue"),
		name: INDEX_ROUTE_NAMES.INDEX,
		alias: [...INDEX_ROUTE_ALIAS],
	},
	// other routes
	...aboutRoute,
];

export default routes;
