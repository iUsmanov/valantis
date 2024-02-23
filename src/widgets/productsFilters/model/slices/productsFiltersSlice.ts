import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../consts/initialState';

export const productsFiltersSlice = createSlice({
	name: 'productsFilters',
	initialState,
	reducers: {
		changeFilterName: (state, action: PayloadAction<string>) => {
			state.filterName = action.payload;
		},
		changeFilterBrand: (state, action: PayloadAction<string>) => {
			state.filterBrand = action.payload;
		},
		changeFilterPrice: (state, action: PayloadAction<string>) => {
			state.filterPrice = action.payload;
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
