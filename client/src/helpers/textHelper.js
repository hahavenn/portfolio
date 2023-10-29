import { isStringType } from "./typeHelper";
import { ERROR_TYPE } from "@/constants/errors";
import { REG_NOT_LETTER_NUMBER } from "@/constants/regulars";
import { TYPE_HTML, TYPE_SEMANTIC_HTML } from "@/constants/types";

export function strLowerRegexNoSpace(str = "", regex = "") {
	return str.replace(/\s/g, "_").toLowerCase().replace(REG_NOT_LETTER_NUMBER, "");
}
