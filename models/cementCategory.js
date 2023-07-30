// models/cementCategory.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const CementCategory = sequelize.define('CementCategory', {
  grade: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

CementCategory.sync()
module.exports = CementCategory;
