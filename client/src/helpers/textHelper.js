import { ERROR_TYPE } from "@/constants/errors";
import { REG_NOT_LETTER_NUMBER, REG_NO_SPACE } from "@/constants/regulars";
import { TYPE_JS } from "@/constants/types";

export function strToLowerNoSpace(str) {
	try {
		if (typeof str === TYPE_JS.STRING) {
			return str.replace(REG_NO_SPACE, "_").toLowerCase().replace(REG_NOT_LETTER_NUMBER, "");
		} else {
			throw ERROR_TYPE.NOT_STRING;
		}
	} catch (error) {
		console.error(error);
	}
}
