<template>
	<header>
		<div class="header_container">
			<PanelHeader>
				<LogoUI @click="routerPush(INDEX_ROUTE_PATHS._)" />
				<SearchUX />
			</PanelHeader>
			<PanelHeader>
				<div class="sections">
					<SectionInfoHeader @click="routerPush(ABOUT_ROUTE_PATHS._)"
						>Обо мне</SectionInfoHeader
					>
					<SectionInfoHeader>Что умею</SectionInfoHeader>
				</div>
				<ThemeSwitcherUX />
				<IconRoundWrapperUI @click="openGoToLink(LINK_HAHA_SOCIALS.GITHUB)">
					<GithubIcon />
				</IconRoundWrapperUI>
				<IconRoundWrapperUI @click="openGoToLink(LINK_HAHA_SOCIALS.TELEGRAM)">
					<TelegramIcon />
				</IconRoundWrapperUI>
				<IconRoundWrapperUI @click="openMailToLink(LINK_HAHA_SOCIALS.MAIL)">
					<MailIcon />
				</IconRoundWrapperUI>
			</PanelHeader>
		</div>
	</header>
</template>

<script setup>
import PanelHeader from "./PanelHeader.vue";
import SectionInfoHeader from "./SectionInfoHeader.vue";

import ThemeSwitcherUX from "@/components/UX/ThemeSwitcherUX.vue";
import SearchUX from "@/components/UX/SearchUX.vue";

import IconRoundWrapperUI from "@/components/UI/Icons/IconRoundWrapperUI.vue";
import LogoUI from "@/components/UI/LogoUI.vue";

import GithubIcon from "@/components/Icons/GithubIcon.vue";
import TelegramIcon from "@/components/Icons/TelegramIcon.vue";
import MailIcon from "@/components/Icons/MailIcon.vue";

import { openGoToLink } from "@/helpers/linkHelper";
import { openMailToLink } from "@/helpers/mailHelper";

import { LINK_HAHA_SOCIALS } from "@/constants/links";
import { INDEX_ROUTE_PATHS } from "@/router/indexConstants";
import { ABOUT_ROUTE_PATHS } from "@/router/About/aboutConstants";

import useRouterHook from "@/hooks/useRouterHook";

const { routerPush } = useRouterHook();
</script>

<style lang="scss" scoped>
header {
	width: 100%;
	min-height: $height_header;
	height: $height_header;
	border-bottom: 1px solid $color_default;
	@include pos-fix-l-t;
	background-color: $color_white;
	z-index: $z-index_header;

	.header_container {
		height: 100%;
		width: $width_desktop;
		margin: auto;
		@include flex(row, space-between);

		.sections {
			display: flex;
			flex-direction: row;
			height: 100%;
		}
	}
}
</style>
