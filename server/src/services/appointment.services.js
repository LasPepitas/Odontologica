import sequelize from '../config/database.js';
import NotificationService from './notification.services.js';
import Appointment from '../models/appointment.model.js';
import User from '../models/user.model.js';
import Payment from '../models/payment.model.js';
import { uploadImage } from '../utils/uploadImage.js';
const AppointmentService = {};

AppointmentService.create = async (appointment, image = null) => {
    const {
        date,
        duration,
        description,
        id_user,
        id_dentist,
        id_treatment,
        amount,
    } = appointment;
    console.log(date, duration, id_user, id_dentist, id_treatment, amount);
    if (
        !date ||
        !duration ||
        !id_user ||
        !id_treatment ||
        !amount ||
        id_dentist === null
    ) {
        throw new Error('All fields are required for the appointment');
    }

    const dateOccupied = await Appointment.findOne({
        where: { date, id_dentist },
    });
    if (dateOccupied) {
        throw new Error('Date is already occupied');
    }
    let payment_receipt_image = null;
    if (image) {
        const { tempFilePath } = image;
        const { secure_url } = await uploadImage(tempFilePath);
        payment_receipt_image = secure_url;
    }

    const newPayment = await Payment.create({
        amount,
        payment_method: 'yape',
        payment_receipt_image,
        id_user,
    });
    await NotificationService.createDentistNotification({
        title: 'Nueva cita',
        content: `Tienes una nueva cita programada para el ${date}`,
        id_dentist,
    });
    const newAppointment = await Appointment.create({
        date,
        duration,
        description,
        id_user,
        id_dentist,
        id_treatment,
        id_payment: newPayment.id,
    });

    return newAppointment;
};

AppointmentService.findAll = async () => {
    const appointments = await Appointment.findAll();
    return appointments;
};

AppointmentService.findOne = async (id) => {
    const appointment = await Appointment.findOne({
        where: { id },
        include: [
            {
                model: User,
                as: 'user',
                attributes: ['name', 'email', 'lastname'],
            },
        ],
    });
    if (!appointment) {
        throw new Error('Appointment not found');
    }
    return appointment;
};

AppointmentService.update = async (id, appointment) => {
    const { date, duration, status, id_treatment, description } = appointment;
    const AppointmentExist = await Appointment.findByPk(id);
    if (!AppointmentExist) {
        throw new Error('Appointment not found');
    }
    const updatedAppointment = await Appointment.update(
        {
            date,
            duration,
            status,
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
        'SELECT a.id, id_user, status, date, duration, u.name as user_name, u.email as user_email, u.lastname as user_lastname FROM appointments a JOIN users u ON a.id_user = u.id WHERE a.id_dentist = :id',
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

AppointmentService.updateStatus = async (id, status) => {
    const appointment = await Appointment.findByPk(id);
    if (!appointment) {
        throw new Error('Appointment not found');
    }
    const updatedAppointment = await Appointment.update(
        { status },
        { where: { id } },
    );

    return {
        message: 'Appointment updated',
        updatedAppointment,
    };
};
AppointmentService.getAppointmentInfo = async (id) => {
    const appointment = await Appointment.findOne({
        where: { id },
        include: [
            {
                model: User,
                as: 'user',
                attributes: ['name', 'email', 'lastname'],
            },
            {
                model: Payment,
                as: 'payment',
                attributes: [
                    'amount',
                    'payment_method',
                    'payment_receipt_image',
                ],
            },
        ],
    });
    if (!appointment) {
        throw new Error('Appointment not found');
    }
    return {
        appointment,
    };
};

AppointmentService.updatePayment = async (id, payment) => {
    const appointment = await Appointment.findByPk(id);
    if (!appointment) {
        throw new Error('Appointment not found');
    }
    const updatedPayment = await Payment.update(payment, {
        where: { id: appointment.id_payment },
    });

    return {
        message: 'Payment updated',
        updatedPayment,
    };
};

export default AppointmentService;
