import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
	GetProductsByIdsReturn,
	getProductsByIds,
} from '../services/getProductsByIds/getProductsByIds';
import { initialState } from '../../consts/initialState';
import { getProductsLength } from '../services/getProductsLength/getProductsLength';

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		changeFilterHasName: (state) => {
			state.filters.filterHasName = !state.filters.filterHasName;
		},
		changeFilterBrand: (state, action: PayloadAction<string>) => {
			state.filters.filterBrand = action.payload;
		},
		changeFilterPrice: (state, action: PayloadAction<string>) => {
			state.filters.filterPrice = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getProductsByIds.pending, (state) => {
				state.products = [];
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(
				getProductsByIds.fulfilled,
				(state, action: PayloadAction<GetProductsByIdsReturn>) => {
					state.page = action.payload.page;
					state.products = action.payload.products;
					state.isLoading = false;
				}
			)
			.addCase(getProductsByIds.rejected, (state, action) => {
				state.isLoading = false;
				const s = String(action.payload);
				state.error = s;
			})
			// ===
			.addCase(getProductsLength.pending, (state) => {})
			.addCase(getProductsLength.fulfilled, (state, action: PayloadAction<number>) => {
				state.totalPages = action.payload;
			})
			.addCase(getProductsLength.rejected, (state, action) => {
				const s = String(action.payload);
				state.error = s;
			});
	},
});

export const { actions: productsActions } = productsSlice;
export const { reducer: productsReducer } = productsSlice;
