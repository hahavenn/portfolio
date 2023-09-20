import typeError from "@/constants/errors/typeError";
import { isString } from "@/helpers/typeHelper";
import router from "@/router";
import { computed } from "vue";

export default () => {
	// router instance
	const routerFullPath = computed(() => router.currentRoute.value.fullPath);
	const routerHash = computed(() => router.currentRoute.value.hash);
	const routerMatched = computed(() => router.currentRoute.value.matched);
	const routerMeta = computed(() => router.currentRoute.value.meta);
	const routerName = computed(() => router.currentRoute.value.name);
	const routerParams = computed(() => router.currentRoute.value.params);
	const routerPath = computed(() => router.currentRoute.value.path);
	const routerQuery = computed(() => router.currentRoute.value.query);
	const routerRedirectedFrom = computed(() => router.currentRoute.value.redirectedFrom);

	// router.push
	function routerPush(location) {
		if (!isString(location)) {
			console.error("location is", typeError.NOT_STRING);
		} else {
			router.push(location);
		}
	}

	return {
		routerFullPath,
		routerHash,
		routerMatched,
		routerMeta,
		routerName,
		routerParams,
		routerPath,
		routerQuery,
		routerRedirectedFrom,
		routerPush,
	};
};
