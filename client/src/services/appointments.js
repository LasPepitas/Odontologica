import api from './config';

export const getAppointmentsByDentist = async (dentistId) => {
    try {
        const response = await api.get(`/appointments/dentist/${dentistId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getAppointmentsByPatient = async (patientId) => {
    try {
        const response = await api.get(`/appointments/patient/${patientId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const createAppointment = async (data) => {
    try {
        const response = await api.post('/appointments', data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const updateAppointment = async (id, data) => {
    try {
        const response = await api.put(`/appointments/${id}`, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const deleteAppointment = async (id) => {
    try {
        const response = await api.delete(`/appointments/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getAppointmentById = async (id) => {
    try {
        const response = await api.get(`/appointments/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
