import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';
import SideNav from '../../layouts/SideNav'
import HeaderDashboard from '../../layouts/HeaderDashboard';

const DashboardPage = () => {
    const { user } = useSelector((state) => state.user);
    const { user: userGoogle, isAuthenticated, isLoading } = useAuth0();
    console.log('userGoogle:', userGoogle);
    console.log('auth:', isAuthenticated);
    return (
        <div className='w-full h-full flex flex-col'>
            <HeaderDashboard></HeaderDashboard>
            <div className='w-full h-[655px] flex bg-[#D9D9D9] flex-row'>
                <SideNav name={user?.name}></SideNav>
                <div className='w-[70%]'>
                    {!isAuthenticated && !isLoading && <p>Not logged in</p>}
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
