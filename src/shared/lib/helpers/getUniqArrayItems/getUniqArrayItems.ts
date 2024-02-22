export const getUniqArrayItems = (array: any[]) => {
	const set = new Set(array);

	return Array.from(set);
};
