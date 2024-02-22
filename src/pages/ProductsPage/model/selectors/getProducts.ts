import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../consts/initialState';

export const getProducts = (state: StateSchema) => state.products?.products || initialState.products;
