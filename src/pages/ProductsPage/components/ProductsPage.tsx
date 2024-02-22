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
import { Button } from '@/shared/ui/Button/Button';

const reducers: ReducersList = {
	products: productsReducer,
};

export const ProductsPage = memo(() => {
	const dispatch = useAppDispatch();
	const products = useSelector(getProducts);

	useEffect(() => {
		dispatch(getProductsByIds(1));
	}, [dispatch]);

	useDynamicModule({ reducers });

	if (!products) return null;

	return (
		<div>
			<Button onClick={() => {}} size='m'>
				Button
			</Button>
			<MainLayout content={<ProductsList products={products} />} filters={<div></div>} />
			<ProductsPagination />
		</div>
	);
});

// Есть
// ProductsPage - pages
// ProductsList - No
// ProductsList - entities
// ProductsFilters - widget
// ProductsPagination - feature
