const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePosicionInput(data){
    let errors = {}

    data = data.toUpperCase();

    if (isEmpty(data)){
        errors.palabra = "La palabra no debe estar vacía";
    }

    if (Validator.isLength(data) > 10){
        errors.palabra = "La palabra no puede ser más larga que 10 caracteres";
    }

    if (data !== "TELEFE" && data !== "JAVA" && data !== "VIACOM"){
        errors.palabra = "La palabra ingresada no está dentro de las habilitadas";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }

}