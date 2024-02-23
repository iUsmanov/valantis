export interface Сommodity {
	id: string;
	name: string;
	brand: string;
	price: number;
}

export interface СommodityFilters {
	filterHasName: boolean;
	filterBrand?: string;
	filterPrice?: number;
}
