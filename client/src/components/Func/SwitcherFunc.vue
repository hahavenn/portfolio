<template>
	<div
		class="switcher"
		@click="changeState(toggler)"
	>
		<slot name="left"></slot>
		<slot name="right"></slot>
		<div
			class="current"
			:style="switcherState"
		></div>
	</div>
</template>

<script setup>
/*
	props:
		active -> if true - right is current
		toggler -> triggers on every click
*/

import { reactive, ref } from "vue";

/* define common instances */

const props = defineProps({
	active: {
		type: Boolean,
		default: false,
	},
	toggler: {
		type: Function,
		required: true,
	},
});

// state-styles of switcher
const switcherState = reactive({
	left: props.active ? "" : "3px",
	right: props.active ? "3px" : "",
	transform: "",
});

// is state change? used to translate circle
const isChanged = ref(false);

// onclick change state of switcher
function changeState(toggler) {
	isChanged.value = !isChanged.value;

	switcherState.transform = isChanged.value
		? "translateX(" + (props.active ? "-" : "") + "54px)"
		: "translateX(0px)";

	toggler();
}
</script>

<style lang="scss" scoped>
.switcher {
	@include border-rounded($color_default, calc($height_default / 2));
	width: auto;
	height: $height_default;
	padding: 6px;
	position: relative;
	cursor: pointer;
	@include flex(row, space-between, center);
	gap: 30px;

	&:hover {
		@include border-hover($color_active_default);
	}

	.current {
		@include border-rounded($color_active_default);
		position: absolute;
		width: 30px;
		height: 30px;
		top: 3px;
		// left: 3px;
		// right: 3px;
		transition: all 0.15s;
	}
}
</style>
