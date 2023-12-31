import { ERROR_TYPE } from "@/constants/errors";
import { TYPE_JS } from "@/constants/types";

import { scrollToTop } from "@/helpers/appHelper";

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
	function routerPush(location, needScroll) {
		try {
			if (typeof location !== TYPE_JS.STRING) {
				throw ERROR_TYPE.NOT_STRING;
			} else {
				router.push(location);
				if (needScroll && window.scrollY) scrollToTop();
			}
		} catch (error) {
			console.error("location is", error);
		}
	}

	// clear hash
	function clearHash() {
		if (routeHash.value) routerPush(routePath.value);
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
