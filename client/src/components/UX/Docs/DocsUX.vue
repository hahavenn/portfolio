<template>
	<PageReadUX>
		<template #leftPanel>
			<NavPanelUX
				:action="setCurrentDoc"
				:list="docs_list"
				:activeItem="activeDoc.index"
			/>
		</template>
		<template #content>
			<DocumentDocs :doc="activeDoc.doc" />
		</template>
		<template #rightPanel>
			<PageMetaUX :meta="[link_meta]" />
		</template>
	</PageReadUX>
</template>

<script setup>
/*
	props:
		docs - array of documents, which should be shown

	NavPanelUX:
		list - list of docs' titles,
		action - action, that will be executed on click of doc's title
		activeItem - current active doc (own index)

	DocumentDocs:
		doc - the document, you want to display

	PageMetaUX:
*/

import { computed, ref } from "vue";

import DocumentDocs from "./DocumentDocs.vue";
import PageReadUX from "@/components/UX/PageReadUX.vue";
import NavPanelUX from "@/components/UX/NavPanelUX.vue";
import PageMetaUX from "@/components/UX/PageMetaUX.vue";

import { PHRASE_PAGE } from "@/constants/phrases";
import { TYPE_INSTANCES } from "@/constants/types";
import { REG_not_letter_number } from "@/constants/regulars";

import { strLowerRegexNoSpace } from "@/helpers/textHelper";
import { scrollToTop } from "@/helpers/appHelper";

import useRouterHook from "@/hooks/useRouterHook";

/* define common instances */
const props = defineProps({
	docs: {
		type: Array,
		required: true,
	},
});

const { routerPush, routeHash, routePath } = useRouterHook();

// current active doc to display
const activeDoc = ref({
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
	activeDoc.value = {
		doc: props.docs[index],
		index: index,
	};
	resetCurrParagraph();
}

// define current paragraph with init value
const currParagraph = ref(routeHash.value ? routeHash.value : null);

// reseting current paragraph
function resetCurrParagraph() {
	if (routeHash.value) routerPush(routePath.value);
	scrollToTop();
	currParagraph.value = null;
	link_meta.value.activeChild = currParagraph.value;
}

// setting current paragraph
function setCurrParagraph(paragraph) {
	currParagraph.value = "#" + strLowerRegexNoSpace(paragraph, REG_not_letter_number);
	link_meta.value.activeChild = currParagraph.value;
}

// define list of paragraps on the page
const pageParagraphs = computed(() => {
	let paragraphs = [];

	for (let paragraph of activeDoc.value.doc.content) {
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
