<template>
	<div class="paragraph">
		<div class="title">
			{{ doc.title }}
		</div>
		<template v-for="c in doc.content">
			<div class="subtitle">
				<div :id="strToLowerNoSpace(c.subtitle)"></div>
				<span>{{ c.subtitle }}</span>
			</div>
			<template v-for="data in c.paragraph">
				<div
					class="data"
					v-if="data.type === TYPE_SEMANTIC_HTML.TEXT"
				>
					<p>
						<template v-for="d in data.value">
							<template v-if="d.type === TYPE_HTML.TEXT_PLAIN">{{
								d.value
							}}</template>
							<template v-if="d.type === TYPE_HTML.LINK">
								<a
									target="_blank"
									:href="d.value.link"
									>{{ d.value.name }}</a
								>
							</template>
							<template v-if="d.type === TYPE_HTML.TEXT_BOLD">
								<strong>{{ d.value }}</strong>
							</template>
							<template v-if="d.type === TYPE_HTML.TEXT_CURSIVE">
								<i>{{ d.value }}</i>
							</template>
						</template>
					</p>
				</div>
				<div
					class="code"
					v-if="data.type === TYPE_SEMANTIC_HTML.CODE"
				>
					<pre><code>{{ data.value.replace(/\n/, "") }}</code></pre>
				</div>
			</template>
		</template>
	</div>
</template>

<script setup>
/* 
	props:
		doc - document to display
*/

import { TYPE_SEMANTIC_HTML, TYPE_HTML } from "@/constants/types";

import { strToLowerNoSpace } from "@/helpers/textHelper";

/* define common instances */
const props = defineProps({
	doc: {
		type: Object,
		required: true,
	},
});
</script>

<style scoped lang="scss">
.paragraph {
	@include flex(column, flex-start, flex-start);
	gap: 20px;

	.title {
		font-size: $font-size_giant;
		font-weight: $font-weight-bold;
		margin-bottom: 10px;
		letter-spacing: -2px;
	}

	.subtitle {
		position: relative;
		div {
			top: calc($height_header * -1.5 - ($font-size_small) / 2 - 2px);
			position: absolute;

			// if you want to see, how to scroll work - uncomment code below

			/* height: 1px;
			width: 100%;
			background-color: #f00;
			z-index: 99999; */
		}
		font-size: $font-size_medium;
	}

	.data {
		p {
			font-size: $font-size_default;
			word-break: break-word;
			color: $font-color_black;

			a {
				color: $font-color_black;
				text-decoration: 2px solid underline $font-color_black;
				@include link-hover;
			}
		}
	}

	.code {
		@include border-default($color: $color_active_default);
		width: 100%;
		padding: 10px;

		code {
			font-family: Consolas, "Courier New", monospace;
		}
	}
}
</style>
