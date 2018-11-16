const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PosicionSchema = new Schema({
    palabra: {
        type: String,
        required: true
    },
    cantidad:{
        type: Number,
        required: false
    }
});

module.exports  = Posicion = mongoose.model('posicion', PosicionSchema);