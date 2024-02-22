import { MainLayout } from '@/shared/layouts';
import { memo } from 'react';

export const ProductsPage = memo(() => {
	return (
		<div>
			{/* <Product product={{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 }} /> */}
			<MainLayout content={<div></div>} filters={<div></div>} />
		</div>
	);
});

// Есть ProductsPage, ProductsList, ProductsFilters
