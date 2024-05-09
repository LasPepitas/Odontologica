import User from './user.model.js';
import Appointment from './appointment.model.js';
import MedicalHistory from './medicalHistory.model.js';
import Dentist from './dentist.model.js';

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
