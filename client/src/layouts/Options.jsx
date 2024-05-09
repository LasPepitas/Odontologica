import { Link } from 'react-router-dom';
import { ScheduleIcon, FileIcon, ProfileIcon } from '../assets/icons';

const Options = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center md:h-[30%] md:p-1 md:mr-6">
            <ul className="w-full h-full flex flex-col">
                <li className="flex py-2 hover:text-white hover:md:text-[#0c8fae] hover:cursor-pointer">
                    <div className="md:flex hidden">
                        <img
                            src={ProfileIcon}
                            alt="cronograma icono"
                            className="size-7 mx-3"
                        />
                        <Link to="/dashboard/perfil" className="text-white">
                            Mostrar perfil
                        </Link>
                    </div>
                    <Link
                        to="/dashboard/perfil"
                        className="text-white flex md:hidden"
                    >
                        <img
                            src={ProfileIcon}
                            alt="cronograma icono"
                            className="size-7 mx-3"
                            style={{ display: 'block' }}
                        />
                    </Link>
                </li>
                <li className="flex py-2 hover:text-white hover:md:text-[#0c8fae] hover:cursor-pointer">
                    <div className="md:flex hidden">
                        <img
                            src={ScheduleIcon}
                            alt="cronograma icono"
                            className="size-7 mx-3"
                        />
                        <Link to="/dashboard/turnos" className="text-white">
                            Reservar turnos
                        </Link>
                    </div>

                    <Link
                        to="/dashboard/turnos"
                        className="text-white flex md:hidden"
                    >
                        <img
                            src={ScheduleIcon}
                            alt="cronograma icono"
                            className="size-7 mx-3"
                            style={{ display: 'block' }}
                        />
                    </Link>
                </li>
                <li className="flex py-2 hover:text-white hover:md:text-[#0c8fae] hover:cursor-pointer">
                    <div className="md:flex hidden">
                        <img
                            src={FileIcon}
                            alt="consulta icono"
                            className="size-7 mx-3"
                        />
                        <Link to="/dashboard/consultas" className="text-white">
                            Mis consultas
                        </Link>
                    </div>

                    <Link
                        to="/dashboard/consultas"
                        className="flex md:hidden text-white"
                    >
                        <img
                            src={FileIcon}
                            alt="consulta icono"
                            className="size-7 mx-3"
                        />
                    </Link>
                </li>
                <li className="hidden md:block pl-4 hover:text-blue-700">
                    <Link to="/dashboard/horarios" className="text-white">
                        Dent-Horarios
                    </Link>
                </li>
                <li className="hidden md:block pl-4 hover:text-blue-700">
                    <Link to="/dashboard/pacientes" className="text-white">
                        Dent-Pacientes
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Options;
