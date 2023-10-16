<template>
	<div class="loader_wrapper">
		<div class="loader"></div>
	</div>
</template>

<script setup></script>

<style scoped lang="scss">
$loader-width: 6px;
$loader-size: 50px;
.loader_wrapper {
	@include fullSize;
	@include flex;
	.loader {
		border: $loader-width solid $color_default;
		border-top: $loader-width solid $color_active_default;
		border-radius: 50%;
		width: $loader-size;
		height: $loader-size;
		animation: spin 1s linear infinite;
		z-index: 9999;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
}
</style>
