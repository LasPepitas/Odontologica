import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';
import { useState } from 'react';

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
            <h1>Login</h1>
            <button onClick={handleClickLogin}>Login</button>
        </AuthLayout>
    );
};

export default LoginPage;
