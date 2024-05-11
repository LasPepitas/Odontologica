import Payment from './payment.model.js';
import Notification from './notification.model.js';
import MedicalHistory from './medicalHistory.model.js';
import Appointment from './appointment.model.js';
import Dentist from './dentist.model.js';
import User from './user.model.js';
import Treatment from './treatment.model.js';
User.hasMany(Appointment, {
    foreignKey: 'id_user',
    targetKey: 'id',
});

Appointment.belongsTo(User, {
    foreignKey: 'id_user',
    targetKey: 'id',
});

// Relation between MedicalHistory with User, Appointment and Dentist

User.hasOne(MedicalHistory, {
    foreignKey: 'id_user',
    targetKey: 'id',
});

MedicalHistory.belongsTo(User, {
    foreignKey: 'id_user',
    targetKey: 'id',
});
MedicalHistory.belongsTo(Appointment, {
    foreignKey: 'id_appointment',
    targetKey: 'id',
});
MedicalHistory.belongsTo(Dentist, {
    foreignKey: 'id_dentist',
    targetKey: 'id',
});

// Relation between Dentist with Appointment

Dentist.hasMany(Appointment, {
    foreignKey: 'id_dentist',
    targetKey: 'id',
});

Appointment.belongsTo(Dentist, {
    foreignKey: 'id_dentist',
    targetKey: 'id',
});

// Relation between Appointment with Treatment

Appointment.belongsTo(Treatment, {
    foreignKey: 'id_treatment',
    targetKey: 'id',
});

Treatment.hasMany(Appointment, {
    foreignKey: 'id_treatment',
    targetKey: 'id',
});

// Notification relation with User

User.hasMany(Notification, {
    foreignKey: 'id_user',
    targetKey: 'id',
});

Notification.belongsTo(User, {
    foreignKey: 'id_user',
    targetKey: 'id',
});

// Payment relation with Appointment

Appointment.belongsTo(Payment, {
    foreignKey: 'id_payment',
    targetKey: 'id',
});

User.hasMany(Payment, {
    foreignKey: 'id_user',
    targetKey: 'id',
});

Payment.belongsTo(User, {
    foreignKey: 'id_user',
    targetKey: 'id',
});
