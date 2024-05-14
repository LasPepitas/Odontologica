import sequelize from '../config/database.js';
import { DataTypes } from 'sequelize';

const Dentist = sequelize.define('dentist', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    specialty: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    schedule: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Dentist;
