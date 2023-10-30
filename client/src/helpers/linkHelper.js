import { TYPE_JS } from "@/constants/types";
import { ERROR_TYPE } from "@/constants/errors";

//open link in new tab
export const openGoToLink = (link) => {
	try {
		if (typeof link === TYPE_JS.STRING) {
			return window.open(link);
		} else {
			throw ERROR_TYPE.NOT_STRING;
		}
	} catch (error) {
		console.error(error);
	}
};
