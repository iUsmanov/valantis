import { rtkApi } from '@/shared/api/rtkApi';
import { Сommodity } from '../model/types/Сommodity';
// eslint-disable-next-line fsd-paths-guard/hierarchy-imports-between-layers
import { ProductsFiltersSchema } from '@/widgets/productsFilters';

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
		getFilteredProductsIds: build.mutation<GetProductsIdsReturn, ProductsFiltersSchema>({
			query: (filters) => ({
				url: `/`,
				method: 'POST',
				body: {
					action: 'filter',
					params: {
						price: filters.filterPrice ? Number(filters.filterPrice) : undefined,
						product: filters.filterName ? filters.filterName : undefined,
						brand: filters.filterBrand ? filters.filterBrand : undefined,
					},
				},
			}),
		}),
	}),
});

export const getProductsIdsQuery = productsApi.endpoints.getProductsIds.initiate;
export const getFilteredProductsIdsQuery = productsApi.endpoints.getFilteredProductsIds.initiate;
export const getProductsByIdsQuery = productsApi.endpoints.getProductsByIds.initiate;
