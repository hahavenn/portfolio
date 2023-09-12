<template>
	<div class="icon_wrapper">
		<slot></slot>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.icon_wrapper {
	height: $height-default;
	width: $height-default;
	@include border-rounded($color-default, calc($height-default / 2));
	@include flex;
	cursor: pointer;

	&:hover {
		@include border-hover;
	}
}
</style>
