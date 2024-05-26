import { useEffect, useState } from 'react';
import { OutIcon, ToothIcon } from '../assets/icons';
import Options from './Options';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const handleOut = () => {
        localStorage.clear();
    };
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };
        window.addEventListener('resize', handleResize);
        // Call the function to get the initial width
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    console.log('isMobile', isMobile);
    return (
        <div
            className={`flex md:flex-col md:h-full duration-500 ${
                isMobile ? 'h-14 w-screen fixed left-0 right-0 bottom-0' : ''
            }`}
        >
            <div className="py-6 flex md:flex-col md:justify-between text-white w-full h-full justify-center items-center bg-primary">
                <div className="flex flex-col gap-y-8">
                    <div className="items-center gap-x-4 hidden md:flex">
                        <img
                            src="https://seeklogo.com/images/D/dental-healt-circle-logo-BC48002938-seeklogo.com.png"
                            alt="diente icono"
                            className="size-8 mx-3 max-md:hidden "
                        />
                        <h1 className="font-bold">Dental Health</h1>
                    </div>
                    <div className="">
                        <Options />
                    </div>
                </div>
                <button className="hidden md:flex " onClick={handleOut}>
                    <Link to="/login" className="text-white md:flex flex-row">
                        <img
                            src={OutIcon}
                            alt="consulta icono"
                            className="size-7 mx-3"
                        />
                        Salir
                    </Link>
                </button>
                <button className="flex  md:hidden" onClick={handleOut}>
                    <Link to="/login">
                        <img
                            src={OutIcon}
                            alt="consulta icono"
                            className="size-7 mx-3"
                        />
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default SideNav;
