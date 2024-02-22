import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProductsPagination.module.scss';
import { HStack } from '@/shared/ui/Stack';

interface ProductsPaginationProps {
	className?: string;
}

export const ProductsPagination = memo((props: ProductsPaginationProps) => {
	const { className } = props;

	return <HStack className={classNames(cls.productsPagination, {}, [className])}>dsa</HStack>;
});
