import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
const PrivateRoutes = () => {
    const { user } = useSelector((state) => state.user);
    const isAuth = user; // TODO: Change this to your auth logic
    return <section>{isAuth ? <Outlet /> : <Navigate to="/login" />}</section>;
};

export default PrivateRoutes;
