import { LogoGoogle } from '../../assets/images';

const ButtonGoogle = ({ text }) => {
    return (
        <a
            type="button"
            className="w-full flex px-4 py-1 rounded-vm gap-x-2 justify-center items-center text-gray-800 border-[1px] border-slate-200 font-semibold"
            href="https://odontologica.onrender.com/login"
        >
            <img src={LogoGoogle} alt="Logo de Google" className="size-8" />
            <span>{text}</span>
        </a>
    );
};

export default ButtonGoogle;
