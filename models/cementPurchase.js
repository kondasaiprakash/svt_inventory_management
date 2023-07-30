// models/cementPurchase.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Purchase = require('./purchase');
const CementCategory = require('./cementCategory');

const CementPurchase = sequelize.define('CementPurchase', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// Define associations with Purchase and CementType
CementPurchase.belongsTo(Purchase, {
  foreignKey: 'purchaseId',
  allowNull: false
});
CementPurchase.belongsTo(CementCategory, {
  foreignKey: 'cementTypeId',
  allowNull: false
});

CementPurchase.sync()
module.exports = CementPurchase;
