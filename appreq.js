const axios = require('axios');
const argv = require('./config/yargs').argv;
var rp = require('request-promise');


let encodeUrl = encodeURI(argv.direccion);

var options = {
    uri: `https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`,
    json: true
};

rp(options)
    .then(resp => {
        // console.log(JSON.stringify(resp.results, undefined, 2));
        let location = resp.results[0].geometry.location;
        let formatted_address = resp.results[0].formatted_address;
        console.log(`Direccion: ${ formatted_address}`);
        console.log(`lat: ${ location.lat }`);
        console.log(`long: ${ location.lng }`);
    })
    .catch(e => console.log('ERROR!', e));