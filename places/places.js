const axios = require('axios');

const getLatLng = async(address) => {

    let encodedUrl = encodeURI(address);

    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);

    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${address}`);
    }

    let formatAddress = response.data.results[0].formatted_address || 'N/A';
    let lat = response.data.results[0].geometry.location.lat || 'N/A';
    let lng = response.data.results[0].geometry.location.lng || 'N/A';

    return {
        "formatAddress": formatAddress,
        "lat": lat,
        "lng": lng
    }

};


module.exports.getLatLng = getLatLng;