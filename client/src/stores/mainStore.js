import { defineStore } from "pinia";
import { ref } from "vue";

// global state
const useMainStore = defineStore("mainStore", () => {
	// loading state
	const loadingState = ref(false);

	return {
		loadingState,
	};
});

export default useMainStore;
