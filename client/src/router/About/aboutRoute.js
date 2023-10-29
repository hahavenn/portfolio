import { ABOUT_ROUTE_ALIAS, ABOUT_ROUTE_NAMES, ABOUT_ROUTE_PATHS } from "./aboutConstants";

// about route
export default [
	{
		path: ABOUT_ROUTE_PATHS._,
		component: async () => await import("@/components/About/AboutComp.vue"),
		alias: [...ABOUT_ROUTE_ALIAS],
		name: ABOUT_ROUTE_NAMES.ABOUT,
	},
];
