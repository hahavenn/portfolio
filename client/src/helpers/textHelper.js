import { isStringType } from "./typeHelper";
import { ERROR_type } from "@/constants/errors";
import { REG_not_letter_number } from "@/constants/regulars";
import { TYPE_HTML, TYPE_semanticHTML } from "@/constants/types";

export function strLowerRegexNoSpace(str = "", regex = "") {
	return str.replace(/\s/g, "_").toLowerCase().replace(REG_not_letter_number, "");
}
