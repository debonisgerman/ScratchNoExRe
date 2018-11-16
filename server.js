const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Buscar apis en routes
const posicion = require('./routes/api/posicion');

const app = express();

//Aplicar middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

const db = require('./config/keys').mongoURI;

mongoose.connect(db, {useNewUrlParser: true})
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.log(err));

//Armar ruteos
app.use('/api/posicion',posicion);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on Port ${port}`));

module.exports = app;