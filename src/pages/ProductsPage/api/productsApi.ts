// #featureFlags
import { rtkApi } from '@/shared/api/rtkApi';
import { Сommodity } from '@/entities/Product';

interface GetProductsIdsOptions {
	limit: number;
	offset: number;
}

interface GetProductsIdsReturn {
	result: string[];
}

interface GetProductsByIdsReturn {
	result: Сommodity[];
}

const productsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getProductsIds: build.mutation<GetProductsIdsReturn, GetProductsIdsOptions>({
			query: ({ limit, offset }) => ({
				url: `/`,
				method: 'POST',
				body: {
					action: 'get_ids',
					params: { offset, limit },
				},
			}),
		}),
		getProductsByIds: build.mutation<GetProductsByIdsReturn, string[]>({
			query: (array) => ({
				url: `/`,
				method: 'POST',
				body: {
					action: 'get_items',
					params: {
						ids: array,
					},
				},
			}),
		}),
	}),
});

export const getProductsIdsQuery = productsApi.endpoints.getProductsIds.initiate;
export const getProductsByIdsQuery = productsApi.endpoints.getProductsByIds.initiate;
