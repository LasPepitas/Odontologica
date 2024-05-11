import api from './config';

export const getAppointmentsByDentist = async (dentistId) => {
    try {
        const response = await api.get(`/appointments/${dentistId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
