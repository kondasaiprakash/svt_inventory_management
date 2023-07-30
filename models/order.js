const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const User = require('./user');

// Define constants for order status
const OrderStatus = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  DELIVERED: 'delivered',
  COMPLETED: 'completed'
};

const Order = sequelize.define('Order', {
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  amountPending: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  orderStatus: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: OrderStatus.PROCESSING
  }
});

// Define associations with User
Order.belongsTo(User, {
  foreignKey: 'userId',
  allowNull: false
});

Order.sync();
module.exports = {
  Order,
  OrderStatus
};
