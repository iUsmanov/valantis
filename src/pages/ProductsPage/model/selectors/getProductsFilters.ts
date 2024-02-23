import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../consts/initialState';

export const getProductsFilters = (state: StateSchema) =>
	state.products?.filters || initialState.filters;
