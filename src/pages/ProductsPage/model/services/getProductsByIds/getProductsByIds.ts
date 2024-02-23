import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProductsByIdsQuery, Сommodity } from '@/entities/Product';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUniqProducts } from '../../../lib/helpers/getUniqProducts';

import { productsPaginationActions } from '@/features/productsPagination';
import { getProductsIds } from '../getProductsIds/getProductsIds';
import { getProductsIds as getProductsIdsSelector } from '../../selectors/getProductsIds';

// export interface GetProductsByIdsReturn {
// 	page: number;
// 	products: Сommodity[];
// }

export const getProductsByIds = createAsyncThunk<Сommodity[], number, ThunkConfig<string>>(
	'products/getProductsByIds',
	async (pageNumber, thunkApi) => {
		const { rejectWithValue, dispatch, getState } = thunkApi;

		try {
			await dispatch(getProductsIds(pageNumber));
			const productsIds = getProductsIdsSelector(getState());

			if (!productsIds) {
				return rejectWithValue('Сервер не вернул данные');
			}

			const { result: products } = await dispatch(getProductsByIdsQuery(productsIds)).unwrap();

			if (!products) {
				return rejectWithValue('Сервер не вернул данные');
			}

			const uniqProducts: Сommodity[] = getUniqProducts(products);

			dispatch(productsPaginationActions.changePage(pageNumber));
			return uniqProducts;
		} catch (error) {
			getProductsByIds(pageNumber);
			return rejectWithValue('error');
		}
	}
);
