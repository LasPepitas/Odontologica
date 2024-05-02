import User from '../models/user.model';
import { createToken } from '../utils/createToken';
const AuthService = {};

AuthService.login = async (email, password) => {
    const user = await User.findOne({ where: { email, password } });
    if (!user) {
        throw new Error('Invalid credentials');
    }
    user.token = createToken({ id: user.id });
    return user;
};

AuthService.register = async (name, email, password) => {
    const user = await User.create({ name, email, password });
    user.token = createToken({ id: user.id });

    return user;
};

export default AuthService;
