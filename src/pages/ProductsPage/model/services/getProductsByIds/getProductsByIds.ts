import {
	getProductsByIdsQuery,
	getProductsIdsQuery,
	getFilteredProductsIdsQuery,
} from '../../../api/productsApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProductsLimit } from '../../selectors/getProductsLimit';
import { Сommodity } from '@/entities/Product';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUniqProducts } from '../../../lib/helpers/getUniqProducts';
import {
	getProductsFilterByBrand,
	getProductsFilterByName,
	getProductsFilterByPrice,
} from '@/widgets/productsFilters';

export interface GetProductsByIdsReturn {
	page: number;
	products: Сommodity[];
}

export const getProductsByIds = createAsyncThunk<GetProductsByIdsReturn, number, ThunkConfig<string>>(
	'products/getProductsIds',
	async (pageNumber, thunkApi) => {
		const { rejectWithValue, dispatch, getState } = thunkApi;

		const productsFilterByBrand = getProductsFilterByBrand(getState());
		const productsFilterByName = getProductsFilterByName(getState());
		const productsFilterByPrice = getProductsFilterByPrice(getState());
		const productsLimit = getProductsLimit(getState());
		const offset = productsLimit * (pageNumber - 1);

		try {
			let productsIds;
			if (!productsFilterByBrand && !productsFilterByName && !productsFilterByPrice) {
				const { result } = await dispatch(
					getProductsIdsQuery({ limit: productsLimit, offset })
				).unwrap();

				productsIds = result;
			} else {
				const { result } = await dispatch(
					getFilteredProductsIdsQuery({
						filterBrand: productsFilterByBrand,
						filterName: productsFilterByName,
						filterPrice: productsFilterByPrice,
					})
				).unwrap();

				productsIds = result;
			}

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
			getProductsByIds(pageNumber);
			return rejectWithValue('error');
		}
	}
);
