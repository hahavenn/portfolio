import emailError from "@/constants/errors/emailError";
import { EMAIL_REG } from "@/constants/regularExpressions";

// check valid email or not
export const isEmailValid = (email) => {
	try {
		if (new RegExp(EMAIL_REG).test(email)) {
			return true;
		} else {
			throw emailError.INVALID;
		}
	} catch (error) {
		console.error(error);
		return false;
	}
};

export const openMailToLink = (email) => {
	if (isEmailValid(email)) {
		return window.open(`mailto:${email}`);
	} else {
		return "";
	}
};
