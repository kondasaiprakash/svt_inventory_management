// models/steelOrder.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const { Order } = require('./order');
const Brand = require('./brand');
const SteelCategory = require('./steelCategory');

const SteelOrder = sequelize.define('SteelOrder', {
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  quantity: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

// Define associations with Order, Brand, and SteelCategory
SteelOrder.belongsTo(Order, {
  foreignKey: 'orderId',
  allowNull: false
});
SteelOrder.belongsTo(Brand, {
  foreignKey: 'brandId',
  allowNull: false
});
SteelOrder.belongsTo(SteelCategory, {
  foreignKey: 'steelCategoryId',
  allowNull: false
});

SteelOrder.sync()
module.exports = SteelOrder;
