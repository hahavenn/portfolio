<template>
	<div
		class="section_info"
		:class="{ active: isActive }"
	>
		<span>
			<slot></slot>
		</span>
	</div>
</template>

<script setup>
/* 
	props: 
		isActive -> is current tab active
*/

const props = defineProps({
	isActive: {
		type: Boolean,
		default: false,
	},
});
</script>

<style lang="scss" scoped>
.section_info {
	font-size: $font-size_default;
	height: 100%;
	@include flex;
	padding: 10px;
	cursor: pointer;

	&:hover {
		background-color: $color_hover_default;
		@include transition-basic;
	}
}

.active {
	text-decoration: 2px solid underline;
	background-color: $color_hover_default;
}
</style>
