import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../consts/initialState';

export const getProductsPage = (state: StateSchema) => state.products?.page || initialState.page;
