import { Navigate, createBrowserRouter } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import {
    DashboardPage,
    LoginPage,
    RegisterPage,
    HistorialPage,
    NotFoundPage,
} from '../pages';
import TurnosPage from '../pages/Turnos/TurnosPage';
import ConsultasPage from '../pages/Consultas/ConsultasPage';
import HorariosTable from '../pages/Dashboard/Horarios/HorariosTable';
import PatientsTable from '../pages/Dashboard/Patients/PatientsTable';
import { AdminRoutes } from './AdminRoutes';
import LandigPage from '../pages/Landing/LandigPage';
import PerfilPage from '../pages/Perfil/PerfilPage';
import Pagos from '../pages/Turnos/Pagos/Pagos';
import PatientIndividual from '../pages/Dashboard/Patients/PatientIndividual';
import Odontograma from '../pages/Dashboard/Odontograma/Odontograma';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicRoutes />,
        children: [
            { path: 'login', element: <LoginPage /> },
            { path: 'register', element: <RegisterPage /> },
            { path: '/', element: <LandigPage /> },
            { path: '404', element: <NotFoundPage /> },
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
                    { path: 'perfil', element: <PerfilPage /> },

                    {
                        path: '',
                        element: <AdminRoutes />,
                        children: [
                            { path: 'pacientes', element: <PatientsTable /> },
                            { path: 'horarios', element: <HorariosTable /> },
                            { path: 'reporte', element: <div>Reporte</div> },
                            {
                                path: 'pacientes/:id',
                                element: <PatientIndividual />,
                            },
                            {
                                path: 'historial',
                                element: <HistorialPage />,
                            },
                            {
                                path: 'odontograma',
                                element: <Odontograma/>,
                            }
                        ],
                    },
                    { index: true, element: <PerfilPage /> },
                ],
            },
            { path: 'pagos', element: <Pagos /> },
        ],
    },
    {
        path: '*',
        element: <Navigate to="/404" />,
    },
]);
