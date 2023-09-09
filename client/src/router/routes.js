import { IndexRoute_Names, IndexRoute_Alias, IndexRoute_Paths } from "./index.constants.js";

// all routes in one variable
const routes = [
	// default route
	{
		path: IndexRoute_Paths._,
		component: () => import("@/layouts/IndexLayout.vue"),
		name: IndexRoute_Names.Index,
		alias: [...IndexRoute_Alias],
	},
];

export default routes;
