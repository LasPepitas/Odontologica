import sequelize from '../config/database.js';
import { DataTypes } from 'sequelize';

const MedicalHistory = sequelize.define('medicalHistory', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    odontograma_canva: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    data_medica: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    anexos: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

export default MedicalHistory;
