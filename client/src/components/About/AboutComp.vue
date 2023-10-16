<template>
	<div class="about_container">
		<DocsUX :docs_list="[textAbout]"> </DocsUX>
	</div>
</template>

<script setup>
import DocsUX from "@/components/UX/Docs/DocsUX.vue";

import textAbout from "@/texts/aboutText";
</script>

<style scoped lang="scss">
.about_container {
	width: 100%;
}
</style>
