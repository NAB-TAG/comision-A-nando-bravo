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

// Definne el modelo posts
const Posts = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING, 
    allowNull: false,       
  },
  content: {
    type: DataTypes.STRING, 
    allowNull: false,       
  },
  image: {
    type: DataTypes.STRING, 
    allowNull: false,       
  },
})
// ...

module.exports = { sequelize, Posts };
