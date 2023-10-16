<template>
	<div class="page_meta">
		<template v-for="field in meta">
			<template v-if="field.type === TYPE_INSTANCES.LINK">
				<a
					class="meta"
					@click="field.titleAction()"
				>
					{{ field.title }}
				</a>
				<template v-for="link in field.children">
					<a
						:href="createParagraph(link)"
						@click="field.childAction(link)"
						:class="{
							active: field.activeChild == createParagraph(link),
						}"
					>
						<span>></span>
						{{ link }}
					</a>
				</template>
			</template>
		</template>
	</div>
</template>

<script setup>
/* 
    props:
        meta - page meta

    props.meta[index] || field = {
        type -> type of meta
        title -> title of field
        titleAction -> action, that will be executed on click title
        children -> field's children
        childAction -> action, that will be executed on click children
        activeChild -> current active child
    }
*/

import { REG_not_letter_number } from "@/constants/regulars";
import { TYPE_INSTANCES } from "@/constants/types";

import { strLowerRegexNoSpace } from "@/helpers/textHelper";

/* define common instances */
const props = defineProps({
	meta: {
		type: Array,
		required: true,
	},
});

/* field.type === TYPE_INSTANCES.LINK */

// make link to title
function createParagraph(title) {
	return "#" + strLowerRegexNoSpace(title, REG_not_letter_number);
}
</script>

<style scoped lang="scss">
.page_meta {
	padding-left: 22px;
	font-size: $font-size_small;
	@include flex(column, flex-start, flex-start);
	gap: 5px;
	width: 100%;

	a {
		padding: 3px 0;
		color: $color_gray;
		@include link-hover($color_black);

		text-decoration: none;
		span {
			display: none;
		}
	}

	.meta {
		color: $font-color_black;
		text-decoration: 1px solid $font-color_black underline;
	}

	.active {
		color: $font-color_black;
		position: relative;

		span {
			display: block;
			color: inherit;
			@include pos-abs-l-t($left: -10px, $top: 3px);
		}
	}
}
</style>
