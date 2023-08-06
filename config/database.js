const { Sequelize } = require('sequelize');



// database_name = 'InventoryManagement'
// database_username = 'root'
// database_password = 'kondas'
// const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: 'database', // This should match the service name in the docker-compose.yml
    dialect: 'mysql',
  }
);

// module.exports = sequelize;

// const sequelize = new Sequelize(database_name, database_username, database_password, {
//     host: 'localhost',
//     dialect: 'mysql'
//   });


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