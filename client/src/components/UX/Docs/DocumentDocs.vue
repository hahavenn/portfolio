<template>
	<div class="paragraph">
		<div class="title">
			{{ props.doc.title }}
		</div>
		<template v-for="c in props.doc.content">
			<div class="subtitle">
				<div :id="strLowerRegexNoSpace(c.subtitle)"></div>
				<span>{{ c.subtitle }}</span>
			</div>
			<template v-for="data in c.paragraph">
				<div
					class="data"
					v-if="data.type === TYPE_semanticHTML.TEXT"
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
			</template>
		</template>
	</div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

import { TYPE_semanticHTML, TYPE_HTML } from "@/constants/types";

import { strLowerRegexNoSpace } from "@/helpers/textHelper";

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
			top: -$height_header;
			position: absolute;
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
}
</style>
