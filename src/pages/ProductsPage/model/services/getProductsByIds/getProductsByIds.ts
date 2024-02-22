import { getProductsByIdsQuery, getProductsIdsQuery } from '../../../api/productsApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProductsLimit } from '../../selectors/getProductsLimit';
import { Сommodity } from '@/entities/Product';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUniqProducts } from '../../../lib/helpers/getUniqProducts';

export interface GetProductsByIdsReturn {
	page: number;
	products: Сommodity[];
}

export const getProductsByIds = createAsyncThunk<GetProductsByIdsReturn, number, ThunkConfig<string>>(
	'products/getProductsIds',
	async (pageNumber, thunkApi) => {
		const { rejectWithValue, dispatch, getState } = thunkApi;

		const productsLimit = getProductsLimit(getState());
		const offset = productsLimit * (pageNumber - 1);

		try {
			const { result: productsIds } = await dispatch(
				getProductsIdsQuery({ limit: productsLimit, offset })
			).unwrap();

			if (!productsIds) {
				return rejectWithValue('Сервер не вернул данные');
			}

			const { result: products } = await dispatch(getProductsByIdsQuery(productsIds)).unwrap();

			if (!products) {
				return rejectWithValue('Сервер не вернул данные');
			}

			const uniqProducts: Сommodity[] = getUniqProducts(products);

			// console.log(uniqProducts);

			return {
				page: pageNumber,
				products: uniqProducts,
			};
		} catch (error) {
			return rejectWithValue('error');
		}
	}
);
