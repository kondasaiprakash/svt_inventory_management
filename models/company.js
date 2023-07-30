// models/company.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const BankAccount = require('./bankAccount');

const Company = sequelize.define('Company', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // Other attributes for the Company model
});

// Define the association between Company and BankAccount
BankAccount.hasOne(Company, {
  foreignKey: 'bankAccountId',
  allowNull: true,
  onDelete : 'CASCADE'
});
Company.belongsTo(BankAccount, {
  foreignKey: 'bankAccountId'
});

Company.sync()
module.exports = Company;
