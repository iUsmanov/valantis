import { getUniqArrayItems } from '@/shared/lib/helpers/getUniqArrayItems/getUniqArrayItems';
import { getProductsByIdsQuery, getProductsIdsQuery } from '../../../api/productsApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProductsByIds = createAsyncThunk('products/getProductsIds', async (_, thunkApi) => {
	const { rejectWithValue, dispatch, getState } = thunkApi;

	try {
		const { result: productsIds } = await dispatch(
			getProductsIdsQuery({ limit: 10, offset: 10 })
		).unwrap();

		if (!productsIds) {
			return rejectWithValue('Сервер не вернул данные');
		}

		const productsUniqIds = getUniqArrayItems(productsIds);

		const { result: products } = await dispatch(getProductsByIdsQuery(productsUniqIds)).unwrap();

		if (!products) {
			return rejectWithValue('Сервер не вернул данные');
		}

		// console.log(products);

		return products;
	} catch (error) {
		return rejectWithValue(error);
	}
});
