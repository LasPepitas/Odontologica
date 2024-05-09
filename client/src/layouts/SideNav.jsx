import { OutIcon, ToothIcon } from '../assets/icons';
import Options from './Options'
import { Link } from 'react-router-dom';

const SideNav = ({showMenu}) => {

    const handleOut = () =>{
        localStorage.clear();
    }

    return (
        <div className={`md:flex-col md:h-full ${!showMenu ? "hidden" : "flex h-[95%]"}`}>
            {showMenu ? 
                (<div className=" flex flex-col text-white w-full h-full justify-center items-center bg-[#3a38ca]">
                    <img
                        src={ToothIcon}
                        alt="diente icono"
                        className="size-7 mx-3 h-[20%]"
                    />
                    <div className='h-[70%]'>
                        <Options/>
                    </div>
                    <button className='hidden md:flex h-[10%]' onClick={handleOut}>
                        <img
                            src={OutIcon}
                            alt="consulta icono"
                            className="size-7 mx-3"
                        /><Link to='/login' className='text-white'>Salir</Link>
                    </button>
                    <button className='flex h-[10%] md:hidden' onClick={handleOut}>
                        <Link to='/login'><img
                            src={OutIcon}
                            alt="consulta icono"
                            className="size-7 mx-3"
                        /></Link>
                    </button>
                </div>) : null}
        </div>
    );
}

export default SideNav;
