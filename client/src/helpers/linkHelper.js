import { isString } from "./typeCheckerHelper";
import typeError from "@/constants/errors/typeError";

//open link in new tab
export const openGoToLink = (link) => {
	try {
		if (isString(link)) {
			return window.open(link);
		} else {
			throw typeError.NOT_STRING;
		}
	} catch (error) {
		console.error(error);
	}
};
