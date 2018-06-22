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

// rp(options)
//     .then(resp => {
//         // console.log(JSON.stringify(resp.results, undefined, 2));
//         let location = resp.results[0].geometry.location;
//         let formatted_address = resp.results[0].formatted_address;
//         console.log(`Direccion: ${ formatted_address}`);
//         console.log(`lat: ${ location.lat }`);
//         console.log(`long: ${ location.lng }`);
//     })
//     .catch(e => console.log('ERROR!', e));