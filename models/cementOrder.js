// models/cementOrder.js

const { DataTypes } = require('sequelize');
const { sequelize }  = require('../config/database');
const { Order } = require('./order');
const Brand = require('./brand');
const CementCategory = require('./cementCategory');

const CementOrder = sequelize.define('CementOrder', {
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// Define associations with Order, Brand, and CementCategory
CementOrder.belongsTo(Order, {
  foreignKey: 'orderId',
  allowNull: false
});
CementOrder.belongsTo(Brand, {
  foreignKey: 'brandId',
  allowNull: false
});
CementOrder.belongsTo(CementCategory, {
  foreignKey: 'cementCategoryId',
  allowNull: false
});

CementOrder.sync()
module.exports = CementOrder;
