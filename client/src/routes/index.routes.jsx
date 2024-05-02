import { Navigate, createBrowserRouter } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import { DashboardPage, LoginPage, RegisterPage } from '../pages';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicRoutes />,
        children: [
            { path: 'login', element: <LoginPage /> },
            { path: '/', element: <Navigate to="/login" /> },
            { path: 'register', element: <RegisterPage /> },
        ],
    },
    {
        path: '/',
        element: <PrivateRoutes />,
        children: [{ path: 'dashboard', element: <DashboardPage /> }],
    },
]);
