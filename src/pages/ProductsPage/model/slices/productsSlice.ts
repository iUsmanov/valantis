import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductsSchema } from '../types/productsSchema';

export const initialState: ProductsSchema = {
	
};

export const productsSlice = createSlice({
	name: 'products',
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

export const { actions: productsActions } = productsSlice;
export const { reducer: productsReducer } = productsSlice;