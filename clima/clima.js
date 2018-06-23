const axios = require('axios');
const rp = require('request-promise');

//procedimiento de llamada al api openweathermap con el paquete axios
const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=db6d40a9824fd954f79179f890878d3d`);

    if (resp.data.cod !== 200) {
        throw new Error('No ha sido posible recuperar el clima');
    }
    return {
        temp: resp.data.main.temp,
        humedad: resp.data.main.humidity
    };

}

//procedimiento de llamada al api openweathermap con el paquete request
const getClimaReq = async(lat, lng) => {

    const options = {
        uri: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=db6d40a9824fd954f79179f890878d3d`,
        json: true
    }

    let resp = await rp(options);

    if (resp.cod !== 200) {
        throw new Error('No ha sido posible recuperar el clima');
    }
    return {
        temp: resp.main.temp,
        humedad: resp.main.humidity
    };

}


module.exports = {
    getClima,
    getClimaReq
}