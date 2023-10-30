<template>
	<div class="main_nav">
		<template v-for="(item, item_index) in list">
			<span
				@click="action(item_index)"
				:class="{ active: item_index === activeItem }"
				>{{ item }}</span
			>
		</template>
	</div>
</template>

<script setup>
/* 
    props:
        list - the list of docs' titles
        action - triggers on every click with item's index
        activeItem - the index of an active item in list
*/

/* define common instances */
const props = defineProps({
	list: {
		type: Array,
		required: true,
	},
	action: {
		type: Function,
		default: () => {},
	},
	activeItem: {
		type: Number,
		default: null,
	},
});
</script>

<style scoped lang="scss">
.main_nav {
	font-size: $font-size_small;
	@include flex(column, flex-start, flex-start);
	gap: 5px;
	width: 100%;
	overflow-x: hidden;
	overflow-y: auto;
	padding-right: 22px;

	span {
		padding: 3px 0;
		color: $color_gray;
		@include link-hover($color_black);
	}

	.active {
		color: $color_black;
	}
}
</style>
