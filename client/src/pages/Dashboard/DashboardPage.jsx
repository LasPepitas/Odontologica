import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';

const DashboardPage = () => {
    // const { user } = useSelector((state) => state.user);
    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log('user:', user);
    console.log('auth:', isAuthenticated);
    return (
        <section>
            <h2>Dashboard</h2>
            <p>Welcome, {user?.name}</p>
            {!isAuthenticated && !isLoading && <p>Not logged in</p>}
        </section>
    );
};

export default DashboardPage;
