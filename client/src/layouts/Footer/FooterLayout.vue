<template>
	<footer>
		<a
			:href="LINK_HAHA_SOCIALS.TELEGRAM"
			target="_blank"
		>
			@hahavenn
		</a>
	</footer>
</template>

<script setup>
import { LINK_HAHA_SOCIALS } from "@/constants/links";
</script>

<style scoped lang="scss">
footer {
	width: 100%;
	text-align: center;
	color: $font-color_black;
	font-size: $font-size_default;
	padding: 10px 0;

	a:hover {
		@include link-hover($transition: 0.1s);
	}
}
</style>
