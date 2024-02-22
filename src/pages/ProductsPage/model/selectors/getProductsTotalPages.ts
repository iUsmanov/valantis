import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../consts/initialState';

export const getProductsTotalPages = (state: StateSchema) =>
	state.products?.totalPages || initialState.totalPages;
