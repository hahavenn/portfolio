<template>
	<div class="layout">
		<Header />
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script setup>
import Header from "@/layouts/Header/Header.vue";
</script>

<style lang="scss" scoped>
.layout {
	@include layoutSize;
	position: absolute;
	top: 0;
	left: 0;
	@include flex(column, center, center);

	.content {
		@include fullSize;
	}
}
</style>
