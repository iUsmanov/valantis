import { СommodityFilters, Сommodity } from '@/entities/Product';

export interface ProductsSchema {
	products: Сommodity[];
	isLoading: boolean;
	error?: string;
	limit: number;
	page: number;
	totalPages: number;
	filters: СommodityFilters;
}
