import sequelize from '../config/database.js';
import { DataTypes } from 'sequelize';

const MedicalHistory = sequelize.define('medicalHistory', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    recommendations: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default MedicalHistory;
