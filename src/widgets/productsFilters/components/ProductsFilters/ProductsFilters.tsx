import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProductsFilters.module.scss';
import { СommodityFilters } from '@/entities/Product';
import { Input } from '@/shared/ui/Input/Input';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';

interface ProductsFiltersProps {
	className?: string;
	filters: СommodityFilters;
	onChangeFilterHasName: () => void;
	onChangeFilterBrand: (brand: string) => void;
	onChangeFilterPrice: (price: string) => void;
}

export const ProductsFilters = memo((props: ProductsFiltersProps) => {
	const { className, filters, onChangeFilterBrand, onChangeFilterHasName, onChangeFilterPrice } =
		props;
	const { filterHasName, filterBrand, filterPrice } = filters;

	return (
		<div className={classNames(cls.productsFilters, {}, [className])}>
			<Checkbox label='Имя' value={filterHasName} onChange={onChangeFilterHasName} />
			<Input label='Бренд' value={filterBrand} onChange={onChangeFilterBrand} />
			<Input label='Цена' value={filterPrice} onChange={onChangeFilterPrice} />
		</div>
	);
});
