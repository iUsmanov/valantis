// #featureFlags
import { rtkApi } from '@/shared/api/rtkApi';

interface GetProductsIdsOptions {
	limit: number;
	offset: number;
}

const productsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getProductsIds: build.mutation<void, GetProductsIdsOptions>({
			query: ({ limit, offset }) => ({
				url: `/`,
				method: 'POST',
				body: {
					action: 'get_ids',
				},
			}),
		}),
	}),
});

export const updateFeatureFlagsMutation = productsApi.endpoints.getProductsIds.initiate;
