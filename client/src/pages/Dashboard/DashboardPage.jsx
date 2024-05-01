import { useSelector } from 'react-redux';

const DashboardPage = () => {
    const { user } = useSelector((state) => state.user);
    console.log(user);
    return (
        <section>
            <h2>Dashboard</h2>
            <p>Welcome, {user.name}</p>
        </section>
    );
};

export default DashboardPage;
