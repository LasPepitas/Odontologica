import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';
import AuthLayout from '../../layouts/AuthLayout';

import { UserIcon, LockIcon } from '../../assets/icons';
import { LogoGoogle } from '../../assets/images';
import { useAuth0 } from '@auth0/auth0-react';
const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const handleClickLogin = () => {
        setIsLoading(true);
        dispatch(setUser({ name: 'John Doe' }));
        navigate('/dashboard');
    };
    const { loginWithRedirect } = useAuth0();
    return (
        <AuthLayout>
            <div className="h-full flex flex-col justify-center w-full md:w-[80%] lg:w-[60%] max-w-[480px] mx-auto">
                <header>
                    <h2 className="text-3xl font-bold mb-10 text-left">
                        Inicia sesión
                    </h2>
                </header>
                <form className="flex flex-col gap-y-9 w-full">
                    <label
                        htmlFor="email"
                        className="input-form-auth-container"
                    >
                        <img
                            src={UserIcon}
                            alt="icono de usuario"
                            className="size-7"
                        />
                        <input
                            type="email"
                            id="email"
                            placeholder="Correo"
                            className="px-2 w-full bg-transparent"
                        />
                    </label>
                    <label
                        htmlFor="password"
                        className="input-form-auth-container"
                    >
                        <img
                            src={LockIcon}
                            alt="candado icono"
                            className="size-7"
                        />
                        <input
                            type="password"
                            id="password"
                            placeholder="Contraseña"
                            className="px-2 w-full bg-transparent"
                        />
                    </label>
                    <div className="flex items-center justify-center gap-x-3">
                        <a href="/" className="text-center text-primary flex-1">
                            ¿Olvidaste tu contraseña?{' '}
                        </a>
                        <button
                            type="button"
                            onClick={handleClickLogin}
                            className="w-full flex-1 bg-blue-500 text-white px-4 py-2 rounded-vm font-semibold"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Cargando...' : 'Iniciar sesión'}
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="button"
                            className="w-full flex px-4 py-1 rounded-vm gap-x-2 justify-center items-center text-gray-800 border-[1px] border-slate-200 font-semibold"
                            onClick={() => loginWithRedirect()}
                        >
                            <img
                                src={LogoGoogle}
                                alt="Logo de Google"
                                className="size-8"
                            />
                            <span>Iniciar sesión con Google</span>
                        </button>
                    </div>
                    <hr className="border-t border-slate-200" />
                    <p className="text-center text-gray-800">
                        ¿No tienes una cuenta?{' '}
                        <Link to="/register" className="text-primary font-bold">
                            Regístrate
                        </Link>
                    </p>
                </form>
            </div>
        </AuthLayout>
    );
};

export default LoginPage;
