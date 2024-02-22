import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductsSchema } from '../types/productsSchema';
import { Сommodity } from '@/entities/Product';
import { getProductsByIds } from '../services/getProductsByIds/getProductsByIds';

export const initialState: ProductsSchema = {
	products: [],
	error: '',
	isLoading: false,
	limit: 50,
	offset: 0,
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		changeOffset: (state, action: PayloadAction<'plus' | 'minus'>) => {
			if (action.payload === 'plus') {
				state.offset = state.offset + state.limit;
			} else {
				state.offset = state.offset - state.limit;
			}
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getProductsByIds.pending, (state) => {
				state.products = [];
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(getProductsByIds.fulfilled, (state, action: PayloadAction<Сommodity[]>) => {
				state.products = action.payload;
				state.isLoading = false;
			})
			.addCase(getProductsByIds.rejected, (state, action) => {
				state.isLoading = false;
				const s = String(action.payload);
				state.error = s;
			});
	},
});

export const { actions: productsActions } = productsSlice;
export const { reducer: productsReducer } = productsSlice;
