import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '@/App';
import { Home, CoursesPage } from '@/pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/courses',
                element: <CoursesPage />,
            },
        ],
    },
]);

export function Router() {
    return <RouterProvider router={router} />;
}
