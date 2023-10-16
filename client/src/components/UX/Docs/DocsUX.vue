<template>
	<PageReadUX>
		<template #leftPanel>
			<NavPanel
				:action="setCurrentDoc"
				:list="docs_list"
				:activeItem="activeDoc.index"
			/>
		</template>
		<template #content>
			<DocumentDocs :doc="activeDoc.doc" />
		</template>
		<template #rightPanel>
			<div class="page_meta">
				<a
					class="meta"
					@click="changeCurrParagraph()"
					>На этой странице:</a
				>
				<template v-for="c in activeDoc.doc.content">
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
import { computed, onMounted, ref } from "vue";

import DocumentDocs from "./DocumentDocs.vue";
import PageReadUX from "@/components/UX/PageReadUX.vue";
import NavPanel from "@/components/UX/NavPanel.vue";

import { REG_not_letter_number } from "@/constants/regulars";

import { strLowerRegexNoSpace } from "@/helpers/textHelper";
import { scrollToTop } from "@/helpers/appHelper";

import useRouterHook from "@/hooks/useRouterHook";

const { routerPush, routeHash, routePath } = useRouterHook();

const props = defineProps({
	docs: {
		type: Array,
		required: true,
	},
});

const activeDoc = ref({
	doc: props.docs[0],
	index: 0,
});

const docs_list = computed(() => {
	let list = [];
	for (let doc of props.docs) {
		list.push(doc.title);
	}
	return list;
});

function setCurrentDoc(i) {
	activeDoc.value.doc = props.docs[i];
	activeDoc.value.index = i;
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
	console.log(docs_list.value);
});

/*
    #main_nav - list of articles
    #content - main content
    #page_meta - page's logic switchers | article's navigation
*/
</script>

<style scoped lang="scss">
$padding_space: 22px;
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
