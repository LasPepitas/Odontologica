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
        type: DataTypes.STRING,
        allowNull: false,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 120,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
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
});

export default Appointment;
