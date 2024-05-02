import { ScheduleIcon, FileIcon, FilmIcon } from '../assets/icons';

const SideNav = ({name}) => {
    return (
        <div className="w-1/4 h-[100%] flex justify-center items-center">
            <div className="w-72 h-[75%] border bg-white rounded-[35px] shadow-2xl">
                <div className='w-full h-[60%] px-4'>
                    <div className='flex w-[100%] h-[15%] items-center justify-center bg-[#D9D9D9] text-[25px] rounded-xl my-4'>
                        NOMBRE EMPRESA
                    </div>
                    <div className='flex w-full h-[60%] items-center justify-center my-2'>
                        <img src="ruta_de_la_imagen" alt="PERFIL" className="rounded-full h-40 w-40 object-cover bg-[#D9D9D9]" />
                    </div>
                    <div className='flex w-[100%] h-[15%] items-center justify-center bg-[#D9D9D9] text-[25px] rounded-xl my-1'>
                        {name}
                    </div>
                </div>
                <hr className="w-[90%] border-t-2 border-gray-300 justify-center mx-4 my-1"/>
                <div className='w-[100%] h-[40%] p-4'>
                    <ul className='w-full h-full'>
                        <li className='flex py-2'><img
                            src={ScheduleIcon}
                            alt="cronograma icono"
                            className="size-7 mx-3"
                        />Reserva mis turnos</li>
                        <li className='flex py-2'><img
                            src={FileIcon}
                            alt="consulta icono"
                            className="size-7 mx-3"
                        />Mis consultas</li>
                        <li className='flex py-2'><img
                            src={FilmIcon}
                            alt="consulta icono"
                            className="size-7 mx-3"
                        />Atencion Virtual</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideNav;
