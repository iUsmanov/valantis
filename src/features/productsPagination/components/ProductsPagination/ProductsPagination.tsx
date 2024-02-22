import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProductsPagination.module.scss';

interface ProductsPaginationProps {
	className?: string;
}

export const ProductsPagination = memo((props: ProductsPaginationProps) => {
	const { className } = props;

	return <div className={classNames(cls.productsPagination, {}, [className])}></div>;
});
