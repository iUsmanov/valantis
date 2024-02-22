import { ProductsSchema } from '../model/types/productsSchema';

export const initialState: ProductsSchema = {
	products: [],
	error: '',
	isLoading: false,
	limit: 50,
	page: 1,
	totalPages: 1,
};