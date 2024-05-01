import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';

const localStorageMiddleware = ({ getState }) => {
    return (next) => (action) => {
        const result = next(action);
        localStorage.setItem('user', JSON.stringify(getState().user));
        return result;
    };
};
const user = JSON.parse(localStorage.getItem('user')) || { user: null };

export const store = configureStore({
    reducer: {
        user: userSlice,
    },
    preloadedState: {
        user,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
});
