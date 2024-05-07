import { Navigate, createBrowserRouter } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import { DashboardPage, LoginPage, RegisterPage } from '../pages';
import Footer from '../components/Footer';
import TurnosPage from '../pages/Turnos/TurnosPage';
import ConsultasPage from '../pages/Consultas/ConsultasPage';
import PatientsTable from '../pages/Dashboard/Patients/PatientsTable';
import { AdminRoutes } from './AdminRoutes';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicRoutes />,
        children: [
            { path: 'login', element: <LoginPage /> },
            { path: '/', element: <Navigate to="/login" /> },
            { path: 'register', element: <RegisterPage /> },
            { path: 'footer', element: <Footer /> },
        ],
    },
    {
        path: '/',
        element: <PrivateRoutes />,
        children: [
            {
                path: 'dashboard',
                element: <DashboardPage />,
                children: [
                    { path: 'turnos', element: <TurnosPage /> },
                    { path: 'consultas', element: <ConsultasPage /> },
                    {
                        path: '',
                        element: <AdminRoutes />,
                        children: [
                            { path: 'pacientes', element: <PatientsTable /> },
                        ],
                    },
                ],
            },
            { path: 'turnos', element: <TurnosPage /> },
            { path: 'consultas', element: <ConsultasPage /> },
        ],
    },
]);
