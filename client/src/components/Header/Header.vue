<template>
	<div class="header">
		<Logo />
		<Search />
	</div>
</template>

<script setup>
import Search from "@/components/Functionals/Search.vue";
import Logo from "@/components/UI/Logo.vue";
</script>

<style lang="scss" scoped>
.header {
	width: 100%;
	height: 60px;
	display: flex;
	flex-direction: row;
	align-items: center;
}
</style>
