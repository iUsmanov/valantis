import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProductsList.module.scss';
import { Сommodity } from '../../model/types/Сommodity';
import { HStack } from '@/shared/ui/Stack';
import { Product } from '../Product/Product';

interface ProductsListProps {
	className?: string;
	products: Сommodity[];
	isLoading?: boolean;
}

export const ProductsList = memo((props: ProductsListProps) => {
	const { className, products, isLoading } = props;

	if (isLoading) {
		return <div className={cls.loader}>Loading...</div>;
	}

	return (
		<HStack Tag='section' wrap='wrap' gap='16' className={classNames(cls.products, {}, [className])}>
			{products.map((product) => {
				return <Product product={product} key={product.id} />;
			})}
		</HStack>
	);
});
