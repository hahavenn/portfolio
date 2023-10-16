import { ERROR_email } from "@/constants/errors";
import { REG_email } from "@/constants/regulars";

// check valid email or not
export const isEmailValid = (email = "") => {
	try {
		if (new RegExp(REG_email).test(email)) {
			return true;
		} else {
			throw ERROR_email.INVALID;
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
