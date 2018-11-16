const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Buscar el Modelo
const Posicion = require('../../models/Posicion');

// Validaciones
const validatePosicionInput = require('../../validation/posicion');

// @Ruta POST api/posicion/:palabra
// @desc Buscar palabra en la matriz
// @access Public
router.post('/:id', (req, res) => {

    const { errors, isValid } = validatePosicionInput(req.params.id);

    if (req.params.id) {
        agregarPalabra(req.params.id);
    }

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const secuencias = ["AGVNFT", "XJILSB", "CHAOHD", "ERCVTQ", "ASOYAO", "ERMYUA", "TELEFE"];
    for (let i = 0; i < secuencias.length; i++) {
        secuencias[i] = secuencias[i].split('');
    }
    const palabra = req.params.id.split('');
    let model = [];
    let posicionInicial = [0, 0];
    for (let i = 0; i < palabra.length; i++) {
        let encontroLetra = false;
        for (let j = posicionInicial[0]; j < secuencias.length; j++) {
            for (let k = posicionInicial[1]; k < secuencias[i].length; k++) {

                if (secuencias[j][k] == palabra[i]) {
                    if (i + 1 < palabra.length) {
                        if (j + 1 < secuencias.length && palabra[i + 1] == secuencias[j + 1][k]) {
                            posicionInicial = [j, k];
                            model.push([j + 1, k + 1]);
                            encontroLetra = true;
                        } else if (k + 1 < secuencias.length && palabra[i + 1] == secuencias[j][k + 1]) {
                            posicionInicial = [j, k];
                            model.push([j + 1, k + 1]);
                            encontroLetra = true;
                        } else if (j + 1 < secuencias.length && k + 1 < secuencias.length && palabra[i + 1] == secuencias[j + 1][k + 1]) {
                            posicionInicial = [j, k];
                            model.push([j + 1, k + 1]);
                            encontroLetra = true;
                        }
                    } else if (i + 1 == palabra.length) {
                        posicionInicial = [j, k];
                        model.push([j + 1, k + 1]);
                        encontroLetra = true;
                    }
                }
                if (encontroLetra) break;
            }
            if (encontroLetra) break;
        }
    }
    res.json(model);
});

// @Ruta Get api/posicion
// @desc Traer datos de Palabras
// @access Public
router.get("/", (req, res) => {
    Posicion.find().then(posiciones => {
        res.json(posiciones);
    }).catch(err => res.status(400).json({
        faltanposiciones: "No se encontraron las palabras"
    }));
})

function agregarPalabra(palabra) {
    Posicion.findOne({ palabra: palabra }).then(posicion => {
        if (posicion) {
            let datos = {
                palabra: palabra,
                cantidad: posicion.cantidad + 1
            }
            Posicion.findOneAndUpdate({ palabra: palabra }, { $set: datos }, { new: true }).then(pos => {
                { return pos }
            })
        } else {
            let datos = {
                palabra: palabra,
                cantidad: 1
            }
            new Posicion(datos).save().then(pos => { return pos });
        }
    })
}

module.exports = router;