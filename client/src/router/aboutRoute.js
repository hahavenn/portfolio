// route names
const ABOUT_ROUTE_NAMES = {
	ABOUT: "about",
};

// route paths
const ABOUT_ROUTE_PATHS = {
	_: "/about",
};

// route alias
const ABOUT_ROUTE_ALIAS = ["/info"];

export { ABOUT_ROUTE_NAMES, ABOUT_ROUTE_PATHS, ABOUT_ROUTE_ALIAS };

// about route
const aboutRoute = {
	path: ABOUT_ROUTE_PATHS._,
	component: async () => await import("@/components/About/AboutComp.vue"),
	alias: [...ABOUT_ROUTE_ALIAS],
	name: ABOUT_ROUTE_NAMES.ABOUT,
};

export default aboutRoute;
