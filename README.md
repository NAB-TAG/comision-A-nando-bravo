# Proyecto Node.js con Base de Datos Foro

Este es un proyecto Node.js que utiliza Sequelize para interactuar con una base de datos llamada "foro". A continuación, se detallan los pasos para iniciar el proyecto.

## Requisitos previos

Asegúrate de tener instalado Node.js y npm en tu sistema. Puedes descargarlos e instalarlos desde [nodejs.org](https://nodejs.org/).

Asegurate de tener una base de datos mysql con un puerto 3306, de no ser asi cambiar el puerto en el que estes usando editando el db_port en el archivo .env

## Instrucciones de configuración

**
1. **Instalar las dependencias

   ```bash
   npm install

2. **crear una base de datos llamada "foro"

3. **Ejecutar el siguiente comando

   ```bash
   npx sequelize db:migrate


