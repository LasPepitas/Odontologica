import { ScheduleIcon, FileIcon, FilmIcon, MenuIcon } from '../assets/icons';
import Options from './Options'

const SideNav = ({ name }) => {
    return (
        <div className="w-full h-full  justify-center items-center p-12">
            <div className="w-full md:max-w-xs h-full border bg-white rounded-[35px] shadow-2xl p-4">
                <div className='w-full h-[60%] px-4 my-6'>
                    <div className='flex w-full h-1/4 bg-[#D9D9D9] text-[25px] rounded-[35px] items-center justify-center overflow-auto'>
                        NOMBRE EMPRESA
                    </div>
                    <div className='flex w-full h-1/2 items-center justify-center my-2'>
                        <img src="ruta_de_la_imagen" alt="PERFIL" className="rounded-full h-40 w-40 object-cover bg-[#D9D9D9]" />
                    </div>
                    <div className='flex w-full h-1/4 items-center justify-center bg-[#D9D9D9] text-[25px] rounded-[35px]'>
                        {name}
                    </div>
                </div>
                <hr className="w-[90%] border-t-2 border-gray-300 mx-auto my-1"/>
                <Options />
            </div>
        </div>
    );
}

export default SideNav;
