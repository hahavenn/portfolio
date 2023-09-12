<template>
	<div
		class="switcher"
		@click="toggler"
	>
		<SunIcon />
		<MoonIcon />
		<div
			class="current"
			ref="currentRef"
		></div>
	</div>
</template>

<script setup>
import SunIcon from "@/components/Icons/SunIcon.vue";
import MoonIcon from "@/components/Icons/MoonIcon.vue";
import { ref } from "vue";

import useStylesStore from "@/stores/Styles/stylesStore";

const stylesStore = useStylesStore();

const currentRef = ref();

// onclick change state of theme
function toggler() {
	currentRef.value.style.transform = stylesStore.isLightTheme ? "translateX(54px)" : "translateX(0px)";
	stylesStore.changeThemeState();
}
</script>

<style lang="scss" scoped>
.switcher {
	@include border-rounded($color-default, calc($height-default / 2));
	width: auto;
	height: $height-default;
	padding: 6px;
	gap: 30px;
	position: relative;
	cursor: pointer;
	@include flex(row, space-between);

	&:hover {
		@include border-hover($color-active-default);
	}

	.current {
		@include border-rounded($color-active-default);
		position: absolute;
		width: 30px;
		height: 30px;
		top: 3px;
		left: 3px;
		transition: all 0.15s;
	}
}
</style>
@/stores/Styles/stylesStore
