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
    const token = createToken({ id: user.id });
    console.log(user);
    return {
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
        token,
    };
};

AuthService.register = async (name, email, password) => {
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
        throw new Error('User already exists');
    }
    const hashPassword = await encrypt(password);
    const user = await User.create({ name, email, password: hashPassword });
    const token = createToken({ id: user.id });
    return {
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
        token,
    };
};

AuthService.registerGoogle = async (name, email) => {
    const user = await User.findOne({ where: { email } });
    if (user) {
        const token = createToken({ id: user.id });
        return {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
            token,
        };
    }
    const password = Math.random().toString(36).substring(2);
    const newUser = await User.create({ name, email, password });
    const token = createToken({ id: newUser.id });
    return {
        user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
        },
        token,
    };
};

export default AuthService;
