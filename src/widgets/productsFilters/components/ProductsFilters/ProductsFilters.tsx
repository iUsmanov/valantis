import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProductsFilters.module.scss';
import { СommodityFilters } from '@/entities/Product';

interface ProductsFiltersProps {
	className?: string;
	filters: СommodityFilters;
	onChangeFilterHasName: () => void;
	onChangeFilterBrand: (brand: string) => void;
	onChangeFilterPrice: (price: number) => void;
}

export const ProductsFilters = memo((props: ProductsFiltersProps) => {
	const { className, filters } = props;
	const { filterHasName, filterBrand, filterPrice } = filters;

	return (
		<div className={classNames(cls.productsFilters, {}, [className])}>
			<input type='checkbox' />
		</div>
	);
});
