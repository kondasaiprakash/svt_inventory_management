// models/steelCategory.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const SteelCategory = sequelize.define('SteelCategory', {
  size: {
    type: DataTypes.STRING(2),
    allowNull: false
  }
});

SteelCategory.sync()
module.exports = SteelCategory;
