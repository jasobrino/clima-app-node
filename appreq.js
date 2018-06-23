const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLngReq(direccion);
        let dclima = await clima.getClimaReq(coors.lat, coors.lng);
        console.log([coors, dclima]);
        return `El clima en ${ coors.direccion } es de ${ dclima.temp }º con ${ dclima.humedad }% de humedad `;

    } catch (e) {
        return { msg: `No se pudo determinar el clima en ${argv.direccion}`, error: e };
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));