<template>
	<PageReadUX>
		<template #leftPanel>
			<div class="main_nav">
				<template v-for="doc in docs_list">
					<span
						@click="setCurrentDoc(doc)"
						:class="{ active: activeDoc.title == doc.title }"
						>{{ doc.title }}</span
					>
				</template>
			</div>
		</template>
		<template #content>
			<DocumentDocs :doc="activeDoc" />
		</template>
		<template #rightPanel>
			<div class="page_meta">
				<a
					class="meta"
					@click="changeCurrParagraph()"
					>На этой странице:</a
				>
				<template v-for="c in activeDoc.content">
					<a
						:href="createParagraph(c.subtitle)"
						@click="changeCurrParagraph(c.subtitle)"
						:class="{
							active: currParagraph == createParagraph(c.subtitle),
						}"
					>
						<span>></span>
						{{ c.subtitle }}
					</a>
				</template>
			</div>
		</template>
	</PageReadUX>
</template>

<script setup>
import { onMounted, ref } from "vue";

import DocumentDocs from "./DocumentDocs.vue";
import PageReadUX from "@/components/UX/PageReadUX.vue";

import { REG_not_letter_number } from "@/constants/regulars";

import { strLowerRegexNoSpace } from "@/helpers/textHelper";
import { scrollToTop } from "@/helpers/appHelper";

import useRouterHook from "@/hooks/useRouterHook";

const { routerPush, routeHash, routePath } = useRouterHook();

const props = defineProps({
	docs_list: {
		type: Array,
		required: true,
	},
});

const activeDoc = ref(props.docs_list[0]);

function setCurrentDoc(doc) {
	activeDoc.value = doc;
	scrollToTop();
	currParagraph.value = null;
}

const currParagraph = ref();

function createParagraph(subtitle) {
	return "#" + strLowerRegexNoSpace(subtitle, REG_not_letter_number);
}

function changeCurrParagraph(newParagraph) {
	if (newParagraph) {
		currParagraph.value = "#" + strLowerRegexNoSpace(newParagraph, REG_not_letter_number);
	} else {
		if (routeHash.value) routerPush(routePath.value);
		scrollToTop();
		currParagraph.value = null;
	}
}

onMounted(() => {
	if (routeHash.value) currParagraph.value = routeHash.value;
});

/*
    #main_nav - list of articles
    #content - main content
    #page_meta - page's logic switchers | article's navigation
*/
</script>

<style scoped lang="scss">
$padding_space: 22px;
.main_nav,
.page_meta {
	font-size: $font-size_small;
	@include flex(column, flex-start, flex-start);
	gap: 5px;
	width: 100%;

	span,
	a {
		padding: 3px 0;
		color: $color_gray;
		@include link-hover($color_black);
	}

	.active {
		color: $color_black;
	}
}

.main_nav {
	overflow-x: hidden;
	overflow-y: auto;
	padding-right: $padding_space;
}

.page_meta {
	padding-left: $padding_space;

	a {
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
			@include pos-abs-l-t($left: -10px);
		}
	}
}
</style>
