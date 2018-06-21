const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    }

    let data = resp.data.results[0];
    let coord = data.geometry.location;

    return {
        direccion: data.formatted_address,
        lat: coord.lat,
        lng: coord.lng
    }
}

module.exports = {
    getLugarLatLng
}