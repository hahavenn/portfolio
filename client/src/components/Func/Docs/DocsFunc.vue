<template>
	<PageFunc>
		<template #leftPanel>
			<NavPage
				:action="setCurrentDoc"
				:list="docs_list"
				:activeItem="currDoc.index"
			/>
		</template>
		<template #content>
			<DocumentDocs :doc="currDoc.doc" />
		</template>
		<template #rightPanel>
			<MetaPage :meta="[link_meta]" />
		</template>
	</PageFunc>
</template>

<script setup>
/*
	props:
		docs - array of documents, which should be shown

	NavPage:
		list - list of docs' titles,
		action - action, that will be executed on click of doc's title
		activeItem - current active doc (own index)

	DocumentDocs:
		doc - the document, you want to display

	MetaPage:
		meta - page's meta, functions, table of contents
*/

import { computed, ref } from "vue";

import DocumentDocs from "./DocumentDocs.vue";
import PageFunc from "@/components/Func/Page/PageFunc.vue";
import NavPage from "@/components/Func/Page/NavPage.vue";
import MetaPage from "@/components/Func/Page/MetaPage.vue";

import { PHRASE_PAGE } from "@/constants/phrases";
import { TYPE_INSTANCES } from "@/constants/types";
import { REG_NOT_LETTER_NUMBER } from "@/constants/regulars";

import { strToLowerNoSpace } from "@/helpers/textHelper";
import { scrollToTop } from "@/helpers/appHelper";

import useRouterHook from "@/hooks/useRouterHook";

/* define common instances */
const props = defineProps({
	docs: {
		type: Array,
		required: true,
	},
});

const { routerPush, routeHash, clearHash } = useRouterHook();

// current active doc to display
const currDoc = ref({
	doc: props.docs[0],
	index: 0,
});

// list of docs' titles
const docs_list = computed(() => {
	let list = [];
	for (let doc of props.docs) {
		list.push(doc.title);
	}
	return list;
});

// setting current doc
function setCurrentDoc(index) {
	currDoc.value = {
		doc: props.docs[index],
		index: index,
	};
	resetCurrParagraph();
}

// define current paragraph with init value
const currParagraph = ref(routeHash.value ? routeHash.value : null);

// reseting current paragraph
function resetCurrParagraph() {
	clearHash();
	scrollToTop();

	currParagraph.value = null;
	link_meta.value.activeChild = currParagraph.value;
}

// set current paragraph
function setCurrParagraph(paragraph) {
	currParagraph.value = "#" + strToLowerNoSpace(paragraph, REG_NOT_LETTER_NUMBER);
	link_meta.value.activeChild = currParagraph.value;

	routerPush(currParagraph.value);
}

// define list of paragraps on the page
const pageParagraphs = computed(() => {
	let paragraphs = [];

	for (let paragraph of currDoc.value.doc.content) {
		paragraphs.push(paragraph.subtitle);
	}

	return paragraphs;
});

// define meta instance with doc's paragraphs
const link_meta = ref({
	type: TYPE_INSTANCES.LINK,
	title: PHRASE_PAGE.ON_THIS_PAGE,
	titleAction: resetCurrParagraph,
	children: pageParagraphs.value,
	childAction: setCurrParagraph,
	activeChild: currParagraph.value,
});
</script>

<style scoped lang="scss"></style>
