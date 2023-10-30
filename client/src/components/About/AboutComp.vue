<template>
	<div class="about_container">
		<DocsUX :docs="[textAbout]" />
	</div>
</template>

<script setup>
/* 
	about component 
*/

import DocsUX from "@/components/UX/Docs/DocsUX.vue";

import textAbout from "@/texts/aboutText";
</script>

<style scoped lang="scss">
.about_container {
	width: 100%;
}
</style>
