import api from './config';

export const getAppointmentsByDentist = async (dentistId) => {
    try {
        const response = await api.get(`/appointments/dentist/${dentistId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
