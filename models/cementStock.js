// models/cementStock.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Brand = require('./brand');
const CementCategory = require('./cementCategory');

const CementStock = sequelize.define('CementStock', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// Define associations with Brand and CementCategory
CementStock.belongsTo(Brand, {
  foreignKey: 'brandId',
  allowNull: false
});
CementStock.belongsTo(CementCategory, {
  foreignKey: 'cementCategoryId',
  allowNull: false
});

CementStock.sync()
module.exports = CementStock;
