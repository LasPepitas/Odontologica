import { Outlet } from 'react-router-dom';
const PublicRoutes = () => {
    return (
        <div>
            <h1>Public Routes</h1>
            <Outlet />
        </div>
    );
};

export default PublicRoutes;
