import { isStringType } from "./typeHelper";
import { ERROR_TYPE } from "@/constants/errors";

//open link in new tab
export const openGoToLink = (link = "") => {
	try {
		if (isStringType(link)) {
			return window.open(link);
		} else {
			throw ERROR_TYPE.NOT_STRING;
		}
	} catch (error) {
		console.error(error);
	}
};
