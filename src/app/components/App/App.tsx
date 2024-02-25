// eslint-disable-next-line fsd-paths-guard/public-api-imports, fsd-paths-guard/hierarchy-imports-between-layers
import { ProductsPage } from '@/pages/ProductsPage';
import { memo } from 'react';

export const App = memo(() => {
	return (
		<div className={'app'}>
			<ProductsPage />
		</div>
	);
});

/* // eslint-disable-next-line fsd-paths-guard/public-api-imports, fsd-paths-guard/hierarchy-imports-between-layers
import { AppRouter } from '@/app/providers/router/components/AppRouter/AppRouter';
import { memo } from 'react';

export const App = memo(() => {
	return (
		<div className={'app'}>
			<AppRouter />
		</div>
	);
}); */
