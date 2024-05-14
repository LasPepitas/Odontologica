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

export const authGoogle = async (user) => {
    try {
        const response = await api.post('/auth/google', user);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const loginWithGoogle = async (user) => {
    try {
        const response = await api.post('/auth/login-google', user);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const registerWithGoogle = async (user) => {
    try {
        const response = await api.post('/auth/register-google', user);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const getProfile = async (token) => {
    try {
        const response = await api.get('/auth/profile', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        return null;
    }
};
