import { useSelector } from 'react-redux';
import SideNav from '../../layouts/SideNav';
import HeaderDashboard from '../../layouts/HeaderDashboard';
import { useState } from 'react';
import Options from '../../layouts/Options';
import { Outlet } from 'react-router-dom';
import { ArrowIcon, ArrowLeftIcon } from '../../assets/icons';

const DashboardPage = () => {
    const { user } = useSelector((state) => state.user);
    const [showMenu,SetShowMenu] = useState(true);

    const handleMenu = () =>{
        SetShowMenu(!showMenu);
    }

    return (
        <div className={`w-full h-full ${showMenu ? "flex" : ""} font-imprima bg-white`}>
            <div className="w-[15%] h-full md:flex bg-white">
                <div className="md:flex">
                    <div className='bg-white md:hidden'>
                        <button onClick={handleMenu}>
                            <img
                                src={showMenu ? ArrowLeftIcon : ArrowIcon}
                                alt="flecha icono"
                                className='size-7'
                            />
                        </button>
                    </div>
                    <SideNav showMenu={showMenu} />
                </div>    
            </div>
            <div className={`${showMenu ? "w-[85%]" : "w-full"} h-screen overflow-y-scroll px-5`}>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardPage;
