<template>
	<div class="header_panel">
		<slot></slot>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header_panel {
	@include flex(row, space-between);
	gap: 10px;
	height: 100%;
}
</style>
