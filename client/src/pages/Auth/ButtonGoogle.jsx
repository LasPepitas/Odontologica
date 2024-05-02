import { useAuth0 } from '@auth0/auth0-react';
import { LogoGoogle } from '../../assets/images';

const ButtonGoogle = ({ text }) => {
    const { loginWithRedirect } = useAuth0();
    return (
        <button
            type="button"
            className="w-full flex px-4 py-1 rounded-vm gap-x-2 justify-center items-center text-gray-800 border-[1px] border-slate-200 font-semibold"
            onClick={() => loginWithRedirect()}
        >
            <img src={LogoGoogle} alt="Logo de Google" className="size-8" />
            <span>{text}</span>
        </button>
    );
};

export default ButtonGoogle;
