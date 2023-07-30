const { Sequelize } = require('sequelize');



database_name = 'InventoryManagement'
database_username = 'root'
database_password = 'kondas'

const sequelize = new Sequelize(database_name, database_username, database_password, {
    host: 'localhost',
    dialect: 'mysql'
  });


  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  async function dropAllTables() {
    await sequelize.drop();
  }


module.exports = 
{
    sequelize,
    dropAllTables
};