import { MainLayout } from '@/shared/layouts';
import { memo } from 'react';

export const App = memo(() => {
	return (
		<div className={'app'}>
			{/* <Product product={{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 }} /> */}
			<MainLayout content={<div></div>} filters={<div></div>} />
		</div>
	);
});
