import sequelize from '../config/database.js';
import { DataTypes } from 'sequelize';

const Appointment = sequelize.define('appointment', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 120,
    },
    status: {
        type: DataTypes.ENUM(
            'pending',
            'completed',
            'cancelled',
            'rescheduled',
        ),
        allowNull: false,
        defaultValue: 'pending',
    },
    payment: {
        type: DataTypes.ENUM('pending', 'completed'),
        allowNull: false,
        defaultValue: 'pending',
    },
});

export default Appointment;
