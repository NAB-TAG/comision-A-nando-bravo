const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialectOptions: {
    // Otras opciones específicas de MySQL si es necesario
  },
});

// Define el modelo Tests
const Tests = sequelize.define('Test', {
  title: {
    type: DataTypes.STRING, // Tipo de dato del campo (cadena de texto en este caso)
    allowNull: false,       // No se permite que el campo esté vacío
  },
});

// ...

module.exports = { sequelize, Tests };
