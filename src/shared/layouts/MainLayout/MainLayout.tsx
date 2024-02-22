import { ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainLayout.module.scss';

interface MainLayoutProps {
	className?: string;
	content: ReactElement;
	filters?: ReactElement;
}

export const MainLayout = (props: MainLayoutProps) => {
	const { className, content, filters } = props;

	return (
		<div className={classNames(cls.mainLayout, {}, [className])}>
			<div className={cls.products}>{content}</div>
			<div className={cls.filters}>{filters}</div>
		</div>
	);
};
