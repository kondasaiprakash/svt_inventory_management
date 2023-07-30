// models/purchase.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Company = require('./company');
const Brand = require('./brand');

const Purchase = sequelize.define('Purchase', {
  invoice_number: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Define associations with Company and Brand
Purchase.belongsTo(Company, {
  foreignKey: 'companyId',
  allowNull: false
});
Purchase.belongsTo(Brand, {
  foreignKey: 'brandId',
  allowNull: false
});

Purchase.sync()
module.exports = Purchase;
