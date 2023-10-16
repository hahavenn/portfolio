import { TYPE_JS } from "@/constants/types";

// check for typeof == "string"
export const isStringType = (s) => {
	return typeof s == TYPE_JS.STRING;
};

// check for typeof == "Array"
export const isArrayType = (a) => {
	return Array.isArray(a);
};
