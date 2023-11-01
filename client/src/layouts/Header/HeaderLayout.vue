<template>
	<header>
		<div class="header_container">
			<PanelHeader>
				<LogoUI @click="clickTab(INDEX_ROUTE_PATHS._)" />
				<SearchUX />
			</PanelHeader>
			<PanelHeader>
				<div class="sections">
					<SectionInfoHeader
						@click="clickTab(ABOUT_ROUTE_PATHS._)"
						:isActive="routePath === ABOUT_ROUTE_PATHS._"
					>
						Обо мне
					</SectionInfoHeader>
					<SectionInfoHeader>Что умею</SectionInfoHeader>
				</div>
				<SwitcherUX :toggler="stylesStore.changeThemeState">
					<template #left>
						<SunIcon />
					</template>
					<template #right>
						<MoonIcon />
					</template>
				</SwitcherUX>
				<IconRoundWrapperUI
					@click="openGoToLink(LINK_HAHA_SOCIALS.GITHUB)"
					:isHover="true"
					:cursorPointer="true"
				>
					<GithubIcon />
				</IconRoundWrapperUI>
				<IconRoundWrapperUI
					@click="openGoToLink(LINK_HAHA_SOCIALS.TELEGRAM)"
					:isHover="true"
					:cursorPointer="true"
				>
					<TelegramIcon />
				</IconRoundWrapperUI>
				<IconRoundWrapperUI
					@click="openMailToLink(LINK_HAHA_SOCIALS.MAIL)"
					:isHover="true"
					:cursorPointer="true"
				>
					<MailIcon />
				</IconRoundWrapperUI>
			</PanelHeader>
		</div>
	</header>
</template>

<script setup>
import PanelHeader from "./PanelHeader.vue";
import SectionInfoHeader from "./SectionInfoHeader.vue";

import SwitcherUX from "@/components/UX/SwitcherUX.vue";
import SearchUX from "@/components/UX/SearchUX.vue";

import IconRoundWrapperUI from "@/components/UI/IconRoundWrapperUI.vue";
import LogoUI from "@/components/UI/LogoUI.vue";
import SunIcon from "@/components/Icons/SunIcon.vue";
import MoonIcon from "@/components/Icons/MoonIcon.vue";

import GithubIcon from "@/components/Icons/GithubIcon.vue";
import TelegramIcon from "@/components/Icons/TelegramIcon.vue";
import MailIcon from "@/components/Icons/MailIcon.vue";

import { openGoToLink } from "@/helpers/linkHelper";
import { openMailToLink } from "@/helpers/mailHelper";

import { LINK_HAHA_SOCIALS } from "@/constants/links";
import { INDEX_ROUTE_PATHS } from "@/router/routes";
import { ABOUT_ROUTE_PATHS } from "@/router/aboutRoute";

import useRouterHook from "@/hooks/useRouterHook";
import useStylesStore from "@/stores/stylesStore";

/* define common instances */
const { routerPush, routePath } = useRouterHook();

const stylesStore = useStylesStore();

// function to push on other tabs
function clickTab(toPath) {
	if (toPath === routePath.value) {
		return;
	} else {
		routerPush(toPath);
	}
}
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
