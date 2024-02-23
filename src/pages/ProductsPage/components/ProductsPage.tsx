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
import { ProductsFilters } from '@/widgets/productsFilters';
import { getProductsIsLoading } from '../model/selectors/getProductsIsLoading';
import cls from './ProductsPage.module.scss';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';

const reducers: ReducersList = {
	products: productsReducer,
};

export const ProductsPage = memo(() => {
	const dispatch = useAppDispatch();
	const products = useSelector(getProducts);
	const productsTotalPages = useSelector(getProductsTotalPages);
	const productsPage = useSelector(getProductsPage);
	const productsIsLoading = useSelector(getProductsIsLoading);

	const onLoadPage = useDebounce((page: number) => {
		dispatch(getProductsByIds(page));
	}, 600);

	useEffect(() => {
		dispatch(getProductsByIds(1));
		dispatch(getProductsLength());
	}, [dispatch]);

	useDynamicModule({ reducers });

	// if (!products || productsTotalPages < 1) {
	// 	return null;
	// }

	if (productsIsLoading || !products.length || productsTotalPages < 1) {
		return <div className={cls.loader}>Loading...</div>;
	}

	return (
		<div>
			<MainLayout
				content={<ProductsList products={products} />}
				filters={<ProductsFilters onLoadPage={onLoadPage} />}
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

// 3 Фильтры такие:

// Есть имя ?
// Введённое название бренда соответ ?
// Введённая цена соответ ?
