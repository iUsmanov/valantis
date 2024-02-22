import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Product.module.scss';
import { Сommodity } from '../../model/types/Сommodity';

interface ProductProps {
	className?: string;
	product: Сommodity;
}

export const Product = memo((props: ProductProps) => {
	const { className, product } = props;

	return (
		<div className={classNames(cls.product, {}, [className])}>
			<div>ID - {product.id}</div>
			<div>Название - {product.name}</div>
			<div>Бренд - {product.brand}</div>
			<div>Цена - {product.price}</div>
		</div>
	);
});

/* 

import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Product.module.scss';

interface ProductProps {
	className?: string;
}

export const Product = memo((props: ProductProps) => {
	const { className } = props;

	return <div className={classNames(cls.product, {}, [className])}>
		
	</div>;
});


*/
