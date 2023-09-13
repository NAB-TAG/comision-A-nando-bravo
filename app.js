const express = require('express');
const dotenv = require('dotenv');
const helmetMiddleware = require('./middleware/helmet');
const morganMiddleware = require('./middleware/morgan');
const corsMiddleware = require('./middleware/cors');
const routes = require('./routes');
const path = require('path');
const db = require('./config/database');

dotenv.config();
const app = express();
app.use('/', require('./routes'))
app.use(helmetMiddleware);
app.use(morganMiddleware);
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"))

// Configura el motor de plantillas EJS y establece la carpeta 'views' como la ubicación de las plantillas HTML
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use((req, res, next) => {
    res.status(404).render('404');
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`El servidor está escuchando en el puerto ${PORT}`);
});