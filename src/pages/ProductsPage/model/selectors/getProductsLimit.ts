import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../consts/initialState';

export const getProductsLimit = (state: StateSchema) => state.products?.limit || initialState.limit;
