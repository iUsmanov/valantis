import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getProductsByIds } from '../services/getProductsByIds/getProductsByIds';
import { initialState } from '../../consts/initialState';
import { Сommodity } from '@/entities/Product';

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
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
