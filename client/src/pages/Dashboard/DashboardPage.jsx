import { Outlet } from 'react-router-dom';
import SideNav from '../../layouts/SideNav';

const DashboardPage = () => {
    return (
        <div
            className={`w-full h-screen font-imprima bg-white grid grid-cols-1 md:grid-cols-[1fr_7fr] gap-x-3 md:gap-x-4 lg:gap-x-8`}
        >
            <SideNav />
            <div
                className={`w-full h-full px-5 mx-auto pt-10 overflow-y-scroll pb-14 md:mb-0`}
            >
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardPage;
