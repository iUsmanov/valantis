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
import {
	ProductsFilters,
	getProductsFilterByBrand,
	getProductsFilterByName,
	getProductsFilterByPrice,
} from '@/widgets/productsFilters';
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
	const productsFilterByBrand = useSelector(getProductsFilterByBrand);
	const productsFilterByName = useSelector(getProductsFilterByName);
	const productsFilterByPrice = useSelector(getProductsFilterByPrice);

	const isLoading = useMemo(() => {
		if (productsIsLoading || products === undefined) {
			return true;
		} else {
			return false;
		}
	}, [products, productsIsLoading]);

	const canShowPagination = useMemo(() => {
		if (isLoading) return false;
		if (!products?.length) return false;
		if (productsFilterByBrand || productsFilterByName || productsFilterByPrice) {
			return false;
		}
		return true;
	}, [
		isLoading,
		products?.length,
		productsFilterByBrand,
		productsFilterByName,
		productsFilterByPrice,
	]);

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
					<ProductsPagination
						canShowPagination={canShowPagination}
						totalPages={productsTotalPages}
						productsPage={productsPage}
						onLoadPage={onLoadPage}
					/>
				}
			/>
		</div>
	);
});
