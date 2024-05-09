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
        <div
            className={`w-full h-screen overflow-hidden ${
                showMenu ? 'flex' : ''
            } font-imprima bg-white`}
        >
            {/* TODO: Arreglar problemas con las medidas  */}
            <div className="w-[15%] md:w-[10%] h-full bg-white">
                <div className="md:flex">
                    <div className="bg-white md:hidden">
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
