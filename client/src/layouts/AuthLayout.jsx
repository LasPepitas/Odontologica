import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginImage } from '../assets/images';
import PropTypes from 'prop-types';
import { authGoogle } from '../services/auth';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
const AuthLayout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    useEffect(() => {
        const authUser = async () => {
            setIsLoading(true);
            try {
                const usuarioCodificado = new URLSearchParams(
                    window.location.search,
                ).get('usuario');
                if (usuarioCodificado) {
                    // Decodifica los datos del usuario desde base64 y conviértelos a objeto JavaScript
                    const usuario = JSON.parse(atob(usuarioCodificado));
                    const { user, token } = await authGoogle(usuario);
                    dispatch(setUser(user));
                    localStorage.setItem('token', token);
                    if (token) {
                        navigate('/dashboard');
                    }
                }
            } catch (error) {
                console.error(error);
            }
            setIsLoading(false);
        };
        authUser();
    }, [dispatch, navigate]);
    console.log(user);
    return (
        <main className="h-screen bg-white">
            <section className="flex justify-center items-center gap-x-6 h-full">
                <div className="flex-1 py-4 px-10">{children}</div>
                <div className="hidden md:block flex-1 ">
                    <img
                        src={LoginImage}
                        alt="Banner del login"
                        className="w-full h-screen object-cover object-center"
                    />
                </div>
            </section>
            {isLoading && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
                </div>
            )}
        </main>
    );
};

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthLayout;
