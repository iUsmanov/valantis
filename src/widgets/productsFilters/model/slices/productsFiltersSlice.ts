import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductsFiltersSchema } from '../types/productsFiltersSchema';

export const initialState: ProductsFiltersSchema = {
	
};

export const productsFiltersSlice = createSlice({
	name: 'productsFilters',
	initialState,
	reducers: {
		template: (state, action: PayloadAction<string>) => {
        
		},
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

export const { actions: productsFiltersActions } = productsFiltersSlice;
export const { reducer: productsFiltersReducer } = productsFiltersSlice;