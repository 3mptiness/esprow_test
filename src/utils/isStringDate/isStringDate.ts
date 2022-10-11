export const isStringDate = (str: string) => {
	return /^\d{4}-\d{2}-\d{2}$/.test(str);
};
