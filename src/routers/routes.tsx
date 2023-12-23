import { useEffect } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    useLocation,
} from 'react-router-dom';

import App from '@/App';
import { Home, CoursesPage, StudentsPage, RegisterStudent } from '@/pages';

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
            {
                path: '/students/register',
                element: <RegisterStudent />,
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
            <RouterProvider router={router} />
        </>
    );
}
