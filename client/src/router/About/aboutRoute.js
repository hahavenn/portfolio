import { AboutRoute_Alias, AboutRoute_Names, AboutRoute_Paths } from "./aboutConstants";

// about route
export default [
	{
		path: AboutRoute_Paths._,
		component: async () => await import("@/components/About/AboutComp.vue"),
		alias: [...AboutRoute_Alias],
		name: AboutRoute_Names.ABOUT,
	},
];
