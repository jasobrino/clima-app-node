const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async(direccion) => {

    try {
        //hasta que no temina la llamada asíncrona no continúa la ejecución
        let coors = await lugar.getLugarLatLng(direccion);
        console.log(coors);
        let dclima = await clima.getClima(coors.lat, coors.lng);
        console.log(dclima);

        return `El clima en ${ coors.direccion } es de ${ dclima.temp } con ${ dclima.humedad }% de humedad `;

    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));