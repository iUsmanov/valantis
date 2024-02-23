import { Сommodity } from '@/entities/Product';

export interface ProductsSchema {
	ids: string[];
	products?: Сommodity[];
	isLoading: boolean;
	error?: string;
}
