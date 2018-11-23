const express = require('express');
const bodyParser = require('body-parser');

//Buscar apis en routes
//const posicion = require('./routes/api/posicion');

const app = express();

//Aplicar middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Usar api
//app.use('/api/posicion',posicion);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on Port ${port}`));

module.exports = app;