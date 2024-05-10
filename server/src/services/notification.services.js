import nodemailer from 'nodemailer';
import Notification from '../models/notification.model.js';
import User from '../models/user.model.js';
import { NODEMAILER_PASS } from '../config/env.config.js';
import Dentist from '../models/dentist.model.js';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
        user: 'odonto.app7@gmail.com',
        pass: NODEMAILER_PASS,
    },
});

const NotificationService = {};

NotificationService.create = async (notification) => {
    const { title, content, id_user } = notification;
    if (!title || !content || !id_user) {
        throw new Error('All fields are required');
    }
    const newNotification = await Notification.create({
        title,
        content,
        id_user,
    });
    const user = await User.findByPk(id_user);
    const infoNotificationEmail = await transporter.sendMail({
        from: 'Odonto App <odonto.app7@gmail.com>',
        to: user.email,
        subject: title,
        html: `
            <div>
                <h2 style="text-align: center; font-bold: bold;">${title}</h2>
                <p style="text-align: center;">${content}</p>
                <p style="text-align: center;">Revise su perfil en la aplicación para más detalles.</p>
                <a style="display: block; width: 200px; margin: 0 auto; background-color: #007bff; color: white; text-align: center; text-decoration: none; padding: 10px; border-radius: 5px;" href="https://odontologica.pages.dev/dashboard">Ir a mi perfil</a>
            </div>
        `,
    });
    console.log('Message sent: %s', infoNotificationEmail.messageId);
    return newNotification;
};

NotificationService.findAll = async () => {
    const notifications = await Notification.findAll();
    return notifications;
};

NotificationService.findOne = async (id) => {
    const notification = await Notification.findByPk(id);
    if (!notification) {
        throw new Error('Notification not found');
    }
    return notification;
};

NotificationService.update = async (id, notification) => {
    const { title, content, id_user } = notification;
    const NotificationExist = await Notification.findByPk(id);
    if (!NotificationExist) {
        throw new Error('Notification not found');
    }
    const updatedNotification = await Notification.update(
        {
            title,
            content,
            id_user,
        },
        {
            where: { id },
        },
    );
    return updatedNotification;
};

NotificationService.delete = async (id) => {
    const notification = await Notification.findByPk(id);
    if (!notification) {
        throw new Error('Notification not found');
    }
    await Notification.destroy({
        where: { id },
    });
    return notification;
};

// create notification for the dentist
NotificationService.createDentistNotification = async (notification) => {
    const { title, content, id_dentist } = notification;
    if (!title || !content || !id_dentist) {
        throw new Error('All fields are required');
    }
    const dentist = await Dentist.findByPk(id_dentist);
    const infoNotificationEmail = await transporter.sendMail({
        from: 'Odonto App <odonto.app7@gmail.com>',
        to: dentist.email,
        subject: title,
        html: `
            <div>
                <h2 style="text-align: center; font-bold: bold;">${title}</h2>
                <p style="text-align: center;">${content}</p>
                <p style="text-align: center;">Revise su perfil en la aplicación para más detalles.</p>
                <a style="display: block; width: 200px; margin: 0 auto; background-color: #007bff; color: white; text-align: center; text-decoration: none; padding: 10px; border-radius: 5px;" href="https://odontologica.pages.dev/dashboard">Ir a mi perfil</a>
            </div>
        `,
    });
    console.log('Message sent: %s', infoNotificationEmail.messageId);
    return true;
};

export default NotificationService;
