import sequelize from '../config/database.js';
import { DataTypes } from 'sequelize';

const Payment = sequelize.define('payment', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    payment_method: {
        type: DataTypes.ENUM('card', 'bank transfer', 'yape', 'plin'),
        allowNull: false,
    },
    transaction_reference: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    payment_receipt_image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('pending', 'completed'),
        allowNull: false,
        defaultValue: 'pending',
    },
});

export default Payment;
