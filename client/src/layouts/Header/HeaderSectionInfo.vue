<template>
	<div class="section_info">
		<span>
			<slot></slot>
		</span>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.section_info {
	text-decoration: 2px solid underline;
	font-size: $font-size_medium;
	height: 100%;
	@include flex;
	padding: 10px;
	cursor: pointer;

	&:hover {
		background-color: $color-hover-default;
		@include transition-basic;
	}
}
</style>
