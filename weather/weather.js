const axios = require('axios');

const getWeather = async(lat, lng) => {

    let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=7215b513b4dfb63aa5a03bed7540e901`);
    return response;

}

module.exports = {
    getWeather
}