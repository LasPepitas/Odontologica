import { useSelector } from 'react-redux';
import SideNav from '../../layouts/SideNav';
import HeaderDashboard from '../../layouts/HeaderDashboard';
import { useState } from 'react';
import Options from '../../layouts/Options';
import { Outlet } from 'react-router-dom';
import { ArrowIcon, ArrowLeftIcon } from '../../assets/icons';

const DashboardPage = () => {
    const { user } = useSelector((state) => state.user);
    const [showMenu, SetShowMenu] = useState(true);

    const handleMenu = () => {
        SetShowMenu(!showMenu);
    };

    return (
<<<<<<< HEAD
        <div className={`flex ${!showMenu ? "flex-col" : ""} w-full h-screen font-imprima bg-white`}>
            <div className={`w-[15%] md:h-full md:flex bg-white ${showMenu ? "h-full" : "h-[5%]"}`} >
                <div className={`md:flex ${showMenu ? "h-full" : "h-[5%]"}`} >
                    <div className='bg-white md:hidden h-[5%]'>
=======
        <div
            className={`w-full h-screen overflow-hidden ${
                showMenu ? 'flex' : ''
            } font-imprima bg-white`}
        >
            {/* TODO: Arreglar problemas con las medidas  */}
            <div className="w-[15%] md:w-[10%] h-full bg-white">
                <div className="md:flex">
                    <div className="bg-white md:hidden">
>>>>>>> 4d0a25017d6c77094b28c2c780dbd2c9df0ac1f7
                        <button onClick={handleMenu}>
                            <img
                                src={showMenu ? ArrowLeftIcon : ArrowIcon}
                                alt="flecha icono"
                                className="size-7"
                            />
                        </button>
                    </div>
                    <SideNav showMenu={showMenu} />
                </div>
            </div>
            <div
                className={`${
                    showMenu ? 'w-[85%]' : 'w-full'
                } h-screen px-5 pt-10 mx-auto`}
            >
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardPage;
