import {
    createBrowserRouter,
    RouterProvider,
    useLocation,
} from 'react-router-dom';

import App from '@/App';
import { Home, CoursesPage, StudentsPage } from '@/pages';
import { useEffect } from 'react';

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
            {
                path: '/students/:id',
                element: <StudentsPage />,
            },
        ],
    },
]);

export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export function Router() {
    return (
        <>
            <RouterProvider router={router} />;
        </>
    );
}
