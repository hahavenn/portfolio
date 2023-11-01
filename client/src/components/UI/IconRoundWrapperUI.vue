<template>
	<div
		class="icon_wrapper"
		:class="{ hoverClass: isHover }"
		:style="componentStyle"
	>
		<slot></slot>
	</div>
</template>

<script setup>
import { reactive } from "vue";

/*
	wrapper for icons
	props:
		isHover -> enable hover or not
		size -> size of icon
*/

/* define common instances */
const props = defineProps({
	isHover: {
		type: Boolean,
		default: false,
	},
	size: {
		type: String,
		default: "40px",
	},
	cursorPointer: {
		type: Boolean,
		default: false,
	},
});

const componentStyle = reactive({
	width: props.size,
	height: props.size,
	cursor: props.cursorPointer ? "pointer !important" : "default !important",
});
</script>

<style lang="scss" scoped>
.icon_wrapper {
	/* height: $height_default;
	width: $height_default; */
	@include border-rounded($color_default, calc($height_default / 2));
	@include flex;
	/* cursor: pointer; */

	/* &:hover {
		@include border-hover;
	} */
}

.hoverClass {
	&:hover {
		@include border-hover;
	}
}
</style>
