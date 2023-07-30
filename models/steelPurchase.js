// models/steelPurchase.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Purchase = require('./purchase');
const SteelCategory = require('./steelCategory');

const SteelPurchase = sequelize.define('SteelPurchase', {
  quantity: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

// Define associations with Purchase and SteelCategory
SteelPurchase.belongsTo(Purchase, {
  foreignKey: 'purchaseId',
  allowNull: false
});
SteelPurchase.belongsTo(SteelCategory, {
  foreignKey: 'steelTypeId',
  allowNull: false
});

SteelPurchase.sync()
module.exports = SteelPurchase;
