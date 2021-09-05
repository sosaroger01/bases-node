const argv=require('./config/yargs')
const colors = require('colors');

const {crearArchivo}= require("./helpers/multiplicar")

console.clear();

crearArchivo(argv)
    .then(nombreArchivo=>console.log(nombreArchivo.rainbow.bgWhite,'creado'))
    .catch(err=>console.log(err))