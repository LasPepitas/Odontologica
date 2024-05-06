import Appointment from '../models/appointment.model.js';
const AppointmentService = {};

AppointmentService.create = async (appointment) => {
    const { date, duration, status, payment } = appointment;
    if (!date || !duration || !status || !payment) {
        throw new Error('All fields are required');
    }
    const newAppointment = await Appointment.create({
        date,
        duration,
        status,
        payment,
    });
    return newAppointment;
};

AppointmentService.findAll = async () => {
    const appointments = await Appointment.findAll();
    return appointments;
};

AppointmentService.findOne = async (id) => {
    const appointment = await Appointment.findByPk(id);
    if (!appointment) {
        throw new Error('Appointment not found');
    }
    return appointment;
};

AppointmentService.update = async (id, appointment) => {
    const { date, duration, status, payment } = appointment;
    if (!date || !duration || !status || !payment) {
        throw new Error('All fields are required');
    }
    const AppointmentExist = await Appointment.findByPk(id);
    if (!AppointmentExist) {
        throw new Error('Appointment not found');
    }
    const updatedAppointment = await Appointment.update(appointment, {
        where: { id },
    });
    return updatedAppointment;
};

AppointmentService.delete = async (id) => {
    const AppointmentExist = await Appointment.findByPk(id);
    if (!AppointmentExist) {
        throw new Error('Appointment not found');
    }
    await Appointment.destroy({ where: { id } });
    return 'Appointment deleted';
};

export default AppointmentService;
