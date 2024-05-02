import User from '../models/user.model.js';
import { createToken } from '../utils/createToken.js';
import { encrypt, verified } from '../utils/bcryp.handler.js';
const AuthService = {};

AuthService.login = async (email, password) => {
    const user = await User.findOne({ where: { email } });
    if (!user) {
        throw new Error('Invalid credentials');
    }
    const isCorrect = await verified(password, user.password);
    if (!isCorrect) {
        throw new Error('Invalid credentials');
    }
    user.password = undefined;
    user.token = createToken({ id: user.id });
    return user;
};

AuthService.register = async (name, email, password) => {
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
        throw new Error('User already exists');
    }
    const hashPassword = await encrypt(password);
    const user = await User.create({ name, email, password: hashPassword });
    user.token = createToken({ id: user.id });
    user.password = undefined;
    return user;
};

export default AuthService;
