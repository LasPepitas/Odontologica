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
    const token = createToken({ id: user.id, role: user.role });
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
    const token = createToken({ id: user.id, role: user.role });
    return {
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
        token,
    };
};

AuthService.profile = async (id) => {
    const user = await User.findOne({ where: { id: id } });
    if (!user) {
        throw new Error('User not found');
    }
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
    };
};

AuthService.registerGoogle = async (user) => {
    const { email, name } = user;
    const userExist = await User.findOne({ where: { email } });
    if (userExist) {
        const token = createToken({ id: userExist.id, role: userExist.role });
        return {
            user: {
                id: userExist.id,
                name: userExist.name,
                email: userExist.email,
            },
            token,
        };
    }
    const password = await encrypt(Math.random().toString(36).substring(2));
    const newUser = await User.create({ name, email, password });
    const token = createToken({ id: newUser.id, role: newUser.role });
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
