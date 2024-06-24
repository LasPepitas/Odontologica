import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ProfileIcon, ScheduleIcon, FileIcon, ToothIcon } from './iconsNav';
import { useSelector } from 'react-redux';
const navOptions = [
    {
        name: 'Perfil',
        path: '/dashboard/perfil',
        role: 'user',
        icon: ProfileIcon,
    },
    {
        name: 'Reservar',
        path: '/dashboard/turnos',
        role: 'user',
        icon: ScheduleIcon,
    },
    {
        name: 'Mis consultas',
        path: '/dashboard/consultas',
        role: 'user',
        icon: FileIcon,
    },
    {
        name: 'Horarios',
        path: '/dashboard/horarios',
        role: 'dentist',
        icon: ScheduleIcon,
    },
    {
        name: 'Pacientes',
        path: '/dashboard/pacientes',
        role: 'dentist',
        icon: ProfileIcon,
    },
    {
        name: 'Historial',
        path: '/dashboard/historial',
        role: 'dentist',
        icon: FileIcon,
    },
    {
        name: 'Odontograma',
        path: '/dashboard/odontograma',
        role: 'dentist',
        icon: ToothIcon,
    },
];

const Options = () => {
    const [optionSelected, setOptionSelected] = useState('Perfil');
    const { user } = useSelector((state) => state.user);
    return (
        <div className="w-full h-full flex flex-col justify-center items-center md:h-[30%] md:p-1 md:mr-6">
            <ul className="w-full h-full flex md:flex-col gap-y-2">
                {navOptions.map((option, index) => {
                    if (option.role === user.role) {
                        return (
                            <li
                                key={index}
                                className={`w-full h-full flex justify-center items-center px-2 py-1 rounded-md font-semibold text-white ${
                                    optionSelected === option.name
                                        ? 'bg-white text-blue-400'
                                        : 'text-white'
                                }`}
                            >
                                <Link
                                    to={option.path}
                                    className={`w-full h-full flex justify-start items-center gap-x-2 ${
                                        optionSelected === option.name
                                            ? 'text-primary'
                                            : 'text-white'
                                    }`}
                                    onClick={() =>
                                        setOptionSelected(option.name)
                                    }
                                >
                                    <option.icon color="currentColor" />
                                    <span className="hidden md:block">
                                        {option.name}
                                    </span>
                                </Link>
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
};

export default Options;
