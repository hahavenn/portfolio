<template>
	<div class="icon_wrapper">
		<slot></slot>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.icon_wrapper {
	height: $height_default;
	width: $height_default;
	@include border-rounded($color_default, calc($height_default / 2));
	@include flex;
	cursor: pointer;

	&:hover {
		@include border-hover;
	}
}
</style>
