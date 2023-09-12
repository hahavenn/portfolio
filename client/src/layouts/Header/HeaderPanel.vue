<template>
	<div class="header_panel">
		<slot></slot>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header_panel {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 10px;
	height: 100%;
}
</style>
