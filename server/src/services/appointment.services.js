import sequelize from '../config/database.js';
import NotificationService from './notification.services.js';
import Appointment from '../models/appointment.model.js';
import User from '../models/user.model.js';

const AppointmentService = {};

AppointmentService.create = async (appointment) => {
    const { date, duration, description, id_user, id_dentist, id_treatment } =
        appointment;
    if (!date || !duration || !id_user || !id_dentist || !id_treatment) {
        throw new Error('All fields are required');
    }
    const newAppointment = await Appointment.create({
        date,
        duration,
        description,
        id_user,
        id_dentist,
        id_treatment,
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
    const { date, duration, status, payment, id_treatment, description } =
        appointment;
    const AppointmentExist = await Appointment.findByPk(id);
    if (!AppointmentExist) {
        throw new Error('Appointment not found');
    }
    const updatedAppointment = await Appointment.update(
        {
            date,
            duration,
            status,
            payment,
            id_treatment,
            description,
        },
        {
            where: { id },
        },
    );

    NotificationService.create({
        title: 'Cita actualizada',
        content: `Tu cita ha sido actualizada`,
        id_user: AppointmentExist.id_user,
    });

    return {
        message: 'Appointment updated',
        updatedAppointment,
    };
};

AppointmentService.delete = async (id) => {
    const AppointmentExist = await Appointment.findByPk(id);
    if (!AppointmentExist) {
        throw new Error('Appointment not found');
    }
    await Appointment.destroy({ where: { id } });
    return 'Appointment deleted';
};

AppointmentService.findAllByDentist = async (id) => {
    const appointments = await sequelize.query(
        'SELECT id_user, status, date, duration, payment, u.name as user_name, u.email as user_email, u.lastname as user_lastname FROM appointments a JOIN users u ON a.id_user = u.id WHERE a.id_dentist = :id',
        {
            replacements: { id },
            type: sequelize.QueryTypes.SELECT,
        },
    );
    return appointments;
};

AppointmentService.findAllByUser = async (id) => {
    const userExist = await User.findByPk(id);
    if (!userExist) {
        throw new Error('User not found');
    }
    const appointments = await Appointment.findAll({
        where: { id_user: id },
    });

    return appointments;
};

export default AppointmentService;
