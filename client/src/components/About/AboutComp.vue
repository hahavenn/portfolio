<template>
	<div class="about_container">
		<DocsFunc :docs="[textAbout]" />
	</div>
</template>

<script setup>
/* 
	about component 
*/

import DocsFunc from "@/components/Func/Docs/DocsFunc.vue";

import textAbout from "@/texts/aboutText";
</script>

<style scoped lang="scss">
.about_container {
	width: 100%;
}
</style>
