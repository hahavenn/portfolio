import { defineStore } from "pinia";
import { ref } from "vue";

// contains global styles state
const useStylesStore = defineStore("stylesStore", () => {
	// theme Light|Dark
	const isLightTheme = ref(true);

	// change theme state
	function changeThemeState() {
		isLightTheme.value = isLightTheme.value ? false : true;
	}

	return {
		isLightTheme,
		changeThemeState,
	};
});

export default useStylesStore;
