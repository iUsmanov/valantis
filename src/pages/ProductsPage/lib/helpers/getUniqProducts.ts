import { Сommodity } from '@/entities/Product';

export const getUniqProducts = (array: Сommodity[]) => {
	const set = new Set();
	const result: Сommodity[] = [];

	array.forEach((item) => {
		if (set.has(item.id)) {
			return;
		}

		result.push(item);
		set.add(item.id);
	});

	return result;
};
