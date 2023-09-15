const express = require('express');
const dotenv = require('dotenv');
const helmetMiddleware = require('./middleware/helmet');
const morganMiddleware = require('./middleware/morgan');
const corsMiddleware = require('./middleware/cors');
const helmet = require('helmet');
const path = require('path');

dotenv.config();
const app = express();
// app.use(helmet());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(morganMiddleware);
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = require('./config/database');
app.use('/', require('./routes'))
const routes = require('./routes');

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