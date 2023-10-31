import about_route from "./about_route.js";

// route names
const INDEX_ROUTE_NAMES = {
	INDEX: "index",
};

// route paths
const INDEX_ROUTE_PATHS = {
	_: "/",
};

// route alias
const INDEX_ROUTE_ALIAS = ["/home", "/index", "/main"];

export { INDEX_ROUTE_NAMES, INDEX_ROUTE_ALIAS, INDEX_ROUTE_PATHS };

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
	about_route,
];

export default routes;
