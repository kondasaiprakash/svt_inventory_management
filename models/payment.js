// models/payment.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const { Order }= require('./order');

const Payment = sequelize.define('Payment', {
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  paymentType: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Define associations with Order
Payment.belongsTo(Order, {
  foreignKey: 'orderId',
  allowNull: false
});

Payment.sync();
module.exports = Payment;
