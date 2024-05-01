import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';
import { useState } from 'react';
import { UserIcon, LockIcon } from '../../assets/icons';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const handleClickLogin = () => {
        setIsLoading(true);
        dispatch(setUser({ name: 'John Doe' }));
        navigate('/dashboard');
    };
    return (
        <AuthLayout>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold">
                    Iniciar sesión en ODONTOLOGICA
                </h1>
                <form>
                    <div className="flex justify-between items-center border-b-[4px] py-1 border-blue-400 rounded w-full text-gray-400 bg-white ring-transparent relative">
                        <img
                            src={UserIcon}
                            alt="icono de usuario"
                            className="size-8"
                        />
                        <input
                            type="email"
                            id="email"
                            placeholder="Correo"
                            className="px-2"
                        />
                    </div>
                    <div className="border-b-[4px] border-blue-400 px-2 py-1 rounded w-full text-gray-400 bg-white ring-transparent relative">
                        <img
                            src={LockIcon}
                            alt="candado icono"
                            className="size-8"
                        />
                        <input
                            type="password"
                            id="password"
                            placeholder="Contraseña"
                            className="ring-transparent border-none"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleClickLogin}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        disabled={isLoading}
                    />
                </form>
            </div>
        </AuthLayout>
    );
};

export default LoginPage;
