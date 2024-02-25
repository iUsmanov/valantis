import { createRoot } from 'react-dom/client';
import '@/app/styles/index.scss';
// eslint-disable-next-line fsd-paths-guard/relative-path-checker
import { RootLayout } from './app/components/RootLayout';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<RootLayout />);

/* import { createRoot } from 'react-dom/client';
import '@/app/styles/index.scss';
import { RouterProvider } from 'react-router-dom';
// eslint-disable-next-line fsd-paths-guard/relative-path-checker
import { router } from './app/providers/router';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);
 */
