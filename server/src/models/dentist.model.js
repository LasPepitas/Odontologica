import sequelize from '../config/database.js';
import { DataTypes } from 'sequelize';

const Dentist = sequelize.define('dentist', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    specialty: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    schedule: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Dentist;
