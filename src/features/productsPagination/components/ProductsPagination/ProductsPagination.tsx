import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProductsPagination.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button/Button';

interface ProductsPaginationProps {
	className?: string;
	totalPages: number;
	productsPage: number;
	onLoadPage: (page: number) => void;
	canShowPagination?: boolean;
}

export const ProductsPagination = memo((props: ProductsPaginationProps) => {
	const { className, totalPages, productsPage, onLoadPage, canShowPagination } = props;

	if (!canShowPagination) {
		return null;
	}

	return (
		<div className={classNames(cls.productsPagination, {}, [className])}>
			<HStack className={cls.flex} justify='between'>
				<Button onClick={() => onLoadPage(1)} disabled={productsPage === 1}>
					1
				</Button>
				<Button onClick={() => onLoadPage(productsPage - 1)} disabled={productsPage === 1}>
					Назад
				</Button>
				<Button onClick={() => {}} variant='outline'>
					{productsPage}
				</Button>
				<Button onClick={() => onLoadPage(productsPage + 1)} disabled={productsPage === totalPages}>
					Дальше
				</Button>
				<Button onClick={() => onLoadPage(totalPages)} disabled={productsPage === totalPages}>
					{totalPages}
				</Button>
			</HStack>
		</div>
	);
});
