import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClickLogin = () => {
        dispatch(setUser({ name: 'John Doe' }));
        navigate('/dashboard');
    };
    return (
        <section>
            <h2>Iniciar sesion</h2>
            <button
                onClick={handleClickLogin}
                className="bg-blue-600 py-2 px-4 rounded-2xl"
            >
                Login
            </button>
        </section>
    );
};

export default LoginPage;
