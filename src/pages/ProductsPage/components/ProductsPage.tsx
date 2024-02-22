import { ProductsList } from '@/entities/Product';
import { MainLayout } from '@/shared/layouts';
import { memo } from 'react';

const products = [
	{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 },
	{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 },
	{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 },
	{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 },
	{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 },
	{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 },
	{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 },
	{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 },
	{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 },
	{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 },
	{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 },
	{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 },
	{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 },
	{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 },
	{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 },
	{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 },
	{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 },
	{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 },
	{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 },
	{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 },
	{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 },
	{ id: '1', brand: 'Gucci', name: 'Table', price: 10002 },
];

export const ProductsPage = memo(() => {
	return (
		<div>
			<MainLayout content={<ProductsList products={products} />} filters={<div></div>} />
		</div>
	);
});

// Есть
// ProductsPage - pages
// ProductsList - No
// ProductsList - entities
// ProductsFilters - widget
// ProductsPagination - feature
