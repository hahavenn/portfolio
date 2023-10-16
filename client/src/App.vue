<template>
	<IndexLayout>
		<RouterView />
	</IndexLayout>
</template>

<script setup>
import IndexLayout from "@/layouts/IndexLayout.vue";
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: $font-family_play;
}

html {
	scroll-behavior: smooth;
}

body {
	margin: 0;
	width: 100%;
	height: 100%;
	overflow-y: scroll;
}
</style>
