<template>
	<PageUX>
		<template #leftPanel>
			<NavPage
				:action="setCurrentDoc"
				:list="docs_list"
				:activeItem="activeDoc.index"
			/>
		</template>
		<template #content>
			<DocumentDocs
				:doc="activeDoc.doc"
				:paragraphSetter="setCurrParagraph"
				:currentParagraph="currParagraph"
			/>
		</template>
		<template #rightPanel>
			<MetaPage :meta="[link_meta]" />
		</template>
	</PageUX>
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
*/

import { computed, onBeforeMount, onMounted, ref } from "vue";

import DocumentDocs from "./DocumentDocs.vue";
import PageUX from "@/components/UX/Page/PageUX.vue";
import NavPage from "@/components/UX/Page/NavPage.vue";
import MetaPage from "@/components/UX/Page/MetaPage.vue";

import { PHRASE_PAGE } from "@/constants/phrases";
import { TYPE_INSTANCES } from "@/constants/types";
import { REG_NOT_LETTER_NUMBER } from "@/constants/regulars";

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

const { routerPush, routeHash, clearHash } = useRouterHook();

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
	isTitleClicked.value = true;

	clearHash();
	scrollToTop();

	currParagraph.value = null;
	link_meta.value.activeChild = currParagraph.value;
}

// actions, which we need to dispatch on scrollend event
function onscrollendEvent() {
	isTitleClicked.value = false;
}

// if title was clicked - scroll event cannot run, because it is already scrollin via click event
const isTitleClicked = ref(false);

// set current paragraph
function setCurrParagraph(paragraph, isClicked) {
	if (isTitleClicked.value) return;

	currParagraph.value = "#" + strLowerRegexNoSpace(paragraph, REG_NOT_LETTER_NUMBER);
	link_meta.value.activeChild = currParagraph.value;

	if (isClicked) {
		isTitleClicked.value = true;
	} else {
		routerPush(currParagraph.value);
	}
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

/* hooks */
onMounted(() => {
	document.onscrollend = onscrollendEvent;
});

onBeforeMount(() => {
	document.removeEventListener("onscrollend", onscrollendEvent);
});
</script>

<style scoped lang="scss"></style>
