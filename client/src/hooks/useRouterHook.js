import { ERROR_type } from "@/constants/errors";
import { isStringType } from "@/helpers/typeHelper";
import router from "@/router";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default () => {
	// route instance
	const route = useRoute();

	// route parameters
	const routeFullPath = computed(() => route.fullPath);
	const routeHash = computed(() => route.hash);
	const routeMatched = computed(() => route.matched);
	const routeMeta = computed(() => route.meta);
	const routeName = computed(() => route.name);
	const routeParams = computed(() => route.params);
	const routePath = computed(() => route.path);
	const routeQuery = computed(() => route.query);
	const routeRedirectedFrom = computed(() => route.redirectedFrom);

	// router.push
	function routerPush(location) {
		try {
			if (!isStringType(location)) {
				throw ERROR_type.UNDEFINED;
			}
			router.push(location);
		} catch (error) {
			console.error("location is", error);
		}
	}

	// clear hash
	function clearHash() {
		route.hash = "";
	}

	return {
		routeFullPath,
		routeHash,
		routeMatched,
		routeMeta,
		routeName,
		routeParams,
		routePath,
		routeQuery,
		routeRedirectedFrom,
		routerPush,
		clearHash,
	};
};
