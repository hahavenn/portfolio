<template>
	<div class="header">
		<div class="header_container">
			<HeaderPanel>
				<Logo @click="routerPush(IndexRoute_Paths._)" />
				<Search />
			</HeaderPanel>
			<HeaderPanel>
				<div class="sections">
					<HeaderSectionInfo @click="routerPush(AboutRoute_Paths._)"
						>Обо мне</HeaderSectionInfo
					>
					<HeaderSectionInfo>Что умею</HeaderSectionInfo>
				</div>
				<ThemeSwitcher />
				<IconRoundWrapper @click="openGoToLink(hahaSocials.GITHUB)">
					<GithubIcon />
				</IconRoundWrapper>
				<IconRoundWrapper @click="openGoToLink(hahaSocials.TELEGRAM)">
					<TelegramIcon />
				</IconRoundWrapper>
				<IconRoundWrapper @click="openMailToLink(hahaSocials.MAIL)">
					<MailIcon />
				</IconRoundWrapper>
			</HeaderPanel>
		</div>
	</div>
</template>

<script setup>
import HeaderPanel from "./HeaderPanel.vue";
import HeaderSectionInfo from "./HeaderSectionInfo.vue";

import ThemeSwitcher from "@/components/Functionals/ThemeSwitcher.vue";
import Search from "@/components/Functionals/Search.vue";

import IconRoundWrapper from "@/components/UI/IconRoundWrapper.vue";
import Logo from "@/components/UI/Logo.vue";

import GithubIcon from "@/components/Icons/GithubIcon.vue";
import TelegramIcon from "@/components/Icons/TelegramIcon.vue";
import MailIcon from "@/components/Icons/MailIcon.vue";

import { openGoToLink } from "@/helpers/linkHelper";
import { openMailToLink } from "@/helpers/mailHelper";

import { hahaSocials } from "@/constants/links/socialLinks";
import { IndexRoute_Paths } from "@/router/indexConstants";
import { AboutRoute_Paths } from "@/router/About/aboutConstants";

import useRouterHook from "@/hooks/useRouterHook";

const { routerPush } = useRouterHook();
</script>

<style lang="scss" scoped>
.header {
	width: 100%;
	min-height: 60px;
	height: 60px;
	border-bottom: 1px solid $color-default;

	.header_container {
		height: 100%;
		width: $width-desktop;
		margin: auto;
		@include flex(row, space-between, center);

		.sections {
			display: flex;
			flex-direction: row;
			height: 100%;
		}
	}
}
</style>
