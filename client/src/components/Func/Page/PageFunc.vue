<template>
	<div
		class="reading"
		ref="readingRef"
	>
		<aside
			class="panel"
			:style="leftPanelStyle"
		>
			<slot name="leftPanel"></slot>
		</aside>
		<div class="content">
			<slot name="content"></slot>
		</div>
		<aside
			class="panel"
			:style="rightPanelStyle"
			ref="rightPanelRef"
		>
			<slot name="rightPanel"></slot>
		</aside>
	</div>
</template>

<script setup>
/* 
	<aside> - using for left and right panels
	div.content - using for main content
*/
import { onMounted, reactive, ref } from "vue";

/* define common instances */
const readingRef = ref(null);
const leftPanelStyle = reactive({ left: "" });
const rightPanelStyle = reactive({ left: "" });
const rightPanelRef = ref(null);

/* hooks */

onMounted(() => {
	// calc position of panels
	leftPanelStyle.left = readingRef.value.getBoundingClientRect().left + "px";
	rightPanelStyle.left =
		readingRef.value.getBoundingClientRect().right -
		rightPanelRef.value.getBoundingClientRect().width +
		"px";
});
</script>

<style scoped lang="scss">
$border_width: 2px;
$gap_width: 40px;
.reading {
	width: 100%;
	gap: $gap_width;

	.panel {
		padding: 15px 0;
		min-width: $width_panel;
		width: $width_panel;
		max-height: fit-content;
		position: fixed;
		top: $content_top_desktop;

		&:nth-child(1) {
			@include border-right($color_default, $border_width);
		}

		&:nth-last-child(1) {
			@include border-left($color_default, $border_width);
		}
	}

	.content {
		width: calc(100% - 2 * $gap_width - 2 * $width_panel);
		margin: auto;
		min-height: 100%;
	}
}
</style>
