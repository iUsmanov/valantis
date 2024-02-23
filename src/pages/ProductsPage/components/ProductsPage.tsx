import { ProductsList } from '@/entities/Product';
import { MainLayout } from '@/shared/layouts';
import { memo, useEffect } from 'react';
import { getProductsByIds } from '../model/services/getProductsByIds/getProductsByIds';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ReducersList, useDynamicModule } from '@/shared/lib/hooks/useDynamicModule/useDynamicModule';
import { productsReducer } from '../model/slices/productsSlice';
import { useSelector } from 'react-redux';
import { getProducts } from '../model/selectors/getProducts';
import {
	ProductsPagination,
	getProductsLength,
	getProductsPage,
	getProductsTotalPages,
	productsPaginationReducer,
} from '@/features/productsPagination';
import { ProductsFilters } from '@/widgets/productsFilters';
import { getProductsIsLoading } from '../model/selectors/getProductsIsLoading';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { getProductsError } from '../model/selectors/getProductsError';
import cls from './ProductsPage.module.scss';

const reducers: ReducersList = {
	products: productsReducer,
	productsPagination: productsPaginationReducer,
};

export const ProductsPage = memo(() => {
	const dispatch = useAppDispatch();
	const products = useSelector(getProducts);
	const productsTotalPages = useSelector(getProductsTotalPages);
	const productsPage = useSelector(getProductsPage);
	const productsIsLoading = useSelector(getProductsIsLoading);
	const productsError = useSelector(getProductsError);

	const onLoadPage = useDebounce((page: number) => {
		dispatch(getProductsByIds(page));
	}, 600);

	useEffect(() => {
		dispatch(getProductsLength());
		dispatch(getProductsByIds(1));
	}, [dispatch]);

	useDynamicModule({ reducers });

	// useEffect(() => {
	// 	const s = setInterval(() => {
	// 		console.log(products);
	// 	}, 50);

	// 	return () => clearInterval(s);
	// }, [dispatch, products]);

	if (/* !products ||  */ productsTotalPages < 1) {
		return <div className={cls.overlay}>Товаров нет</div>;
	}

	// if (productsIsLoading || !products.length || productsTotalPages < 1) {
	// 	return <div className={cls.overlay}>Loading...</div>;
	// }

	// if (productsError) {
	// 	return <div className={cls.overlay}>Произошла ошибка</div>;
	// }

	return (
		<div>
			<MainLayout
				content={<ProductsList isLoading={productsIsLoading} products={products} />}
				filters={<ProductsFilters onLoadPage={onLoadPage} />}
				pagination={
					!productsIsLoading ? (
						<ProductsPagination
							totalPages={productsTotalPages}
							productsPage={productsPage}
							onLoadPage={onLoadPage}
						/>
					) : undefined
				}
			/>
		</div>
	);
});
