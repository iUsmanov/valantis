import { Сommodity } from '@/entities/Product';

export interface ProductsSchema {
	products: Сommodity[];
	isLoading: boolean;
	error?: string;
}
