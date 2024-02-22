import { getProductsIdsQuery } from '../../../api/productsApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getProductsLimit } from '../../selectors/getProductsLimit';

export const getProductsLength = createAsyncThunk<number, void, ThunkConfig<string>>(
	'products/getProductsLength',
	async (_, thunkApi) => {
		const { rejectWithValue, dispatch, getState } = thunkApi;

		const productsLimit = getProductsLimit(getState());

		try {
			const { result: productsIds } = await dispatch(
				getProductsIdsQuery({ limit: Infinity, offset: 0 })
			).unwrap();

			if (!productsIds) {
				return rejectWithValue('Сервер не вернул данные');
			}

			console.log(productsIds.length);

			return Math.ceil(productsIds.length / productsLimit);
		} catch (error) {
			return rejectWithValue('error');
		}
	}
);
