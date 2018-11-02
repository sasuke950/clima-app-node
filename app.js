const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');

console.log(`Dirección Ingresada: ${argv.direccion}`);

lugar.getLugarLatLng(argv.direccion)
    .then(resp => console.log(resp))
    .catch(err => console.log(`${err} No se ah podido ejecutar la consulta`));