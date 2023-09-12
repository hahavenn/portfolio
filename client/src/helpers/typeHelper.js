import jsTypes from "@/constants/types/jsTypes";

// check for typeof == "string"
export const isString = (string) => {
	return typeof string == jsTypes.STRING;
};
