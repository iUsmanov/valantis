// #router
import { AppRouteObject, AppRoutes } from '@/shared/types/router';
import { createBrowserRouter } from 'react-router-dom';
import {
	getRouteForbidden,
	getRouteMain,
	getRouteNotFound,
	getRouteProducts,
} from '@/shared/consts/router';
// eslint-disable-next-line fsd-paths-guard/hierarchy-imports-between-layers
import { RootLayout } from '@/app/components/RootLayout';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { ProductsPage } from '@/pages/ProductsPage';
import { Redirect } from '../components/Redirect/Redirect';

const routeConfig: Record<AppRoutes, AppRouteObject> = {
	main: {
		path: getRouteMain(),
		element: <Redirect whereTo={getRouteProducts()} />,
	},
	products: {
		path: getRouteProducts(),
		element: <ProductsPage />,
	},
	forbidden: {
		path: getRouteForbidden(),
		element: <ForbiddenPage />,
	},
	not_found: {
		path: getRouteNotFound(),
		element: <NotFoundPage />,
	},
};

export const routes = Object.values(routeConfig).map((route) => {
	return route;
});

export const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: routes,
	},
]);
