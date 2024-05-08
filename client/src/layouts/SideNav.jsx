import { OutIcon, ToothIcon } from '../assets/icons';
import Options from './Options'
import { Link } from 'react-router-dom';

const SideNav = ({showMenu}) => {

    const handleOut = () =>{
        localStorage.clear();
    }

    return (
        <div className='flex flex-col'>
            {showMenu ? (<div className=" flex flex-col text-white w-full h-screen justify-center items-center bg-[#3a38ca]">
                    <img
                        src={ToothIcon}
                        alt="diente icono"
                        className="size-7 mx-3 mb-20 h-20%"
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
                    <button className='flex h-[10%] md:hidden'>
                        <img
                            src={OutIcon}
                            alt="consulta icono"
                            className="size-7 mx-3"
                        />
                    </button>
            </div>) : <></>}
        </div>
    );
}

export default SideNav;
