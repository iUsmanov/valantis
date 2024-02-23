import { ProductsSchema } from '../model/types/productsSchema';

export const initialState: ProductsSchema = {
	ids: [],
	products: undefined,
	error: '',
	isLoading: false,
};
