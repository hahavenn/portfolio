<template>
	<div class="header">
		<div class="header_container">
			<HeaderPanel>
				<Logo />
				<Search />
			</HeaderPanel>
			<HeaderPanel>
				<div class="sections">
					<HeaderSectionInfo>Обо мне</HeaderSectionInfo>
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
</script>

<style lang="scss" scoped>
.header {
	width: 100%;
	height: 60px;
	border-bottom: 1px solid $color-default;

	.header_container {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 100%;
		width: $width-desktop;
		margin: auto;
		justify-content: space-between;

		.sections {
			display: flex;
			flex-direction: row;
			height: 100%;
		}
	}
}
</style>
