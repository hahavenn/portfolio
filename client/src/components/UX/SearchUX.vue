<template>
	<div class="search">
		<input
			type="text"
			placeholder="поиск"
		/>

		<div class="css-icon">
			<SearchIcon />
		</div>
	</div>
</template>

<script setup>
/* 
	search component, not full ready
*/

import SearchIcon from "@/components/Icons/SearchIcon.vue";
</script>

<style scoped lang="scss">
.search {
	position: relative;
	cursor: pointer !important;

	.css-icon {
		@include pos-abs-r-t;
		@include flex;
		@include square(40px);
	}

	input {
		@include border-default($color: $color_default);
		font-size: $font-size_small;
		padding: 0 10px;
		height: 40px;
		padding-right: 36px;
		width: 200px;

		&:hover {
			@include border-hover;
		}

		&:focus {
			@include input-focused;
		}
	}
}
</style>
