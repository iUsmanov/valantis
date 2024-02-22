import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductsPaginationSchema } from '../types/productsPaginationSchema';

export const initialState: ProductsPaginationSchema = {
	page: 1,
};

export const productsPaginationSlice = createSlice({
	name: 'productsPagination',
	initialState,
	reducers: {
		template: (state, action: PayloadAction<string>) => {},
	},
	// extraReducers(builder) {
	// 	builder
	// 		.addCase(.pending, (state) => {
	// 			state.data = undefined;
	// 			state.error = undefined;
	// 			state.isLoading = true;
	// 		})
	// 		.addCase(.fulfilled, (state, action: PayloadAction<>) => {
	// 			state.data = action.payload;
	// 			state.isLoading = false;
	// 		})
	// 		.addCase(.rejected, (state, action) => {
	// 			state.error = action.payload;
	// 			state.isLoading = false;
	// 		});
	// },
});

export const { actions: productsPaginationActions } = productsPaginationSlice;
export const { reducer: productsPaginationReducer } = productsPaginationSlice;
