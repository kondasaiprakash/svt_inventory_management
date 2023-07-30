const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const BankAccount = require("./bankAccount")

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Define the association between User and BankAccount
BankAccount.hasOne(User, {
    foreignKey: 'bankAccountId',
    allowNull: true,
    onDelete :'CASCADE'
  });
  User.belongsTo(BankAccount, {
    foreignKey: 'bankAccountId'
  });

User.sync();

module.exports = User;
