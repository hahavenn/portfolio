<template>
	<div class="greeting_container">
		<span>Привет, я Влад!</span>
		<RouterLink :to="ABOUT_ROUTE_PATHS._">Давайте знакомиться ></RouterLink>
	</div>
</template>

<script setup>
/* 
	greeting component
*/
import { ABOUT_ROUTE_PATHS } from "@/router/about_route";
</script>

<style scoped lang="scss">
.greeting_container {
	@include flex(column);
	@include fullSize;
	font-size: $font-size_giant;
	color: $font-color_black;
}
</style>
