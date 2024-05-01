import { LoginImage } from '../assets/images';
import PropTypes from 'prop-types';

const AuthLayout = ({ children }) => {
    return (
        <main className="h-screen ">
            <section className="bg-red-200 flex justify-center gap-x-6">
                <div className="flex-1">{children}</div>
                <div className="hidden md:block flex-1">
                    <img
                        src={LoginImage}
                        alt="Banner del login"
                        className="w-full h-screen object-cover object-center"
                    />
                </div>
            </section>
        </main>
    );
};

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthLayout;
