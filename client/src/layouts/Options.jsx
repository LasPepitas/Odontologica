import { ScheduleIcon, FileIcon, FilmIcon } from '../assets/icons';

const Options = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center md:h-[30%] md:p-4'>
            <div>
                <ul className='w-full h-full'>
                    <li className='flex py-2 hover:text-white hover:md:text-[#0c8fae]'><img
                        src={ScheduleIcon}
                        alt="cronograma icono"
                        className="size-7 mx-3"
                    />Reserva mis turnos</li>
                    <li className='flex py-2 hover:text-white hover:md:text-[#0c8fae]'><img
                        src={FileIcon}
                        alt="consulta icono"
                        className="size-7 mx-3"
                    />Mis consultas</li>
                    <li className='flex py-2 hover:text-white hover:md:text-[#0c8fae]'><img
                        src={FilmIcon}
                        alt="consulta icono"
                        className="size-7 mx-3"
                    />Atencion Virtual</li>
                </ul>
            </div>
        </div>
    );
}

export default Options;
