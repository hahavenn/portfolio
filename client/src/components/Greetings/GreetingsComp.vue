<template>
	<div class="greeting_container">
		<span>Привет, я Влад!</span>
		<RouterLink :to="AboutRoute_Paths._">Давайте знакомиться ></RouterLink>
	</div>
</template>

<script setup>
import { AboutRoute_Paths } from "@/router/About/aboutConstants";
</script>

<style scoped lang="scss">
.greeting_container {
	@include flex(column);
	@include fullSize;
	font-size: $font-size_giant;
	color: $font-color_black;
}
</style>
