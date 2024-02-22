import { Product } from '@/entities/Product';
import { memo } from 'react';

export const App = memo(() => {
	return (
		<div className={'app'}>
			<Product product={{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 }} />
		</div>
	);
});
