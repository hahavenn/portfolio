import { ERROR_EMAIL } from "@/constants/errors";
import { REG_EMAIL } from "@/constants/regulars";

// check valid email or not
export const isEmailValid = (email = "") => {
	try {
		if (new RegExp(REG_EMAIL).test(email)) {
			return true;
		} else {
			throw ERROR_EMAIL.INVALID;
		}
	} catch (error) {
		console.error(error);
		return false;
	}
};

// open mailto link
export const openMailToLink = (email = "") => {
	if (isEmailValid(email)) {
		return window.open(`mailto:${email}`);
	} else {
		return "";
	}
};
