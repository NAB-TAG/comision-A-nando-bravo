const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('foro', 'root', '', {
  dialect: 'mysql',
  host: 'localhost', // O la dirección del servidor MySQL
  port: 3306,         // Puerto de MySQL
  dialectOptions: {
    // Otras opciones específicas de MySQL si es necesario
  },
});

// Definir tus modelos y realizar otras configuraciones de Sequelize aquí

module.exports = sequelize;
