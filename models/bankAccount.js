// models/bankAccount.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const BankAccount = sequelize.define('BankAccount', {
  accountNo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ifscCode: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

BankAccount.sync();

module.exports = BankAccount;
