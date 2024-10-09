export const snakeToCamelCase = (str: string): string => {
	if (!str.includes('_')) {
		return str;
	}
	return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
};
