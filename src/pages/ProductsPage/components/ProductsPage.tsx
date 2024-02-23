import { ProductsList } from '@/entities/Product';
import { MainLayout } from '@/shared/layouts';
import { memo, useEffect, useMemo } from 'react';
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

	const isLoading = useMemo(() => {
		if (productsIsLoading || products === undefined) {
			return true;
		} else {
			return false;
		}
	}, [products, productsIsLoading]);

	const onLoadPage = useDebounce((page: number) => {
		dispatch(getProductsByIds(page));
		window.scrollTo(0, 0);
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

	// if (productsError) {
	// 	return <div className={cls.overlay}>Произошла ошибка</div>;
	// }

	return (
		<div>
			<MainLayout
				content={
					<ProductsList
						isLoading={isLoading}
						products={products}
						productsTotalPages={productsTotalPages}
					/>
				}
				filters={<ProductsFilters onLoadPage={onLoadPage} />}
				pagination={
					!isLoading && products?.length ? (
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
