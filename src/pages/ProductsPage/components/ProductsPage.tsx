import { ProductsList } from '@/entities/Product';
import { MainLayout } from '@/shared/layouts';
import { memo } from 'react';
import { getProductsByIds } from '../model/services/getProductsByIds/getProductsByIds';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ReducersList, useDynamicModule } from '@/shared/lib/hooks/useDynamicModule/useDynamicModule';
import { productsReducer } from '../model/slices/productsSlice';

const products = [{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 }];

const reducers: ReducersList = {
	products: productsReducer,
};

export const ProductsPage = memo(() => {
	const dispatch = useAppDispatch();
	const s = () => {
		dispatch(getProductsByIds(1));
	};
	useDynamicModule({ reducers });
	return (
		<div>
			<button type='button' onClick={s}>
				DAds
			</button>
			<MainLayout content={<ProductsList products={products} />} filters={<div></div>} />
		</div>
	);
});

// Есть
// ProductsPage - pages
// ProductsList - No
// ProductsList - entities
// ProductsFilters - widget
// ProductsPagination - feature
