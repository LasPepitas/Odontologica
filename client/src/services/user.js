import api from './config';

export const register = async (user) => {
    try {
        const response = await api.post('/auth/register', user);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const login = async (user) => {
    try {
        const response = await api.post('/auth/login', user);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
};
