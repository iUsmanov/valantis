import { ProductsList } from '@/entities/Product';
import { MainLayout } from '@/shared/layouts';
import { memo, useEffect } from 'react';
import { getProductsByIds } from '../model/services/getProductsByIds/getProductsByIds';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ReducersList, useDynamicModule } from '@/shared/lib/hooks/useDynamicModule/useDynamicModule';
import { productsReducer } from '../model/slices/productsSlice';
import { useSelector } from 'react-redux';
import { getProducts } from '../model/selectors/getProducts';
import { ProductsPagination } from '@/features/productsPagination';
import { getProductsLength } from '../model/services/getProductsLength/getProductsLength';
import { getProductsTotalPages } from '../model/selectors/getProductsTotalPages';
import { getProductsPage } from '../model/selectors/getProductsPage';

const reducers: ReducersList = {
	products: productsReducer,
};

export const ProductsPage = memo(() => {
	const dispatch = useAppDispatch();
	const products = useSelector(getProducts);
	const productsTotalPages = useSelector(getProductsTotalPages);
	const productsPage = useSelector(getProductsPage);

	const onLoadPage = (page: number) => {
		dispatch(getProductsByIds(page));
	};

	useEffect(() => {
		dispatch(getProductsByIds(1));
		dispatch(getProductsLength());
	}, [dispatch]);

	useDynamicModule({ reducers });

	if (!products || productsTotalPages < 2) return null;

	return (
		<div>
			<MainLayout
				content={<ProductsList products={products} />}
				filters={<div></div>}
				pagination={
					<ProductsPagination
						totalPages={productsTotalPages}
						productsPage={productsPage}
						onLoadPage={onLoadPage}
					/>
				}
			/>
		</div>
	);
});

// Есть
// ProductsPage - pages
// ProductsList - No
// ProductsList - entities
// ProductsFilters - widget
// ProductsPagination - feature
