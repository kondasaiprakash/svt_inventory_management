// models/brand.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Brand = sequelize.define('Brand', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Brand.sync()
module.exports = Brand;
