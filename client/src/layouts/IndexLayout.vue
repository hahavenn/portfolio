<template>
	<div class="layout">
		<Header />
	</div>
</template>

<script setup>
import Header from "./Header/Header.vue";
</script>

<style lang="scss" scoped>
.layout {
	@include layoutSize;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
