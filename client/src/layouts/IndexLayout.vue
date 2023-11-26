<template>
	<div class="layout">
		<HeaderLayout />
		<div class="page">
			<LoaderFunc v-if="loadingState" />
			<slot></slot>
		</div>
		<FooterLayout />
	</div>
</template>

<script setup>
import HeaderLayout from "@/layouts/Header/HeaderLayout.vue";
import FooterLayout from "@/layouts/Footer/FooterLayout.vue";

import LoaderFunc from "@/components/Func/LoaderFunc.vue";

import useMainStore from "@/stores/mainStore";

const mainStore = useMainStore();
const loadingState = mainStore.loadingState;
</script>

<style lang="scss" scoped>
.layout {
	@include flex(column, space-between);
	gap: 40px;
	min-height: 100vh;

	.page {
		margin-top: $content_top_desktop;
		width: $width_desktop;
		height: fit-content;
		flex-grow: 1;
		@include flex($direction: column, $justify-content: flex-start);
	}
}
</style>
