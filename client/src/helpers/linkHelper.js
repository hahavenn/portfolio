import { isStringType } from "./typeHelper";
import { ERROR_type } from "@/constants/errors";

//open link in new tab
export const openGoToLink = (link = "") => {
	try {
		if (isStringType(link)) {
			return window.open(link);
		} else {
			throw ERROR_type.NOT_STRING;
		}
	} catch (error) {
		console.error(error);
	}
};
