import { useNavigate, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProfile } from '../services';
import { useEffect, useState } from 'react';
import { setUser } from '../store/slices/userSlice';
import LoaderSignal from '../components/loaderSignal/LoaderSignal';
const PrivateRoutes = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchProfile = async () => {
            const profile = await getProfile();
            console.log('estado de autenticación:', profile);
            if (!profile) {
                setIsAuth(false);
                setIsLoading(false);
                navigate('/login');
                return;
            }
            dispatch(setUser(profile));
            setIsAuth(true);
            setIsLoading(false);
        };
        fetchProfile();
    }, [dispatch, isAuth]);
    if (!isAuth) navigate('/login');
    console.log('Autenticado: ', isAuth);
    console.log('loading: ', isLoading);
    return <>{isLoading && !isAuth ? <LoaderSignal /> : <Outlet />}</>;
};

export default PrivateRoutes;
