// models/steelStock.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Brand = require('./brand');
const SteelCategory = require('./steelCategory');

const SteelStock = sequelize.define('SteelStock', {
  quantity: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

// Define associations with Brand and SteelCategory
SteelStock.belongsTo(Brand, {
  foreignKey: 'brandId',
  allowNull: false
});
SteelStock.belongsTo(SteelCategory, {
  foreignKey: 'steelCategoryId',
  allowNull: false
});

SteelStock.sync()
module.exports = SteelStock;
