import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../consts/initialState';

export const getProductsOffset = (state: StateSchema) => state.products?.offset || initialState.offset;
