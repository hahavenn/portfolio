import { IndexRoute_Names, IndexRoute_Alias, IndexRoute_Paths } from "./indexConstants.js";
import aboutRoute from "./About/aboutRoute.js";

// all routes in one variable
const routes = [
	// default route
	{
		path: IndexRoute_Paths._,
		component: async () => await import("@/components/Greetings/GreetingsComp.vue"),
		name: IndexRoute_Names.INDEX,
		alias: [...IndexRoute_Alias],
	},
	// other routes
	...aboutRoute,
];

export default routes;
