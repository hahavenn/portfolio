<template>
	<div class="search">
		<input
			type="text"
			placeholder="поиск"
		/>
		<SearchIcon class="css-icon" />
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

	.css-icon {
		position: absolute;
		right: 7px;
		top: 7px;
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
