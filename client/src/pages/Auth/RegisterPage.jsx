import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';
import AuthLayout from '../../layouts/AuthLayout';

import { UserIcon, LockIcon, EmailIcon } from '../../assets/icons';
import ButtonGoogle from './ButtonGoogle';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const handleClickRegister = () => {
        setIsLoading(true);
        dispatch(setUser({ name: 'John Doe' }));
        navigate('/dashboard');
    };

    return (
        <AuthLayout>
            <div className="h-full flex flex-col justify-center w-full md:w-[80%] lg:w-[60%] max-w-[480px] mx-auto">
                <header>
                    <h2 className="text-3xl font-bold mb-10 text-left">
                        Regístrate
                    </h2>
                </header>
                <form className="flex flex-col gap-y-9 w-full mb-8">
                    <label
                        htmlFor="name"
                        className="input-form-auth-container"
                    >
                        <img
                            src={UserIcon}
                            alt="icono de usuario"
                            className="size-7"
                        />
                        <input
                            type="text"
                            id="name"
                            placeholder="Nombre"
                            className="px-2 w-full bg-transparent text-black"
                        />
                    </label>
                    <label
                        htmlFor="email"
                        className="input-form-auth-container"
                    >
                        <img
                            src={EmailIcon}
                            alt="icono de correo"
                            className="size-7"
                        />
                        <input
                            type="email"
                            id="email"
                            placeholder="Correo"
                            className="px-2 w-full bg-transparent text-black"
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
                            className="px-2 w-full bg-transparent text-black"
                        />
                    </label>
                    <div className="flex items-center justify-center gap-x-3">
                        <button
                            type="button"
                            onClick={handleClickRegister}
                            className="w-full flex-1 bg-blue-500 text-white px-4 py-2 rounded-vm font-semibold"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Cargando...' : 'Registrarse'}
                        </button>
                    </div>
                </form>
                <ButtonGoogle text="Regístrate con Google" />
                <hr className="border-t border-slate-200 my-5" />
                <footer>
                    <p className="text-center">
                        ¿Ya tienes una cuenta?{' '}
                        <Link to="/login" className="text-primary font-bold">
                            Inicia sesión
                        </Link>
                    </p>
                </footer>
            </div>
        </AuthLayout>
    );
};

export default RegisterPage;
