import { useSelector } from 'react-redux';
import SideNav from '../../layouts/SideNav';
import HeaderDashboard from '../../layouts/HeaderDashboard';
import { useState } from 'react';
import Options from '../../layouts/Options';
import PatientsTable from './Patients/PatientsTable';

const DashboardPage = () => {
    const { user } = useSelector((state) => state.user);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="w-full h-screen flex flex-col font-imprima">
            <HeaderDashboard showMenu={toggleMenu}></HeaderDashboard>
            <div className="w-full h-full md:flex bg-[#D9D9D9] flex-row relative">
                <div className="hidden md:flex">
                    <SideNav name={user?.name}></SideNav>
                </div>
                <div className="md:w-[70%] w-full h-full relative">
                    {isMenuOpen && (
                        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-lg z-10"></div>
                    )}
                    <div className="absolute inset-0 flex justify-center items-center z-20">
                        {isMenuOpen && (
                            <Options className="bg-white shadow-lg rounded-md" />
                        )}
                    </div>
                    <PatientsTable />
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
